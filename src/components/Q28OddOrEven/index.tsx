interface IQ28OddOrEvenProps {
    value: number;
}

const Q28OddOrEven: React.FC<IQ28OddOrEvenProps> = ({ value }) => {
    let isEvenOrOdd;
    if (value % 2 === 0) {
        isEvenOrOdd = <span>Par</span>;
    } else {
        isEvenOrOdd = <span>Impar</span>;
    }
    return isEvenOrOdd;
};
export default Q28OddOrEven;
