import React, { Fragment } from 'react'
export function loader(){
    return "Desde Loader de Index";
}
const Index = () => {
    return (
        <Fragment>
            <h1 className="font-black text-4xl text-blue-700">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>
        </Fragment>
    )
}

export default Index
