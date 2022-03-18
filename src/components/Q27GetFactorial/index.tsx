interface IQ27GetFactorialProps {
    value: number;
}

const Q27GetFactorial: React.FC<IQ27GetFactorialProps> = ({ value }) => {
    if (value === 0) return <span>1</span>;
    let f = 1;
    for (let i = 1; i < value; i += 1) {
        f *= 1 * (i + 1);
    }
    return <span>{f}</span>;
};

export default Q27GetFactorial;
