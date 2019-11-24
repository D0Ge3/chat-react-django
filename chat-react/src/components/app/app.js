import React,{Component} from 'react';
import './app.css';
import LoginPage from '../login-page'
import RoomsList from '../rooms-list'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoomChat from '../room-chat/';

import { throwStatement } from '@babel/types';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
       
        auth:false,
        selectedRoomNumber: null
    }
}
onLogin = (status) => {
    this.setState({
      auth: status
    })
}

logout = () => {
  
}
loginLogout = (isAuth) => {
  if(isAuth) {
    return <Link to="/login" onClick={() => {
            sessionStorage.removeItem("auth_token");
           console.log("Произошел выход");
          this.setState({auth:false})}}>Выйти</Link>
  } 
  if(!isAuth) {
    return <Link to="/login">Войти</Link>
  }
}
roomSelected = (selectedRoomNumber) => {
  this.setState({selectedRoomNumber});
}


render() {
  return (
    <Router>
    <div>
      <nav>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/roomslist">Rooms</Link>
          </p>
          
        <button>
            {this.loginLogout(this.state.auth)}
        </button>
      </nav>

     
        <Route path="/" 
              render={() => <h2>Добро пожаловать в чат</h2>}
              exact />
        <Route path="/roomslist" exact>
          <RoomsList isLoggedIn={this.state.auth}
                      selectedRoom={this.roomSelected}/>
        </Route>
        <Route path="/login" >
          <LoginPage onLoggedIn={this.onLogin}/>  
        </Route>
        <Route path={`/roomslist/:id`}>
           <RoomChat roomNumber={this.state.selectedRoomNumber}/>
         </Route>

    </div>
  </Router>
  )



    // <div className="Chat">
    // <p>TEST</p>
    // <LoginPage/>
    // </div>

}}

