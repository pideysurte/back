import React, {Component} from 'react'
class inputStatusMarket extends Component {

    componentDidMount(){

    }
    render(){

        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Estado</label>
                            <select className="form-control" id="activomarket" name="activomarket">      
                                <option value="1" >Activo</option>   
                                <option value="2" >Inactivo</option>                                    
                            </select>                                                              
                        </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default inputStatusMarket