interface IQ29PercentageProps {
    biggestValue: number;
    smallestValue: number;
}

const Q29Percentage: React.FC<IQ29PercentageProps> = ({
    biggestValue,
    smallestValue,
}) => {
    const result = Number(smallestValue * 100) / biggestValue;
    const roundedValue = result.toFixed(2);
    const rounded = Number(roundedValue);
    return <span>{`${rounded}%`}</span>;
};
export default Q29Percentage;
