interface IQ28OddOrEvenProps {
    value: number;
}

const Q28OddOrEven: React.FC<IQ28OddOrEvenProps> = ({ value }) => {
    if (value % 2 === 0) {
        return <span>Par</span>;
    }
    return <span>Ímpar</span>;
};
export default Q28OddOrEven;
