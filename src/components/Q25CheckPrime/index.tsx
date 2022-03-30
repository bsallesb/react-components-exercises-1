import { useMemo } from 'react';

interface IQ25CheckPrimeProps {
    value: number;
}

const Q25CheckPrime: React.FC<IQ25CheckPrimeProps> = ({ value }) => {
    const isPrime = useMemo(() => {
        if (value < 2) return false;

        for (let i = 2; i < value; i += 1) {
            if (value % i === 0) {
                return false;
            }
        }
        return true;
    }, [value]);

    return <span>{isPrime ? 'Sim' : 'Não'}</span>;
};
export default Q25CheckPrime;
