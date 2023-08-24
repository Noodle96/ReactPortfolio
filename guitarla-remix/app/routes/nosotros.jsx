import imagen_nosotros from '~/../public/img/nosotros.jpg';
function Nosotros() {
    return(
        <main className='contenedor nosotros'>
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen_nosotros} alt="imagen sobre nosotros" />
                <div>
                    <p>
                        Nam nec neque eget nunc ullamcorper vehicula. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Duis
                        hendrerit sit amet lacus ut tristique. Integer ipsum metus, efficitur
                        eu magna ut, commodo efficitur arcu. Nunc sit amet lorem sit amet ipsum
                        tempor pretium. Donec placerat sem in enim elementum venenatis. Cras
                    </p>

                    <p>
                        Nam nec neque eget nunc ullamcorper vehicula. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Duis
                        hendrerit sit amet lacus ut tristique. Integer ipsum metus, efficitur
                        eu magna ut, commodo efficitur arcu. Nunc sit amet lorem sit amet ipsum
                        tempor pretium. Donec placerat sem in enim elementum venenatis. Cras
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Nosotros