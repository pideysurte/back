import React, {Component} from 'react'

class MarketPlace extends Component {
  
    render(){
        return  (
            <React.Fragment>
                <div  className="left-sidebar">                    
                                        <li> <a  className="has-arrow  " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">MarketPlace</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li><a href="./marketlist">Listar</a></li>
                                                <li><a href="./marketcreate">Crear</a></li>
                                            </ul>
                                        </li>
                </div>                
            </React.Fragment>          
        )
    }
}

export default MarketPlace