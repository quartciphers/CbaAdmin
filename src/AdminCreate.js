import React, {  useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AdminContext from './AdminContext';
import useToken from './userToken';
function Admincreate() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [adminaccess, setAdminaccess] = useState("");
    const { token} = useToken();
    const BaseUrl = useContext(AdminContext)
    let history = useHistory();
    let handleSubmit = () => {
    
        axios({
            method: 'post',
            url: BaseUrl+'api/v1/user',
            data: {
                Username: name,
                Password: password,
                AdminAccess:adminaccess
            },
            headers: {'admin-username': token}
          }).then(function (response) {
                console.log(response);
               
              })
              .catch(function (error) {
                console.log(error);
               
              });
        history.push("/")
    }
    return (


        <div className="container">
            <h1>Admin  Form</h1>
        
            <div className="row">
            
                <div className="col-lg-6">
                    <label>Name</label>
                    <input type="text" name="name"  value={name} onChange={(e) => setName(e.target.value)} className="form-control" required  />
                </div>
                
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />  
                </div>
                <div className="col-lg-3">
                    <label>Admin Access</label>
                    <select  name="phone" value={adminaccess} onChange={(e) => setAdminaccess(e.target.value)} className="form-control" required  >
                      <option value="true">Yes</option>   
                    <option value="false">No</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <input className="btn btn-primary" type="submit" onClick={handleSubmit} />
                </div>
            </div>
           
        </div>
        
        
    )

}

export default Admincreate
