import React from 'react'
import { useState } from 'react'
import './create.css';

const CreatePh = () => {

    const [data, setData] = useState({
        user_id: '',
        pharmacy_name: '',
        pharmacy_address: '',
         
    })

    const createNote = async () => {
        
        fetch(`http://localhost:8000/api/create_pharmacy`, {
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


  return (
    <div>
    <form>
        <div className=" create col-8 mx-auto">
            <label  className="form-label">user_id</label>
            <input type="text" className="form-control" id="user_id" value={data.user_id}  onChange={(e) => { handleChange(e) }}/>
            
            <label  className="form-label">pharmacy name</label>
            <input type="text" className="form-control" id="pharmacy_name" value={data.pharmacy_name} onChange={(e) => { handleChange(e) }}/>
           
            <label  className="form-label">pharmacy_address</label>
            <input type="text" className="form-control" id="pharmacy_address" value={data.pharmacy_address} onChange={(e) => { handleChange(e) }}/>
 
       

            <button type="submit" className="btn btn-primary" onClick={createNote}>Submit</button>
        </div>
    </form>

    </div>
      
 
  )
}

export default CreatePh
