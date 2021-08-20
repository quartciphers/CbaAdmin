
import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import './Login.css'



async function loginUser(user,pass) {
    const CorsUrl="https://cba-cors.herokuapp.com/"
     const BaseUrl="https://cba-adminws-dev.herokuapp.com/"
    return fetch(CorsUrl+BaseUrl+'/api/v1/user', {
      method: 'GET',
      headers: {
        'username': user,
        'password': pass
      },
      
    })
      .then(data => data.json())
   }









export default  function Login({ setToken }){
    
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser(
          username,
          password
        );
        if(token.CredentialMatch){
            setToken(username);
           window.location.reload()
           
        }else{
              
          return alert("Wrong Credential") 
            

        }
       
        
         
      }


 
     
 
 
 
    return(
    <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-2" />
      <div className="col-lg-6 col-md-8 login-box">
        <div className="col-lg-12 login-key">
          <i className="fa fa-key" aria-hidden="true" />
        </div>
        <div className="col-lg-12 login-title">
          ADMIN PANEL
        </div>
        <div className="col-lg-12 login-form">
          <div className="col-lg-12 login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-control-label">USERNAME</label>
                <input type="text" name="user" className="form-control"onChange={e => setUserName(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label className="form-control-label">PASSWORD</label>
                <input type="password" name="pass"className="form-control" i onChange={e => setPassword(e.target.value)} required/>
              </div>
              <div className="col-lg-12 loginbttm">
                <div className="col-lg-6 login-btm login-text">
                  {/* Error Message */}
                </div>
                <div className="col-lg-6 login-btm login-button">
                  <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-md-2" />
      </div>
    </div>
  </div>
  )
       
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

