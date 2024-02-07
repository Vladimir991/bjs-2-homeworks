"use strict"
// 1.Программа для решения квадратных уравнений (ax² + bx + c = 0):

function solveEquation(a, b, c) {
	if (a === 0) return false;

	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c
	if (d < 0) return arr;
	if (d === 0) {
		arr =[ -b / (2 * a)]
	} else if (d > 0) {
		let tmp = []
		tmp.push((-b + Math.sqrt(d)) / (2 * a));
		tmp.push((-b - Math.sqrt(d)) / (2 * a));
		arr = tmp;
	}
	return arr; 
}


// 2.Кредитный калькулятор:  

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentHundredths = percent / 100;
	let monthPercent = percentHundredths / 12;
	let creditBody = amount - contribution;

	// Платёж = S * (P + (P / (((1 + P)^n) - 1)))
	let payment = creditBody * (monthPercent + (monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1)));

	let sumPay = +(payment * countMonths).toFixed(2);

	return sumPay
}