import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';

export default function Viewmenud() {
  const [jobseekers, setJobSeekers] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const fetchJobSeekers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewmenu`);
      setJobSeekers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchJobSeekers();
  }, []);

  const cardStyle = {
    width: '200px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
  };

  const handlecart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.isArray(jobseekers) && jobseekers.map((jobseeker, index) => (
          <div
            key={index}
            style={{ ...cardStyle, ...(index === hoveredIndex ? hoverStyle : {}) }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {jobseeker.image && (
              <img
                src={`data:${jobseeker.image.contentType};base64,${jobseeker.image.data}`}
                alt=""
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '10px' }}>
              <h4>{jobseeker.itemname}</h4>
              <p>Price: Rs:{jobseeker.price}/-</p>
              <p>Varient: {jobseeker.varient}</p>
              <p>Quantity: {jobseeker.quantity}</p>
            </div>
            <div className='m-1 w-50'>
              <button className='btn' style={{ width: "100%" }} onClick={handlecart}>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
