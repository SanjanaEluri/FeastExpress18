import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css'

export default function Viewsellers() {
  const [jobseekers, setJobSeekers] = useState([]);

  const fetchJobSeekers = async () => {
    try {
      const response = await axios.get('http://localhost:2001/viewallprofile');
      setJobSeekers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchJobSeekers();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>All Sellers</h1>
      
      <table className="table" style={{ margin: 'auto', width: '80%' }}>
          <thead>
            <tr>
              <th>restuarentname</th>
              <th>licensenumber</th>
              <th>pannumber</th>
              <th>email</th>
              <th>bankaccountnum</th>
              <th>contact</th>
            </tr>
          </thead>
          <tbody>
            {jobseekers.map((jobseeker, index) => (
              <tr key={index}>
                <td>{jobseeker.restuarentname}</td>
                <td>{jobseeker.licensenumber}</td>
                <td>{jobseeker.pannumber}</td>
                <td>{jobseeker.email}</td>
                <td>{jobseeker.bankaccountnum}</td>
                <td>{jobseeker.contact}</td>
              </tr>
            ))}
            {jobseekers.length === 0 && (
              <tr>
                <td colSpan="6">Data Not Found</td>
              </tr>
            )}
          </tbody>
      </table>
    </div>
  );
}
