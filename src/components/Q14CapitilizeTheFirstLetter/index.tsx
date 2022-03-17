interface IQ14CapitilizeTheFirstLetterProps {
    value: string;
}

const Q14CapitilizeTheFirstLetter: React.FC<
    IQ14CapitilizeTheFirstLetterProps
> = ({ value }) => (
    <span>{`${
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }`}</span>
);

export default Q14CapitilizeTheFirstLetter;
