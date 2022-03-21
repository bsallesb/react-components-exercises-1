interface IQ29PercentageProps {
    biggestValue: number;
    smallestValue: number;
}

const Q29Percentage: React.FC<IQ29PercentageProps> = ({
    biggestValue,
    smallestValue,
}) => {
    const result = Number(smallestValue * 100) / biggestValue;
    const roundedValue = Number(result.toFixed(2));
    return <span>{`${roundedValue}%`}</span>;
};
export default Q29Percentage;
