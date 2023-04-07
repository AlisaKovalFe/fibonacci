const { findNFiboByIterations, findNFiboByRecursion } = require('./index')

describe('Tests for Fibonacci sequence solved by iteration method', () => {
    test('should return n-th number in Fibonacci sequence', () => {
        expect(findNFiboByIterations(7)).toBe(13);
        expect(findNFiboByIterations(5)).toBe(5);
        expect(findNFiboByIterations(35)).toBe(9227465);
    })
    test('should return message in the case of innopropriate argument', () => {
        expect(findNFiboByIterations(7.6)).toBe('введи целое число от нуля и больше');
        expect(findNFiboByIterations(-0)).toBe('введи целое число от нуля и больше');
        expect(findNFiboByIterations(-7)).toBe('введи целое число от нуля и больше');
    })
});

describe('Tests for Fibonacci sequence solved by iteration method', () => {
    test('should return n-th number in Fibonacci sequence', () => {
        expect(findNFiboByRecursion(15)).toBe(610);
        expect(findNFiboByRecursion(3)).toBe(2);
        expect(findNFiboByRecursion(29)).toBe(514229);
    })
    test('should return message in the case of innopropriate argument', () => {
        expect(findNFiboByRecursion(6.9)).toBe('введи целое число от нуля и больше');
        expect(findNFiboByRecursion(-0)).toBe('введи целое число от нуля и больше');
        expect(findNFiboByRecursion(-985)).toBe('введи целое число от нуля и больше');
    })
})