
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Users from './Users';
import Usercreate from './Usercreate';
import UserEdit from './UserEdit';
import { AdminProvider } from "./AdminContext";
import Admin from './Admin';
import Admincreate from './AdminCreate';
import AdminEdit from './AdminEdit';
import Sector from './Sector';
import AddBatch from "./AddBatch";
import AddSlot from "./AddSlot";
import {AdminUser} from "./AddAdminContext";
import NotFound from "./NotFound";
import Login from "./Login";
import useToken from "./userToken";




function App() {
  
  const { token, setToken } = useToken();
 
  
  if(!token) {
    
    return (
    <Login setToken={setToken} />
   
   )
    
  }
  


  return (



    
    <AdminProvider>
      <AdminUser>
      <Router>  
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Switch>
              
              <Route path="/" component={Dashboard} exact={true} />
              <Route path="/user" component={Users} exact={true} />
              <Route path="/user-create" component={Usercreate} exact={true} />
              <Route path="/user-edit/:id" component={UserEdit} exact={true} />
              <Route path="/admin" component={Admin} exact={true} />
              <Route path="/admin-create" component={Admincreate} exact={true} />
              <Route path="/admin-edit/:id" component={AdminEdit} exact={true} />
              <Route path="/sector" component={Sector} exact={true}/>
              <Route path="/manage-batch" component={AddBatch} exact={true}/>
              <Route path="/manage-slot" component={AddSlot} exact={true}/>
              <Route component={NotFound} exact={true}/>
              
              </Switch>
            </div>
          </div>
        </div>
        
      </div>
      
    </Router>
    </AdminUser>
    </AdminProvider>
  );
}

export default App;
