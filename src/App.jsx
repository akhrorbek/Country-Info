import React, { useState, useEffect, createElement } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import axios from 'axios';
import Country from './components/Main/Section/Country';
import { Routes, Route } from 'react-router';
function App() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const URL = 'https://restcountries.com/v2/all';

  const [currentPage, setCurrentPage]= useState(1);
  const [totalPage]= useState(16);


  const firstIndexPost =currentPage*totalPage;
  const lastIndexPost=firstIndexPost-totalPage;
  const lastData=data.slice(lastIndexPost, firstIndexPost);




  const getData = async () => {
    const response = await axios.get(URL);
    setData(response.data);
  }
  useEffect(() => {
    getData()
  }, [])

  const pagination=(num)=>{
    setCurrentPage(num)
  }


  return (
    <div>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Main paginate={pagination} data={lastData} num={data} totalPage={totalPage} />} />
        <Route path="/main" element={<Main data={data} />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </div>
  )
}

export default App
