import React, {Component} from 'react'
import Const from '../utils/defaultConstant'
class productoCedis extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    componentDidMount(){
        fetch(Const.urlrest + "/api/productscedi", {
            headers: Const.myHeaders
        })
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
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
                te;
        return  (
            <React.Fragment>                
                <div className="col-md-4">
                    <div className="form-group">
                        <label className=" control-label">Producto </label>
                            <select className="form-control" name="dproduct" id="updidproduct">      
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

export default productoCedis