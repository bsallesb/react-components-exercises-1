import { useCallback, useState } from 'react';
import { CurrencyConverterType } from '../../@types/CurrencyConverter';
import Api from '../../services/Api';

const Q47USDtoBRL: React.FC = () => {
    const [real, setReal] = useState(0);
    const [value, setValue] = useState<CurrencyConverterType | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const currencyConverter = useCallback(() => {
        Api.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            .then(response => setValue(response.data.USDBRL ?? null))
            .catch()
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            <div className="d-flex col-4 mb-2">
                <input
                    type="number"
                    className="form-control me-2"
                    value={real}
                    onChange={e => setReal(parseInt(e.target.value, 10))}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        setIsLoading(true);
                        currencyConverter();
                    }}
                >
                    Converter
                </button>
            </div>
            <div className="d-flex col-4">
                <span>
                    {isLoading ? (
                        <div className="d-flex mt-2">
                            <div className="spinner-grow me-2" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                            <div className="spinner-grow me-2" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                            <div className="spinner-grow" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    ) : (
                        value?.bid && (
                            <div>
                                <span className="me-2">USD:</span>
                                {(
                                    Number(`${real}`) /
                                    Number(`${value?.bid}
                            `)
                                ).toFixed(2)}
                            </div>
                        )
                    )}
                </span>
            </div>
        </div>
    );
};
export default Q47USDtoBRL;
