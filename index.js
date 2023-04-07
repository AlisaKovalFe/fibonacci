// Итерационный подсчет n-го числа Фибоначчи

const findNFiboByIterations = (n) => {

    let firstFiboNumber = 0
    let secondFiboNumber = 1
    let foundNumber

    if (n < 0 || n % 1 !== 0 || (n == 0 && (1 / n === - Infinity))) {
        return 'введи целое число от нуля и больше'
    } else {
        for (let i = 2; i <= n; i++) {
            foundNumber = firstFiboNumber + secondFiboNumber
            firstFiboNumber = secondFiboNumber
            secondFiboNumber = foundNumber
        }
    }

    return foundNumber

    //еще циклом делала, но, видимо это жрет очень много памяти, но оставлю тут для себя
    // let arr = []
    // arr.push(0, 1)

    // for (let i = 2; i <= n; i++) {
    //     arr[i] = arr[i - 1] + arr[i - 2]
    // }

    // return arr[n]
}

// Рекурсивное вычисление n-го числа Фибоначчи

const findNFiboByRecursion = (n) => {
    return n < 0 || n % 1 !== 0 || (n == 0 && (1 / n === - Infinity)) ? 'введи целое число от нуля и больше' : (n <= 1 ? n : findNFiboByRecursion(n - 1) + findNFiboByRecursion(n - 2))
}

module.exports = { findNFiboByIterations, findNFiboByRecursion }


