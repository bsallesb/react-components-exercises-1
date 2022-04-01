import { useMemo } from 'react';

interface Q15CapitalizeEveryFirstLetterProps {
    value: string;
}

const Q15CapitalizeEveryFirstLetter: React.FC<
    Q15CapitalizeEveryFirstLetterProps
> = ({ value }) => {
    const capitalizingWords = useMemo(() => {
        const text = value.split(' ');
        for (let i = 0; i < text.length; i += 1) {
            text[i] =
                text[i][0].toUpperCase() + text[i].substring(1).toLowerCase();
        }
        return text.join(' ');
    }, [value]);

    return <span>{capitalizingWords}</span>;
};

export default Q15CapitalizeEveryFirstLetter;
