interface IQ36ButtonProps {
    label: string;
    color: string;
}

const Q36Button: React.FC<IQ36ButtonProps> = ({ label, color }) => (
    <button type="button" style={{ backgroundColor: color }}>
        {label}
    </button>
);
export default Q36Button;
