import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {

    const[username, setUsername]= useState('')
    const[password, setPassword]= useState('')
    const[regno, setRegno]= useState('')
 


    function userChange(event:any){

        setUsername(event.target.value)
    }

    
    function passChange(event:any){

        setPassword(event.target.value)
    }

   
    function regChange(event:any){

        setRegno(event.target.value)
    }

    
  

    const handleSubmit = async (e: any) => {

        e.preventDefault();
      
        try {
          const response = await axios.post('/api/users', {

            Regno: regno,
           
          });
      
        } catch (error:any) {
          console.error('Error Deleting user:', error.message);
        }
      };
      

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-center mt-auto">
                               <b>Delete User</b> 
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" name="Username"  value={username} onChange={userChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password1" name="Password" value={password} onChange={passChange} required />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Regno</label>
                                        <input type="text" className="form-control" id="password3" name="Regno" value={regno} onChange={regChange} required />
                                    </div>
                                    <div className='text-center mt-auto'>
                                    <button type="submit" className="btn btn-dark w-100">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}
