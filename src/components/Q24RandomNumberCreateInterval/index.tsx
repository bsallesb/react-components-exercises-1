interface IQ24RandomNumberCreateIntervalProps {
    minValue: number;
    maxValue: number;
}

const Q24RandomNumberCreateInterval: React.FC<
    IQ24RandomNumberCreateIntervalProps
> = ({ minValue, maxValue }) => {
    if (minValue >= maxValue) {
        return <span>Inválido</span>;
    }
    return (
        <span>
            {Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)}
        </span>
    );
};
export default Q24RandomNumberCreateInterval;
