import styled from "@emotion/styled"
const Texto = styled.div`
    background-color: #f36058;
    color: #FFF;
    padding: 10px;
    font-size: 19px;
    text-transform: lowercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 15px;
`;

const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error