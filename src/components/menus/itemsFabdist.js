import React, {Component} from 'react'

class Fabdist extends Component {
  
    render(){
        return  (
            <React.Fragment>
                <div>                    
                                        <li> <a  className="has-arrow  " href="#nogo" aria-expanded="false"><i  className="fa fa-book"></i><span  className="hide-menu">Fabricante distribuidor</span></a>
                                            <ul aria-expanded="false"  className="collapse">
                                                <li><a href="./fabdistlist">Listar</a></li>
                                                <li><a href="./fabdistcreate">Crear</a></li>
                                            </ul>
                                        </li>
                </div>                
            </React.Fragment>          
        )
    }
}

export default Fabdist