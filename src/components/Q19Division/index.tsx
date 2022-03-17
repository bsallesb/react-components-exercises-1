interface IQ19DivisionProps {
    firstValue: number;
    secondValue: number;
}

const Q19Division: React.FC<IQ19DivisionProps> = ({
    firstValue,
    secondValue,
}) => {
    const division = firstValue / secondValue;
    let result;
    if (division === 0) {
        result = <span>Inválido</span>;
    } else {
        result = division;
    }

    return <span>{result}</span>;
};
export default Q19Division;
