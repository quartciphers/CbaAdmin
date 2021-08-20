import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import AdminContext from './AdminContext';
import useToken from './userToken';
function AddBatch(){
    const { token} = useToken();
    const [name, setName] = useState("");
    const [fees, setFees] = useState("");
    let history = useHistory();
    const BaseUrl = useContext(AdminContext)
  let handleSubmit = ()=>{

    axios({
        method: 'post',
        url: BaseUrl+'api/v1/sector',
        data: {
           Name : name,
           Fees : fees
        },
        params: {'type': 'BATCH'},
        headers :{'admin-username': token}
      }).then(function (response) {
            console.log(response);
           
          })
          .catch(function (error) {
            console.log(error);
            
          });
    history.push("/")    

  }

    return(

        <div className="container">
            <h1>Add Batch</h1>
        
            <div className="row">
            
                <div className="col-lg-6">
                    <label>Name</label>
                    <input type="text" name="Name"  value={name} onChange={(e) => setName(e.target.value)} className="form-control" required  />
                </div>
                
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <label>Fees</label>
                    <input type="number" name="Fees" value={fees} onChange={(e) => setFees(e.target.value)} className="form-control" required />  
                </div>
             
            <div className="row mt-3">
                <div className="col-lg-12">
                    <input className="btn btn-warning" type="submit" onClick={handleSubmit} />
                </div>
            </div>
           
        </div>
        </div>

    )


}



export default AddBatch