interface IQ33CirclesProps {
    x: number;
    size: string;
    color: string;
}

const Q33Circles: React.FC<IQ33CirclesProps> = ({ x, size, color }) => {
    const circle = (
        <div
            style={{
                width: `${size}`,
                height: `${size}`,
                borderRadius: `${size}`,
                backgroundColor: `${color}`,
            }}
            className="d-inline-flex me-3"
        />
    );
    const circles = [];
    for (let i = 1; i < x + 1; i += 1) {
        circles.push(circle);
    }
    return <div>{circles}</div>;
};
export default Q33Circles;
