import React, {useState} from 'react';
import SelectBrand from './Selections/SelectBrand';
import axios from 'axios';

function Selections({type, setPage, setFinally}) {
    const typeTranslate = type === 'caminhoes' ? 'caminhões' : type;
    const [previous, setPrevious] = useState(typeTranslate);
    const [current, setCurrent] = useState('a marca');
    const [query, setQuery] = useState(`https://parallelum.com.br/fipe/api/v1/${type}/marcas`);


    
    function selectPage(data, query) {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
        console.log(data);
        if (current === 'a marca') {
            setQuery(`${query}/${data.codigo}/modelos`);
            setCurrent('o modelo');
        } else if (current === 'o modelo') {
            setQuery(`${query}/${data.codigo}/anos`);
            setCurrent('o ano');
        } else if (current === 'o ano') {
            axios(`${query}/${data.codigo}`)
                .then(res => {
                    setFinally(res.data);
                    setPage(2);
                }
            )
        }
        setPrevious(data.nome);
    }

    return (
        <div className="container">
            <div className="text-center">
                <SelectBrand selectPage={selectPage} query={query} previous={previous} current={current}/>
            </div>
        </div>
    );
}

export default Selections;