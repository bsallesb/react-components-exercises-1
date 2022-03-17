interface IQ22LargestNumberProps {
    firstNumber: number;
    secondNumber: number;
}

const Q22LargestNumber: React.FC<IQ22LargestNumberProps> = ({
    firstNumber,
    secondNumber,
}) => <span>{Math.max(firstNumber, secondNumber)}</span>;
export default Q22LargestNumber;
