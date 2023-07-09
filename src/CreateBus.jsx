import React from 'react'
import { useState } from 'react'
import './create.css';



const Create = () => {
    const [data, setData] = useState({
        user_id: '',
        bus_name: ''
    })

    const createNote = async () => {
        
        fetch(`http://localhost:8000/api/create_bus`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log('hola')
        // eslint-disable-next-line no-undef
      
    }

    const handleChange = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

const CreateBus = () => {
  return (
    <div>
    <form>
        <div className="mb-3 create">
            {/* <label  className="form-label">bus_id</label>
            <input type="text" className="form-control" id="bus_id" value={data.bus_id} onChange={(e) => { handleChange(e) }}/> */}
            <label  className="form-label">user_id</label>
            <input type="text" className="form-control" id="user_id" value={data.user_id}  onChange={(e) => { handleChange(e) }}/>
            <label  className="form-label">bus_name</label>
            <input type="text" className="form-control" id="bus_name" value={data.bus_name} onChange={(e) => { handleChange(e) }}/>
           
            <label  className="form-label">bus_time</label>
            <input type="time" className="form-control" id="bus_time" value={data.bus_time} onChange={(e) => { handleChange(e) }}/>
            <label  className="form-label">bus_date</label>
            <input type="date" className="form-control" id="bus_date" value={data.bus_date} onChange={(e) => { handleChange(e) }}/>
            <label  className="form-label">bus_from</label>
            <input type="text" className="form-control" id="bus_from" value={data.bus_from} onChange={(e) => { handleChange(e) }}/>
            <label  className="form-label">bus_to</label>
            <input type="text" className="form-control" id="bus_to" value={data.bus_to} onChange={(e) => { handleChange(e) }}/>
            <label  className="form-label">bus_image</label>
            <input type="text" className="form-control" id="bus_image" value={data.bus_image} onChange={(e) => { handleChange(e) }}/>
       

            <button type="submit" className="btn btn-primary" onClick={createNote}>Submit</button>
        </div>
    </form>

    </div>  
  )
}  

 
 


 
 
