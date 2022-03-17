interface IQ17SubtractionProps {
    firstValue: number;
    secondValue: number;
}

const Q17Subtraction: React.FC<IQ17SubtractionProps> = ({
    firstValue,
    secondValue,
}) => <span>{firstValue - secondValue}</span>;
export default Q17Subtraction;
