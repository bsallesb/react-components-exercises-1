import { useState } from 'react';

const Q40LowerCaseButton: React.FC = () => {
    const [text, setText] = useState('');
    const [capitalizedText, setCapitalizedText] = useState('');

    return (
        <div>
            <div className="d-flex col-3 mb-2">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="me-2 form-control"
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setCapitalizedText(text.toLowerCase())}
                >
                    Converter
                </button>
            </div>
            <div className="d-flex col-3">
                <input
                    type="submit"
                    value={capitalizedText}
                    className="form-control"
                />
            </div>
        </div>
    );
};
export default Q40LowerCaseButton;
