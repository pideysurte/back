import React, {Component} from 'react'
import Logologin from '../atoms/Logologin'

import $ from 'jquery';
class Headerdashboard extends Component{
           componentDidMount() {
               
               if (localStorage.getItem('name') === null && localStorage.getItem('name') === "" && localStorage.getItem('email') === null) {
                   window.location.href = "./";
               } else {
                   document.querySelector(".nameuser span").innerHTML = localStorage.getItem('name')                
                   
               }
               function exitSite() {
                   localStorage.removeItem('name');
                   localStorage.removeItem('id');
                   localStorage.removeItem('email');
                   window.location.href = "./";
               }
               document.getElementById("exit").addEventListener("click", exitSite);
               $('input[type="text"]').on('input', function () {
                 //  this.value = this.value.replace(/[^0-9a-zA-Z-@.:/ ' 'áéíóúÁÉÍÓÚÑñÀÈÌÒÙàèìòù‘]/g, '');
                   this.value = this.value.substr(0, 255);
               });
               $('input[type="number"]').on('input', function () {
                   this.value = this.value.replace(/[^0-9.]/g, '');
                   this.value = this.value.substr(0, 18);
               });
               $('textarea').on('input', function () {
                 //  this.value = this.value.replace(/[^0-9a-zA-Z-@. *\n' 'áéíóúÁÉÍÓÚÑñÀÈÌÒÙàèìòù‘]/g, '');
               });
           }
    render(){
        return  (            
                <div  className="header asd">
                        <nav  className="navbar top-navbar navbar-expand-md navbar-light">
                           
                            <div  className="navbar-header">
                                <a  className="navbar-brand" href="./dashboard">
                                    <b><Logologin/></b>
                                </a>
                                <h3>Sistema de Administración Innovation Factory SAS</h3>
                            </div>
                           
                            <div  className="navbar-collapse2">                    
                                <ul  className="navbar-nav my-lg-0">
                                    <li  className="nav-item dropdown">
                                        <a  className="nav-link dropdown-toggle text-muted text-muted nameuser " href="#nogo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i  className="fa fa-user"></i>
                                           <span></span>
                                        </a>
                                    </li>
                                    <li  className="nav-item dropdown">
                                        <a  className="nav-link salir" href="#nogo" id="exit"> 
                                          Salir
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>   
        )
    }
}

export default Headerdashboard
