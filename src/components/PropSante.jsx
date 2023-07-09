import React from 'react'

const PropSante = (props) => {
    const { item } = props;
    const { item:{pharmacy_address,pharmacy_name,user_id} } = item;
   
  return (
    <div>
        <h2><span>Nom de la pharmacy:</span><h2>{pharmacy_name}</h2> </h2>
        <h2><span>Adresse:</span><h2>{pharmacy_address}</h2></h2>
        <h2><span>Telephone:</span><h2>{user_id}</h2></h2>

    </div>
  )
}

export default PropSante
