import { useCallback, useMemo } from 'react';

interface Q26PrimeNumbersProps {
    value: number;
}

const Q26PrimeNumbers: React.FC<Q26PrimeNumbersProps> = ({ value }) => {
    const isPrime = useCallback(number => {
        if (number < 2) return false;

        for (let i = 2; i < number; i += 1) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }, []);

    const showPrime = useMemo(() => {
        const primes = [];
        let findPrimes = 0;
        let countPrimes = 0;

        while (countPrimes < value) {
            findPrimes += 1;
            if (isPrime(findPrimes)) {
                primes.push(findPrimes);
                countPrimes += 1;
            }
        }
        return primes;
    }, [value, isPrime]);

    return <span>{showPrime.join(', ')}</span>;
};
export default Q26PrimeNumbers;
