"use strict";
// shapes
// Area, Perimeter
// simple - single function calculateTotalArea
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
function calculateTotalArea(shape) {
    return shape.area();
}
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);
console.log("Area Of Circle: ", calculateTotalArea(circle));
console.log("Area Of Reactangle: ", calculateTotalArea(rectangle));
