import React from 'react'

const Cardprop = (props) => {
    const { item } = props;
    const { item:{bus_name} } = item;
    const { item:{bus_destination,bus_time,user_id} } = item;
   
  return (
    <div>
        <h2><span>Nom du bus:</span><h2>{bus_name}</h2> </h2>
        <h2><span>Heure de Depart:</span><h2>{bus_time}</h2></h2>
        {console.log('props',props )}
        <h2><span>Telephone:</span><h2>{user_id}</h2></h2>
    </div>
  )
}

export default Cardprop
