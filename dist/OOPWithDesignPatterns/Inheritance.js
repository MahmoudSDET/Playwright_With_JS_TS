"use strict";
class Product {
    id;
    price;
    description;
    constructor(id, price, description) {
        this.id = id;
        this.price = price;
        this.description = description;
    }
    display() {
        console.log(`ID: ${this.id}, Price: ${this.price}, Description: ${this.description} `);
    }
}
class Book extends Product {
    id;
    price;
    description;
    title;
    author;
    constructor(id, price, description, title, author) {
        super(id, price, description);
        this.id = id;
        this.price = price;
        this.description = description;
        this.title = title;
        this.author = author;
    }
    display() {
        super.display();
        console.log(`Author: ${this.author}, Title: ${this.title}`);
    }
}
class Electronic extends Product {
    id;
    price;
    description;
    brand;
    model;
    constructor(id, price, description, brand, model) {
        super(id, price, description);
        this.id = id;
        this.price = price;
        this.description = description;
        this.brand = brand;
        this.model = model;
    }
    display() {
        super.display();
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
}
let book = new Book("1", 19.99, "A good book", "John Doe", "John Doe's Book");
book.display();
let laptop = new Electronic("2", 2999, "This is a good Laptop", "Dell", "XPS 15");
laptop.display();
