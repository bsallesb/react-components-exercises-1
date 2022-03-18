interface IQ25CheckPrimeProps {
    value: number;
}

const Q25CheckPrime: React.FC<IQ25CheckPrimeProps> = ({ value }) => {
    if (value < 2) return <span>Não</span>;

    for (let i = 2; i < value; i += 1) {
        if (value % i === 0) {
            return <span>Não</span>;
        }
    }
    return <span>Sim</span>;
};
export default Q25CheckPrime;
