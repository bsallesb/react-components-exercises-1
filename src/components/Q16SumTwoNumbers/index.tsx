interface IQ16SumTwoNumbersProps {
    firstValue: number;
    secondValue: number;
}

const Q16SumTwoNumbers: React.FC<IQ16SumTwoNumbersProps> = ({
    firstValue,
    secondValue,
}) => <span>{firstValue + secondValue}</span>;
export default Q16SumTwoNumbers;
