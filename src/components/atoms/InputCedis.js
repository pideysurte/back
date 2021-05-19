import React, {Component} from 'react'
import Const from '../utils/defaultConstant'
class inputCedis extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    componentDidMount(){
        fetch(Const.urlrest + "/api/cedi", {
            headers: Const.myHeaders
        })
            .then(response => response.json())
            .then(
                (result) => {
                    let datos = result.data
                    let data = [] 
                    datos.forEach(element => {
                       if(element.status=="1"){
                        data.push(element)
                       }
                    });
                    this.setState({
                        isLoaded: true,
                        items: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render(){
                const {
                    items
                } = this.state;
        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Cedi </label>
                            <select className="form-control" id="updcedis">      
                            {items.map(item => (
                                <option value={item.id} >{item.name}</option>
                            ))}                                          
                            </select>                                                              
                        </div>
                </div>
            </React.Fragment>          
        )
    }
}

export default inputCedis