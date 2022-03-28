import { useCallback, useEffect, useState } from 'react';
import { ZipCodeType } from '../../@types/ZipCode';
import Api from '../../services/Api';

const Q46AddressByZipCode: React.FC = () => {
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState<ZipCodeType | null>(null);

    const getAddress = useCallback(
        async (zipCodeNumber: string): Promise<void> => {
            Api.get(`https://viacep.com.br/ws/${zipCodeNumber}/json/`)
                .then(response => setAddress(response.data ?? null))
                .catch()
                .finally();
        },
        []
    );

    useEffect(() => {
        getAddress(zipCode ?? '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="d-flex col-6 align-items-center mb-2">
                <p className="m-0 me-2">CEP:</p>
                <input
                    type="text"
                    placeholder="exemplo: 37400-000"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    className="form-control me-2"
                />
                <button
                    type="button"
                    className="w-50 btn btn-primary"
                    onClick={() => getAddress(zipCode.replace('-', ''))}
                >
                    Buscar endereço
                </button>
            </div>
            <div className="d-flex flex-column">
                {address?.logradouro && (
                    <span>Endereço: {address?.logradouro}</span>
                )}
                {address?.bairro && <span>Bairro: {address?.bairro}</span>}
                {address?.complemento && (
                    <span>Complemento: {address?.complemento}</span>
                )}
                {address?.cep && <span>CEP: {address?.cep}</span>}
                {address?.localidade && (
                    <span>
                        Cidade: {address?.localidade} - {address?.uf}
                    </span>
                )}
            </div>
        </div>
    );
};
export default Q46AddressByZipCode;
