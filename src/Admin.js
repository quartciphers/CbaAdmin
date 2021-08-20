import React, { useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import AdminContext from './AdminContext';
import AddAdminContext from './AddAdminContext';

import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


function Admin() {

    const BaseUrl = useContext(AdminContext)

    $(document).ready(function () {
        $('#dataTable').DataTable();
    });
 

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const AdminData = useContext(AddAdminContext);


 
    useEffect(() => {
     setLoading(true);
     fetch(BaseUrl+"api/v1/user")
       .then((res) => res.json())
       .then((data) => {
         setData(data["Users"]);
       })
       .catch((err) => {
         console.log(err);
       })
       .finally(() => {
         setLoading(false);
       });
   }, []);
      if(loading){
          return<div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
      }
      let  handleClick =() =>{
        console.log(data);
        AdminData.setAdminData([...data])
        console.log(AdminData);
      }

    return (
        <>
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Admin Management</h1>
                <Link to="/admin-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-plus-square fa-sm text-white-50"></i> Add Admin</Link>
            </div>

            
<div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Admin Users List</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                           
                                            <th>UserName</th>
                                            
                                            <th>Admin Access</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>UserName</th>
                                            
                                            <th>Admin Access</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            data.map((user) => {
                                                return <tr>
                                                <td>{user.Username}</td>
                                                <td>{user.AdminAccess ?"Yes":"No"}</td>                          
                                                <td>
                                                    <Link className="btn btn-outline-info btn-block"to={"/admin-edit/"+user.Username}  onClick={handleClick}>View</Link>
                                                </td>
                                            </tr>
                                        
                                        
                                        
                                        })

                                       
                                    
                                        }
                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Admin
