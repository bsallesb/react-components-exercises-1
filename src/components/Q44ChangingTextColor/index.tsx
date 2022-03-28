import { useState } from 'react';

const Q44ChangingTextColor: React.FC = () => {
    const [text, setText] = useState('');
    const [color, setColor] = useState('');

    return (
        <div>
            <div className="d-flex col-6 mb-2">
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>
            <div className="d-flex col-6 mb-2 justify-content-between">
                <button
                    type="button"
                    className="btn btn-danger px-4"
                    onClick={() => setColor('danger')}
                >
                    Vermelho
                </button>
                <button
                    type="button"
                    className="btn btn-success px-4"
                    onClick={() => setColor('success')}
                >
                    Verde
                </button>
                <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={() => setColor('primary')}
                >
                    Azul
                </button>
                <button
                    type="button"
                    className="btn btn-warning px-4"
                    onClick={() => setColor('warning')}
                >
                    Amarelo
                </button>
                <button
                    type="button"
                    className="btn btn-dark px-4"
                    onClick={() => setColor('dark')}
                >
                    Preto
                </button>
            </div>
            <span className={`text-${color} fw-bold`}>{text}</span>
        </div>
    );
};
export default Q44ChangingTextColor;
