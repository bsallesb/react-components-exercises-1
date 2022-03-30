import { useCallback, useState } from 'react';

import { AdviceType } from '../../@types/Advice';
import Api from '../../services/Api';

const Q48Advice: React.FC = () => {
    const [advice, setAdvice] = useState<AdviceType | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const getAdvice = useCallback(() => {
        Api.get('https://api.adviceslip.com/advice')
            .then(response => setAdvice(response.data.slip))
            .catch()
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="d-flex align-items-center">
            <button
                type="button"
                className="btn btn-primary me-2"
                onClick={() => {
                    setIsLoading(true);
                    getAdvice();
                }}
            >
                Conselho
            </button>
            {isLoading ? (
                <div className="d-flex mt-2 ms-2">
                    <div className="spinner-grow me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <span>{advice?.advice}</span>
            )}
        </div>
    );
};
export default Q48Advice;
