import {Fragment, useEffect, useState} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas';
import styled from '@emotion/styled'
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition:  background-color .3s ease;
    margin-top: 25px;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer; 
    }
`
const Formulario = ({setMoneda}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
    const [ criptomoneda, SelectCriptMonedas ] = useSelectMonedas('Elige tu criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arrayCryptos = resultado.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre:  cripto.CoinInfo.FullName,
                }
                return objeto;
            });
            // console.log(arrayCryptos);
            setCriptos(arrayCryptos);
        }
        consultarAPI();
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
    //     console.log(moneda);
    //     console.log(criptomoneda);
        if([moneda,criptomoneda].includes('')){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        setMoneda({
            moneda,
            criptomoneda,
        });

    }

    return (
        <Fragment>
            {error && 
                <Error>Los campos deben de estar llenos</Error>
            }
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptMonedas />
                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </Fragment>
    )
}

export default Formulario
