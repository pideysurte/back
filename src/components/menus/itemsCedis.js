import React, {Component} from 'react'

class Cedis extends Component{
  
    render(){
        return  (
            <React.Fragment>
                <div>
                                        <li> <a  className="has-arrow  " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Cedis</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li><a href="./cedislist">Listar</a></li>
                                                <li><a href="./cediscreate">Crear</a></li>
                                            </ul>
                                        </li>  
                </div>                
            </React.Fragment>          
        )
    }
}

export default Cedis