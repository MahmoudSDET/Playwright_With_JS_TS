const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

class ExcelUtils {
    static async loadWorksheet(filePath, sheetName = 'Sheet1') {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(sheetName);
        if (!worksheet) throw new Error(`Sheet "${sheetName}" not found`);
        return { workbook, worksheet };
    }

    static async saveWorkbook(workbook, filePath) {
        await workbook.xlsx.writeFile(filePath);
    }

    static async findCellByValue(worksheet, searchText) {
        let output = { row: -1, column: -1 };
        worksheet.eachRow((row, rowNumber) => {
            row.eachCell((cell, colNumber) => {
                if (cell.value === searchText) {
                    output = { row: rowNumber, column: colNumber };
                }
            });
        });
        return output;
    }

    static async writeExcelTest(searchText, replaceText, change, filePath) {
        const { workbook, worksheet } = await this.loadWorksheet(filePath);
        const cellPos = await this.findCellByValue(worksheet, searchText);

        if (cellPos.row === -1) throw new Error(`"${searchText}" not found`);

        const cell = worksheet.getCell(cellPos.row, cellPos.column + change.colChange);
        cell.value = replaceText;

        await this.saveWorkbook(workbook, filePath);
    }

    static async readExcelByHeader(filePath, sheetName, headerName, rowNumber) {
        const { worksheet } = await this.loadWorksheet(filePath, sheetName);

        let columnIndex;
        worksheet.getRow(1).eachCell((cell, colNumber) => {
            if (cell.value && cell.value.toString().trim().toLowerCase() === headerName.toLowerCase()) {
                columnIndex = colNumber;
            }
        });

        if (!columnIndex) throw new Error(`Header "${headerName}" not found`);

        const cellValue = worksheet.getRow(rowNumber).getCell(columnIndex).value;

        return { value: cellValue, row: rowNumber, column: columnIndex };
    }
/**
 * Update a cell in a row where searchText is found, by column header.
 * @param {string} filePath - Path to the Excel file.
 * @param {string} sheetName - Sheet name (default 'Sheet1').
 * @param {string} searchText - Value to search for in any cell.
 * @param {string} targetHeader - Header of the column to update.
 * @param {string|number} newValue - Value to set in the target column.
 * @returns {Promise<number|null>} - Row number updated, or null if not found.
 */
static async updateCellBySearchAndHeader(filePath, sheetName = 'Sheet1', searchText, targetHeader, newValue) {
    const { workbook, worksheet } = await this.loadWorksheet(filePath, sheetName);

    // Find the target column index by header
    let targetCol = null;
    worksheet.getRow(1).eachCell((cell, colNumber) => {
        if (cell.value && cell.value.toString().trim().toLowerCase() === targetHeader.toLowerCase()) {
            targetCol = colNumber;
        }
    });
    if (!targetCol) throw new Error(`Header "${targetHeader}" not found`);

    // Find the row with searchText and update the target column in that row
    let foundRow = null;
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell) => {
            if (cell.value && cell.value.toString().trim() === searchText) {
                row.getCell(targetCol).value = newValue;
                foundRow = rowNumber;
            }
        });
    });

    if (foundRow) {
        await this.saveWorkbook(workbook, filePath);
        console.log(`✅ Updated "${targetHeader}" for "${searchText}" to "${newValue}" in row ${foundRow}`);
        return foundRow;
    } else {
        console.warn(`⚠️ "${searchText}" not found in the worksheet.`);
        return null;
    }
}

    static async saveDownloadAndGetPath(download, fileName) {
        const downloadsFolder = path.join(process.cwd(), 'downloads');

        if (!fs.existsSync(downloadsFolder)) {
            fs.mkdirSync(downloadsFolder, { recursive: true });
            console.log('📁 Created downloads folder in project.');
        }

        const filePath = path.join(downloadsFolder, fileName);
        await download.saveAs(filePath);

        console.log(`✅ File saved to: ${filePath}`);
        return filePath;
    }
}

module.exports = ExcelUtils;
