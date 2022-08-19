import React from 'react';
import '../Main/Main.scss';
import { Link } from 'react-router-dom';
const Main = ({ data, num, totalPage, paginate }) => {


    let dot =[];
    for (let i = 1; i <= Math.ceil(num.length / totalPage); i++) {
        dot.push(i)
    }
    console.log(dot);

    return (
        <div className='main'>
            <div className='container'>
                <ul className='main__list d-flex align-items-center justify-content-between flex-wrap'>
                    {data.map(item => {
                        return <li className='list__item card mb-4' item={item}>
                            <img className='item__img' src={item.flags.png} alt="Country Flag" width="250" height="130" />
                            <p className='item__text p-2'>
                                <Link className='text__link' to={`/${item.name}`}>
                                    {item.name}
                                </Link>
                            </p>
                            {/* <p className='d-flex flex-wrap'>
                        {item.languages.map(lang=>
                        <p>{lang.name}</p>)}
                        </p> */}
                        </li>
                    })}
                </ul>
                <ul className="pagination w-50 mx-auto d-flex justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    {dot.map((dot)=>{
                        return <li className="page-item" onClick={()=>paginate(dot)}><a class="page-link" href="#">{dot}</a></li>
                    })}
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Main;