import React, { Component } from 'react';

import './login-page.css';
import ChatService from '../../services/chat-service';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  useLocation
  } from "react-router-dom";
  import { Redirect, withRouter } from 'react-router-dom';
  
import RoomsList from '../rooms-list';
  

 class LoginPage extends Component {
    //инициализ сервиса
    chatService = new ChatService();

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            
        }
    }
    onLoginChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    //отправка на сервер


      

    setLogin = (e) => {
        e.preventDefault();
        //console.log("This state", this.state);
        console.log(this.state.username);
        console.log("Тут будет отправка на серв");

        this.chatService
            .getToken(this.state.username,this.state.password)
            .then((res) => {console.log(res);
                if(!res.errors){
                    //alert('Вы успешно зашли');
                    sessionStorage.setItem("auth_token", res.data.attributes.auth_token);
                    //this
                    //browserHistory.push('/roomslist');
                    
                  // this.setState({auth:true});
                   this.props.onLoggedIn(true);
                   //console.log(this.props.history);
                   //console.log(sessionStorage.getItem('auth_token'));
                  
                   this.props.history.push('/roomslist');

                

                }else {alert("Логин или пароль неверен");}});


    }

    render() {
        // if(this.state.auth) {
            // if(this.props.isLoggedIn) {
            //     sessionStorage.clear();
            //     console.log("Произошел выход");
            //     return <Redirect to="/"/>;
                
            // } else {
               
        // } else {
        return (  
            
            // <Router>
            //     <Route path="/roomslist">
            //         <RoomsList isLoggedIn={this.state.auth}/>
            //     </Route>

          
            <div>
                <p>LoginPage</p>
                <form onSubmit={this.setLogin}>
                    <input type="text" placeholder="login" onChange={this.onLoginChange}/><br/><br/>
                    <input type="password" placeholder="password" onChange={this.onPasswordChange}/><br/><br/>
                    <button>Войти</button>
                </form>

                
            </div>
            //</Router>
            
        ) //}
    //}
    }
}

export default withRouter(LoginPage);