interface IQ14CapitalizeTheFirstLetterProps {
    value: string;
}

const Q14CapitalizeTheFirstLetter: React.FC<
    IQ14CapitalizeTheFirstLetterProps
> = ({ value }) => (
    <span>{`${value.charAt(0).toUpperCase()}${value
        .slice(1)
        .toLowerCase()}`}</span>
);

export default Q14CapitalizeTheFirstLetter;
