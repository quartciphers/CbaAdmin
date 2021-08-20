import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'


import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';



function Users() {
    
   //initialize datatable
   $(document).ready(function () {
    $('#dataTable').DataTable();
});
    

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
 
    useEffect(() => {
     setLoading(true);
     fetch("https://cba-cors.herokuapp.com/https://cba-adminws-dev.herokuapp.com/api/v1/person")
       .then((res) => res.json())
       .then((data) => {
         setData(data["Persons"]);
         console.log(data);
       })
       .catch((err) => {
         console.log(err);
       })
       .finally(() => {
         setLoading(false);
       });
   }, []);

   if(loading){
       return <div class="d-flex align-items-center">
       <strong>Loading...</strong>
       <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
     </div>
   }
    return (
        <>
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Member Management</h1>
                <Link to="/user-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-plus-square fa-sm text-white-50"></i> Add Member</Link>
            </div>

           
            <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Members List</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped " id="dataTable" width="100%" cellspacing="0">
                                    <thead className="table-dark">
                                        <tr>
                                        <th >ID </th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Sector</th>
                                            <th>JoinDate</th>
                                            <th>LeaveDate</th>
                                            <th>Phone</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot className="table-dark">
                                        <tr>
                                    
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Sector</th>
                                            <th>JoinDate</th>
                                            <th>LeaveDate</th>           
                                            <th>Phone</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            data.map((user) => {
                                                return <tr>
                                                 <td>{user.Id}</td>
                                                <td>{user.Name}</td>
                                                <td>{user.Gender}</td>
                                                <td>{user.Sector}</td>
                                                <td>{user.JoinDate}</td>
                                                <td>{user.LeaveDate ? user.LeaveDate:"Not-Yet"}</td>
                                                <td>{user.Phone}</td>
                                                <td >{user.Active ?<p className="badge badge-success btn-block">Active</p>:<p className="badge badge-danger btn-block">Inactive</p>}</td>                                        
                                                <td>
                                                    <Link to={"/user-edit/"+user.Id} className="btn btn-outline-info btn-block ">View</Link>
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

export default Users
