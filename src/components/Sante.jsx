import { useState,useEffect } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import sante from '../images/sante.jpg';
import './sante.css'
import PropSante from './PropSante';

const Sante = () => {
 
  const [data, setData] = useState([]);
  const Newpage = () => {
    // localStorage.setItem('id', id)
    window.location.href = '/ph'
  }


  useEffect(() => {
    getPharmacies(); 
  }, []);
  
  let getPharmacies = async () => {
    let response = await fetch('http://localhost:8000/api/getPharmacies/');
    let data = await response.json();
    setData(data);
    console.log('sante:',data);
  };
  
  
  
  
  
  return (


<div className='container mt-4'>
      <hr></hr>
      <h1 className=' text-center fs-14'>Santé</h1>

               <div className='row col-lg-12 justify-content-center mb-3'>
          {data
            .map((item, index) => (

            <div className='col-lg-3 col-md-3 col-9 mt-2 '>
              <Card className='mx-auto  '>
                <Card.Img variant="top" src={sante} className='img-fluid'/>
                  <Card.Body>
                  <Card.Text className='textD' onClick={Newpage}>
                    <PropSante item={{item}}/>
                  </Card.Text> 
           
                  </Card.Body>
              </Card>
            </div>
                    ))}
            </div>
 
 

        </div>
      
 







  )
}

export default Sante; 
