import React, {useState, useEffect} from "react";
import axios from "axios";

function SelectBrand({selectPage, query, previous, current}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectValue, setSelectValue] = useState('');

    function handleSelect(e) {
        setSelectValue(e.target.value);
    }

    useEffect(() => {
        setLoading(true);
        console.log(query);
        axios.get(query)
            .then(res => {
                if(current === 'o modelo') {
                    setData(res.data.modelos);
                    setSelectValue(JSON.stringify(res.data.modelos[0]));
                } else {
                    setData(res.data);
                    setSelectValue(JSON.stringify(res.data[0]));
                }
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, [query, current]);

    function submitSelect() {
        setLoading(true);
        selectPage(selectValue, query);
    }

    return (
        <div className="">
            <h2>Agora que já sei que procura por {previous}, <br/>preciso que me diga <span className="hlt">{current}</span>.</h2>
            <div className="select">
                {loading ? <div className="loading"><i className="fa-duotone fa-spinner fa-3x fa-pulse"></i></div> : (
                    (
                        <>
                        {console.log(data)}
                        <select className="select-brand" value={selectValue} onChange={handleSelect}>
                            {data.map(brand => (<option key={brand.codigo} value={JSON.stringify(brand)}>{brand.nome}</option>))}
                        </select>
                        <button onClick={submitSelect} className="btn-form">Certo <i className="fa-solid fa-circle-arrow-right"></i></button>
                        </>
                    )
                )}
            </div>
        </div>
    );
}

export default SelectBrand;