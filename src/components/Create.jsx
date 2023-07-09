import React from 'react'
import { useState } from 'react'
import './create.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css'

const Create = () => {
    const [data, setData] = useState({
        user_id: '',
        bus_name: '',
        bus_time: '',
        bus_date: '',
        bus_from: '',
        bus_to: '',
        bus_image: ''
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
  return (
    <div>
    <form>
        <div className=" create col-8 mx-auto">
            <label  className="form-label">bus_id</label>
            <input type="text" className="form-control" id="bus_id" value={data.bus_id} onChange={(e) => { handleChange(e) }}/>
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
            <input type="file" className="form-control" id="bus_image" value={data.bus_image} onChange={(e) => { handleChange(e) }}/>
       

            <button type="submit" className="btn btn-primary mt-3 mb-3" onClick={createNote}>Submit</button>
        </div>
    </form>

    </div>
  )
}
//         bus_id=data['bus_id'],
// user_id=user,
// bus_name=data['bus_name'],
// bus_time=data['bus_time'],
// bus_date=data['bus_date'],
// bus_from=data['bus_from'],
// bus_to=data['bus_to'],
// bus_image=data['bus_image']

export default Create


 
 
