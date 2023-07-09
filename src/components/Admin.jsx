import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './login.css';

const Admin = () => {
  const [inf, setInf] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (inf === '1') {
      navigate('/loged/admin/create_bus', { replace: true });
    }
    if (inf === '2') {
      navigate('/loged/admin/create_pharmacy', { replace: true });
    }
  }, [inf]);

  const handleCreateBusClick = () => {
    setInf('1');
  };
  const handleCreatePhsClick = () => {
    setInf('2');
  };
 
  return (
    <div className="containers ">
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-12 pageLogin  mx-auto">
          <div className="ml-2">
            <button type="submit" className="btn btn-primary mt-3" onClick={handleCreateBusClick}>
              Create bus
            </button>
          </div>

          <div className="mr-3">
            <button type="submit" className="btn btn-primary mt-3" onClick={handleCreatePhsClick}>
              Create Pharmacy
            </button>
          </div>

          <div className="mr-3">
            <button type="submit" className="btn btn-primary mt-3">
              Add SubCategory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
