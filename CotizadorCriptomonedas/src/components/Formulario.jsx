import {useEffect, useState} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas';
import styled from '@emotion/styled'

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
const Formulario = () => {
    const [criptos, setCriptos] = useState([]);

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
    const [ criptoMonesas, SelectCriptMonedas ] = useSelectMonedas('Elige tu criptomoneda', criptos);

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
    
    return (
        <form>
            <SelectMonedas />
            <SelectCriptMonedas />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario
