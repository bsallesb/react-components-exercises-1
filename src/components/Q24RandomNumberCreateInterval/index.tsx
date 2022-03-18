interface IQ24RandomNumberCreateIntervalProps {
    minValue: number;
    maxValue: number;
}

const Q24RandomNumberCreateInterval: React.FC<
    IQ24RandomNumberCreateIntervalProps
> = ({ minValue, maxValue }) => (
    <span>{Math.floor(Math.random() * (maxValue - minValue) + minValue)}</span>
);
export default Q24RandomNumberCreateInterval;
