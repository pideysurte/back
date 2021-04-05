import React, {Component} from 'react'

class inputCategory extends Component {
   
    componentDidMount(){
      
    }
    render(){
        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Tipo Solución</label>
                            <select className="form-control" id="updsolution" name="solution">      
                                <option value="0" >Personalizado Entry</option>   
                                <option value="1" >Personalizado Business</option> 
                                <option value="2" >Asociativo Entry</option>   
                                <option value="3" >Asociativo Business</option>                                                                           
                            </select>                                                              
                        </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default inputCategory