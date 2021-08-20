import React from 'react'
import useToken from './userToken'

function Topbar() {

     
    const { token} = useToken();


    let logout =(e) =>{
     
        e.preventDefault();
        sessionStorage.clear();
        window.location.reload()
       

    }   
  
   
    return (
       <>
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">



           
<ul class="navbar-nav ml-auto">
   

       
    <div class="topbar-divider d-none d-sm-block"></div>

   
    <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small text-capitalize">{token}</span>
            <i className="fas fa-user fa-2x"></i>
        </a>
       
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown">
         
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal " onClick={logout}>
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </a>
        </div>
    </li>

</ul>

</nav>
       </>
    )
}

export default Topbar
