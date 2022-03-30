import { useCallback, useState } from 'react';

const Q42AddLines: React.FC = () => {
    const [text, setText] = useState('');
    const [newLines, setNewLines] = useState<string[]>([]);

    const createANewLine = useCallback(() => {
        setNewLines([text]);
    }, []);
    console.log(newLines);

    return (
        <div>
            <div className="d-flex col-6 mb-2">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="form-control me-2"
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => createANewLine()}
                >
                    Gravar
                </button>
            </div>
            <div className="d-flex col-6">{createANewLine}</div>
        </div>
    );
};
export default Q42AddLines;
