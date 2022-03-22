import carPeople from '../Images/car-people.svg';
import './Styles/Home.css';

function Home({setType, setPage}) {
    function selectType(type) {
        setType(type);
        setPage(1);
    }
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-sm-5">
                    <h1 className="text-center">Consulte a tabela fipe de qualquer veículo</h1>
                </div>
                <div className="col-12 col-sm-7">
                    <img src={carPeople} alt="" />
                </div>
            </div>
            <div className="text-center">
                <h3 id="init"><a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className="button">Começar agora <i className="fa-solid fa-circle-arrow-right"></i></a></h3>
                <div className="collapse" id="collapseExample">
                    <div className="selects">
                        <button onClick={() => selectType('carros')} className="button">Carro <i className="fa-solid fa-circle-arrow-right"></i></button>
                        <button onClick={() => selectType('motos')} className="button">Moto <i className="fa-solid fa-circle-arrow-right"></i></button>
                        <button onClick={() => selectType('caminhoes')} className="button">Caminhão <i className="fa-solid fa-circle-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;