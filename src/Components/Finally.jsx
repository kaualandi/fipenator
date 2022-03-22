import React from 'react';
import carPeople from '../Images/car-people.svg';

function Finally({ resData }) {
    return (
        <div id='finally' className="container finally">
            <h2 className='text-center'>A consulta foi um sucesso!</h2>
            <div className="row align-items-center">
                <div className="col-12 col-md-7">
                    <ul className='mg-auto'>
                        <li><b>Marca:</b> {resData.Marca}</li>
                        <li><b>Modelo:</b> {resData.Modelo}</li>
                        <li><b>Ano:</b> {resData.AnoModelo}</li>
                        <li><b>Valor:</b> {resData.Valor}</li>
                        <li><b>Combustível:</b> {resData.Combustivel} ({resData.SiglaCombustivel})</li>
                        <li><b>Código Fipe:</b> {resData.CodigoFipe}</li>
                        <li><b>Tipo do Veículo:</b> {(resData.TipoVeiculo === 1 && 'Carro') || (resData.TipoVeiculo === 2 && 'Moto') || (resData.TipoVeiculo === 3 && 'Caminhão') || resData.TipoVeiculo}</li>
                        <li><b>Mês de referência:</b> {resData.MesReferencia}</li>
                    </ul>
                </div>
                <div className="col-12 col-md-5">
                    <img src={carPeople} alt="" />
                </div>
            </div>
            <p className='credits'>Feito com ❤️ e <i className="fa-brands fa-react fa-spin"></i> por <a href="https://kaualf.netlify.app">Kauã Landi</a>.</p>
        </div>
    );
}

export default Finally;