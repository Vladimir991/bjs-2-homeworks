﻿// 1.Задача №1:

function parseCount(item) {
    const value = parseFloat(item);
    if (isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return value;
}

function validateCount(item) {
    try {
        return parseCount(item);
    } catch (error) {
        return error;
    }
}

// 2.Задача №2:

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}