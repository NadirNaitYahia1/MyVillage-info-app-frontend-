import React  from 'react';
import './pharmacie.css';


function Pharmacie(props) {

return (

<div className='container-fluid phar'>
      
      <div className="row col-12 ">
        <div className="col-lg-7 col-6 p1">
          <h1 className='h1Ph'>Nom de la pharmacie: <span>XXXXX</span></h1>
          <h1 className='h1Ph'>Adresse: <span>XXXXX</span></h1>
          <h1 className='h1Ph'>Téléphone: <span>XXXXX</span></h1>
          <h1 className='h1Ph'>Courriel: <span>XXXXX</span></h1>
          <h1 className='h1Ph'>Heures d'ouverture:</h1>
          <ul><span className='days'>Mercredi:  </span></ul>
          <ul><span className='days'>Dimanche: </span></ul>
        </div>

      <div className='col-lg-5 map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.1000000000003!2d-73.5679996843983!3d45.49799997910195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b2b8b8b8b8b%3A0x1b8b8b8b8b8b8b8b8!2sPharmacie%20du%20Parc!5e0!3m2!1sfr!2sca!4v1625581000000!5m2!1sfr!2sca" width='520px' height='500px' style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

      </div>

      </div>


  </div>









 
  );
}
export default Pharmacie;