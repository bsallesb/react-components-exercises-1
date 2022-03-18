interface IQ18MultiplicationProps {
    firstValue: number;
    secondValue: number;
}

const Q18Multiplication: React.FC<IQ18MultiplicationProps> = ({
    firstValue,
    secondValue,
}) => <span>{firstValue * secondValue}</span>;
export default Q18Multiplication;
