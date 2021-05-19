import React, {Component} from 'react'
import Logologin from '../atoms/Logologin'
import '../../assets/css/Login.css';
import $ from 'jquery';
import {
  sha256
} from 'js-sha256';
import Const from '../utils/defaultConstant'
import AlertGeneral from '../atoms/AlertGeneral'
import {alertaGeneral,closeAlertGeneral} from '../../assets/js/GeneralScript'

document.body.classList.add('homelogin');

class Login extends Component {
          componentDidMount() {
            var el = document.getElementById('mggAlert');
            if (el) {
              el.addEventListener("click", closeAlertGeneral);
            }
            function validarEmail(valor) {
              if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
                return 1
              } else {        
                alertaGeneral("La dirección de email es incorrecta!.")
                return 0
              }
            }


            
            $(document).off().on('click', '.btngeneral', function () {
               let emailvalido = validarEmail($("#username").val())
               let email = $("#username").val()
               let pass= $("#password").val()
               
             
               if (emailvalido == "1" && pass.length >= 5 && pass.length <= 30) {
                 let password = sha256(pass)                
                                          var datos = {
                                            email: email,
                                            password: password,
                                            idMarketplace:1
                                          }                                   
                                          fetch(Const.urlrest + "/api/useradmin/login", {
                                              headers: Const.myHeaders,
                                              method: "POST",
                                              body: JSON.stringify(datos)
                                            })
                                            .then(response => response.json())
                                            .then(
                                              (result) => {
                                                  if (result.data != null) {
                                                    console.log(result.data)
                                                     localStorage.setItem("id", result.data.id);
                                                     localStorage.setItem("email", result.data.email);
                                                     localStorage.setItem("name",result.data.name);
                                                     localStorage.setItem("access", result.data.access);
                                                     localStorage.setItem("token", result.data.token);
                                                     
                                                     window.location.href = "./dashboard";

                                                  }else{
                                                         alertaGeneral("Por favor revisa los datos")

                                                  }
                                              },
                                              (error) => {
                                                console.log(error)
                                              }
                                            )
               }else{
                  alertaGeneral("Verifica los datos de acceso")
               }
               
               return false
            });
    }
    render(){
        return  (
            <React.Fragment>   
                  <div>   
                    <AlertGeneral />         
                  <div className="makeStyles-session-2 makeStyles-background-3">                    
                      <div className="makeStyles-content-4">
                          <div className="makeStyles-wrapper-5">
                              <div className="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded">
                                  <div className="MuiCardContent-root">
                                        <form >
                                          <div className="text-xs-center pb-xs">
                                                <Logologin />
                                                
                                                <span
                                                  className="MuiTypography-root MuiTypography-caption">Ingrese sus datos para
                                                  continuar</span></div>
                                          <div
                                              className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                              <label
                                                  className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                                                  data-shrink="false" for="username" id="username-label">Email</label>
                                              <div
                                                  className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                                
                                                  <input type="text" className="MuiInputBase-input MuiInput-input"  id="username"  /> </div>

                                          </div>
                                          <div
                                              className="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth">
                                              <label
                                                  className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                                                  data-shrink="false" for="password" id="password-label">Password</label>
                                              <div
                                                  className="">
                                                  <input  className="MuiInputBase-input MuiInput-input"  id="password" type="password" /> 
                                                  
                                                  </div>
                                                      
                                          </div>
                                            <div
                                              className="MuiButtonBase-root MuiButton-root MuiButton-contained btngeneral MuiButton-containedPrimary MuiButton-fullWidth"
                                                type="text"><span className="MuiButton-label">Ingresar</span><span
                                                  className="MuiTouchRipple-root"></span></div>


                                                  
                                                        <div className="pt-1 text-md-center">
                                                          <a href="./forgot">
                                                          <button
                                                      className="MuiButtonBase-root MuiButton-root MuiButton-text btnrecover"                                                 
                                                      type="button">
                                                        <span className="MuiButton-label">Recuperar
                                                          contraseña?</span>
                                                          <span className="MuiTouchRipple-root"></span>
                                                          </button></a>
                                          </div>
                                      </form>                       
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> 
               </div>
          </React.Fragment> 
       );
    }
}

export default Login;