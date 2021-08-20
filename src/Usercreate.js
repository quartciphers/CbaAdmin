import React, { useState,useContext } from 'react'
import AdminContext from './AdminContext';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import useToken from './userToken';
function Usercreate() {
    const { token} = useToken();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [sector, setSector] = useState("");
    const [phone, setPhone] = useState("");

    const BaseUrl = useContext(AdminContext)
    let history = useHistory();

    let handleSubmit = (e) => {

        e.preventDefault();
       
        console.log(
            name,gender,sector,phone
        );
       
        axios({
            method: 'post',
            url: BaseUrl+'api/v1/person',
            data: {
                Name: name,
                Gender: gender,
                Sector:sector,
                Phone:phone
            },
            headers: {'admin-username': token}
          }).then(function (response) {
                console.log(response);
                history.push('/');
                
              })
              .catch(function (error) {
                console.log(error);
               
              });
       
    }
    return (


        <div className="container">
            <h1>Member Form</h1>
           <form data-toggle="validator" onSubmit={handleSubmit}>
            <div className="row">
            
                <div className="col-lg-6 form-group">
                    <label>Name</label>
                    <input type="text" name="name"  value={name} onChange={(e) => setName(e.target.value)} className="form-control" required  />
                </div>
                <div className="col-lg-6 form-group">
                    <label>Gender</label>
                    <select type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="form-control" required >
                        <option value="">SELECT-GENDER</option>
                       <option value="male">MALE</option>
                       <option value="female">FEMALE</option>
                       <option value="others">OTHERS</option>
                    </select>  
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 form-group">
                    <label>Sector</label>
                    <select name="sector" value={sector} onChange={(e) => setSector(e.target.value)} className="form-control" required >
                        <option value="">SELECT-SECTOR</option>
                       <option value="BATCH">BATCH</option>
                       <option value="SLOT">SLOT</option>
                     </select>   
                </div>
                <div className="col-lg-3 form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" required  />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12 form-group">
                    <input className="btn btn-primary" type="submit" onClick  />
                </div>
            </div>
            </form>
        </div>
        
        
    )

}

export default Usercreate
