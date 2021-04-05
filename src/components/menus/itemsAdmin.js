import React, {Component} from 'react'
class itemsAdmin extends Component{  
    render(){
        return  (
            <React.Fragment>
                <div> 
                                <li> <a  className="has-arrow  " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Administración </span></a>
                                    <ul aria-expanded="false"  className="collapse">                                      
                                                <li><a href="./paymentmethods">Medodos de pago</a></li>
                                                <li><a href="./typedocument">Tipos de documento</a></li>
                                                <li><a href="./typeshipping">Tipos de envío</a></li>
                                                <li><a href="./typetaxes">Tipos de impuestos</a></li>
                                                <li><a href="./typemarketplace">Tipos de marketplace</a></li>                                        
                                                <li><a href="./status">Status </a></li>
                                    </ul>
                                </li>  
                </div>            
            </React.Fragment>          
        )
    }
}

export default itemsAdmin