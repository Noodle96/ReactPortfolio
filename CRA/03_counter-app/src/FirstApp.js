import { Fragment } from "react";
import PropTypes from "prop-types";

//FUNCTIONAL COMPONENTS
const FirstApp = ({saludo, subtitles}) => {
    const card = 'Princess';
    const student = {
        name : 'Pedro',
        age: 34,
    }
    const heigh = 34.677;

    // console.log(saludo);
    // console.log(subtitles);

    // if(!saludo){
    //     throw new Error('el saludo es necesario');
    // }


    return (
        <Fragment>
            <h1>{saludo}</h1>
            <h1 id='subtitle'>{subtitles}</h1>
            {/* <h1>Hello world with functional components</h1>
            <p> the card is: {card} </p>
            <pre> {JSON.stringify(student,null,4)}</pre>
            <h1>{heigh}</h1> */}
        </Fragment>
    );
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitles: 'template subtitulo'
}

export default FirstApp;