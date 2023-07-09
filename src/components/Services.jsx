import React from 'react';
 
import bus from '../images/bus.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from "react";
import './services.css'; 
import Cardprop from './Cardprop';
 
// eslint-disable-next-line no-undef
const Services = () => {
  const [data, setData] = useState([]);
  
  const Newpage = () => {

  window.location.href = '/test';
 
 }

useEffect(() => {
  getBuses(); 
}, []);

let getBuses = async () => {
  let response = await fetch('http://localhost:8000/api/getBuses/');
  let data = await response.json();
  setData(data);
  console.log('Data:',data);
};





  return (
 
    <div className='container mt-5'>
    <div className='nadir row align-items-center '>
    <hr></hr>
    <h1 className=' text-center mb-4'> Transport</h1>
      <h1 className=' text-start fs-3 mb-4'> Beni Ourtilane - Alger</h1>
       
          <div className='row col-lg-12 justify-content-center mb-3'>
          {data
            .filter(item => item.bus_from === 'beni')
            .map((item, index) => (
            <div className='col-lg-3 col-md-3 col-9 mt-2 '>
              <Card className='mx-auto  '>
                <Card.Img variant="top" src={bus} className='img-fluid'/>
                  <Card.Body>
                  <Card.Text className='textD' onClick={Newpage}>
                    <Cardprop item={{item}}/>
                  </Card.Text> 
           
                  </Card.Body>
              </Card>
            </div>
                    ))}
            </div>
  




      <h1 className='  text-start fs-3 mb-4 mt-4'> Beni Ourtilane - Setif</h1>
      
   
      <div className='row col-lg-12 justify-content-center mb-3'>
          {data
            .filter(item => item.bus_from === 'setif')
            .map((item, index) => (
            <div className='col-lg-3 col-md-3 col-9 mt-2 '>
              <Card className='mx-auto  '>
                <Card.Img variant="top" src={bus} className='img-fluid'/>
                  <Card.Body>
                  <Card.Text className='textD' onClick={Newpage}>
                    <Cardprop item={{item}}/>
                  </Card.Text> 
           
                  </Card.Body>
              </Card>
            </div>
                    ))}
            </div>
 


 

    
    </div>
  </div>   
  
  )
}
export default Services;