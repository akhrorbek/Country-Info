import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import '../Section/Country.scss';
import axios from 'axios';

const Country = () => {
    const back = useNavigate();
    const { name } = useParams();
    const [data, setData] = useState([]);
    const URL = (`https://restcountries.com/v2/name/${name}`)

    const itemData = async () => {
        const result = await axios.get(`${URL}`)
        setData(result.data)
    }

    useEffect(() => {
        itemData()
    }, [])
    console.log(data);
    return (
        <div className='container'>
            {data.map(item => {
                return <div className='itemWrap card p-2 d-flex mb-5'>
                    <img className='itemWarap__img p-2' src={item.flags.png} alt="Country Flag" width="250" height="160" />
                    <div className='itemWrap__itemTextWrap mt-2 p-2'>
                        <p><span className='itemTextWrap__itemText'>Name</span>: {item.name}</p>
                        <p><span className='itemTextWrap__itemText'>Capital</span>: {item.capital}</p>
                        <p><span className='itemTextWrap__itemText'>Population</span>: {item.population}</p>
                        <p><span className='itemTextWrap__itemText'>Language</span>: {item.languages[0].name}</p>
                    </div>
                </div>
            })}
            <button className="btn btn-primary" onClick={() => back(-1)}>Go back</button>
        </div>
    );
};

export default Country;