import React from 'react';
import './home.css';
import img1 from '../images/7099809.jpg';
import img2 from '../images/2.jpg'; 
import img3 from '../images/3.jpg';
import img5 from '../images/Fotor_AI.png';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
      <div className="container mt-4 pb-3">
        <div className='nadir row align-items-center  '>
          <hr></hr>
          <h1 className=' text-center fs-12 '> Histoire</h1>
          <div className= 'col-12 col-md-6 col-lg-6 text-light text-center '>
                  <article class="card mt-3">
                  <div class="temporary_text">
                  <Carousel >
            
            <Carousel.Item >
              <img
                className="img-fluid    "
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            
            <Carousel.Item >
              <img
                className="img-fluid   "
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
      
            <Carousel.Item >
              <img
                className="img-fluid "
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>

 

            <Carousel.Item >
              <img
                className="img-fluid    "
                src={img9}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item >
              <img
                className="img-fluid    "
                src={img10}
                alt="First slide"
              />
            </Carousel.Item>






          </Carousel>
                  </div>
              <div class="card_content  ">
            
                  <h1 class="card_title text-primary mt">Beni Ourtilane</h1>
                      <p class="card_description text-primary">(en kabyle: At Wertiran; en arabe: بنى ورثيلان), est une commune d'Algérie, située au nord-ouest de la wilaya de Sétif en Petite Kabylie. Elle est aussi chef lieu de Daïra (sous préfecture).
At Ourtilane est une zone frontalière de trois wilayas : Béjaïa, Sétif et Bordj Bou Arreridj. Beni Ourtilane se prononce en kabyle: At Wertilan</p>
                  
              </div>
              </article>

</div>


          <div className="col-12  col-md-6 col-lg-6 mt-5" >
            <img src={img5}  className='img-fluid img5  align-items-center'/>
          </div>
      </div>
    </div>
    
  
  );
};

export default Home;
