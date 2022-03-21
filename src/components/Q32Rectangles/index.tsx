interface IQ32RectanglesProps {
    x: number;
    width: string;
    height: string;
    color: string;
}

const Q32Rectangles: React.FC<IQ32RectanglesProps> = ({
    x,
    width,
    height,
    color,
}) => {
    const rectangle = (
        <div
            style={{
                width,
                height,
                backgroundColor: color,
            }}
            className="d-inline-flex me-3"
        />
    );
    const rectangles = [];
    for (let i = 1; i < x + 1; i += 1) {
        rectangles.push(rectangle);
    }
    return <div>{rectangles}</div>;
};
export default Q32Rectangles;
