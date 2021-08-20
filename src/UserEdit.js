import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import AdminContext from './AdminContext';
import useToken from './userToken';




function UserEdit(props) {
    const { token} = useToken();
    let history = useHistory()
    let userId = props.match.params.id
    const BaseUrl = useContext(AdminContext)
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
 
    useEffect(() => {
     setLoading(true);
     fetch(BaseUrl+"api/v1/person",{
         method:"get",
         headers:{"person-id":userId}
     })
       .then((res) => res.json())
       .then((data) => {
         setData(data["Person"]);
         console.log(data["Person"]);
       })
       .catch((err) => {
         console.log(err);
       })
       .finally(() => {
         setLoading(false);
       });
   },[userId]);


  let deleteUser =()=>{

     console.log(userId);
    axios.delete(BaseUrl+"api/v1/person",{
        headers:{
            "admin-username":token,
            "person-id":userId
            
        }
    }).then((response)=>{
     console.log(response);
     history.push('/user')
    
     
    }).catch((error)=>{
        console.log(error);
    })
}
   

   if(loading){
       return <p>Fetching Data.....</p>
   }
  

    
    
    return (
        <div>
            <h1 className="h1">Member- {userId}</h1> 
            <div className="container-fluid mt-5">
                 

                 <ul className="list-group ">
                     <li className="list-group-item">Member ID :{data.Id}</li>
                     <li className="list-group-item">Member Name:{data.Name}</li>
                     <li className="list-group-item">Member Gender:{data.Gender}</li>
                     <li className="list-group-item">Sector :{data.Sector}</li>
                     <li className="list-group-item">Join Date :{data.JoinDate}</li>
                     <li className="list-group-item">Leave Date : {data.LeaveDate?data.LeaveDate:<span className="badge badge-danger">Not-yet</span>}</li>
                     <li className="list-group-item">Status : {data.Active?<span className="badge badge-success">Active</span>:<span className="badge badge-danger">Inactive</span>}</li>
                     {/* <li className="list-group-item"></li> */}
                 </ul>
              
                 <button className="btn btn-outline-danger btn-block" onClick={deleteUser}>Delete</button>
            </div>
            
        </div>
    )
}

export default UserEdit
