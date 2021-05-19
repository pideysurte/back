import React from 'react';
import { BrowserRouter, Switch, Route,Link} from 'react-router-dom';
import Login from './components/login/Login';
import Forgot from './components/login/Forgot';
import Dashboard from './components/dashboard/Dashboard';
import PublicRoute from './Utils/PublicRoute';
import Status from './components/status/index'
import StatusList from './components/status/list'
import Paymentmethods from './components/Paymentmethods'
import PaymentmethodsList from './components/Paymentmethods/list'
import Typedocument from './components/typedocument'
import TypedocumentList from './components/typedocument/list'
import Typeshipping from './components/typeshipping'
import TypeshippingList from './components/typeshipping/list'
import Typetaxes from './components/typetax'
import TypetaxesList from './components/typetax/list'
import Typemarketplace from './components/typemarketplace'
import TypemarketplaceList from './components/typemarketplace/list'
import Marketlist from './components/marketplace/List'
import Marketcreate from './components/marketplace'
import Cedislist from './components/cedis/List'
import Cediscreate from './components/cedis/index'
import Fabdistlist from './components/fabdist/List'
import Fabdistcreate from './components/fabdist'
import advertising from  './components/advertising'
import advertisinglist from './components/advertising/list'
import user from './components/user/index'
import userlist from './components/user/list'
function App() {
  return (
    <div >
      <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <PublicRoute path="/forgot" component={Forgot} />
              <PublicRoute path="/dashboard" component={Dashboard} />
              <PublicRoute path="/status" component={Status} />     
              <PublicRoute path="/statuslist" component={StatusList} />    
              <PublicRoute path="/paymentmethods" component={Paymentmethods} />   
              <PublicRoute path="/paymentmethodslist" component={PaymentmethodsList} />   
              <PublicRoute path="/typedocument" component={Typedocument} />    
              <PublicRoute path="/typedocumentlist" component={TypedocumentList} />   
              <PublicRoute path="/typeshipping" component={Typeshipping} />   
              <PublicRoute path="/typeshippinglist" component={TypeshippingList} />  
              <PublicRoute path="/typetaxes" component={Typetaxes} />
              <PublicRoute path="/typetaxeslist" component={TypetaxesList} />
              <PublicRoute path="/typemarketplace" component={Typemarketplace} />
              <PublicRoute path="/typemarketplacelist" component={TypemarketplaceList} />        
              <PublicRoute path="/marketlist" component={Marketlist} />        
              <PublicRoute path="/marketcreate" component={Marketcreate} />       
              <PublicRoute path="/cedislist" component={Cedislist} />        
              <PublicRoute path="/cediscreate" component={Cediscreate} />       
              <PublicRoute path="/fabdistlist" component={Fabdistlist} />        
              <PublicRoute path="/fabdistcreate" component={Fabdistcreate} />  
              <PublicRoute path="/advertising" component={advertising} /> 
              <PublicRoute path="/advertisinglist" component={advertisinglist} /> 
              <PublicRoute path="/usercreate" component={user} /> 
              <PublicRoute path="/userlist" component={userlist} />               
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
