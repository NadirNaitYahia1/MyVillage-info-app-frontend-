import React from 'react'
import './login.css';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';




const Login = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
     
        name: '',
        password: '',
         
    })

    const createNote = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (response) {
          
            navigate('/loged/admin', {replace: true});

       
        }
     
      };

    const handleChange = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

 
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 pageLogin mx-auto  '>
                <form>
                    <div className=" mx-auto">
                        <label  className="form-label">Admin name</label>
                        <input type="text" className="form-control" id="name" value={data.name}  onChange={(e) => { handleChange(e) }}/>
                
                        <label  className="form-label">password</label>
                        <input type="password" className="form-control" id="password" value={data.password} onChange={(e) => { handleChange(e) }}/>
            
                        <button type="submit" className="btn btn-primary mt-3" onClick={createNote}>Submit</button>
                    </div>
                </form>

            
            </div>
        </div>
    </div>
      
    )
}

export default Login

 