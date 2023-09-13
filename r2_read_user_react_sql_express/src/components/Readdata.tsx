import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Readdata() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((user:any) => (
            <div className="col-md-6" key={user.Regno}>
              <div className="card my-3">
                <h5 className="card-header text-center"><b>{user.Regno}</b></h5>
                <div className="card-body text-center">
                  <h5 className="card-title"><b>Username:</b> {user.Username}</h5>
                  <p className="card-text"><b>Age:</b> {user.Age}</p>
                  <p className="card-text"><b>Phone:</b> {user.Phone}</p>
                  <p className="card-text"><b>Branch:</b> {user.Branch}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
