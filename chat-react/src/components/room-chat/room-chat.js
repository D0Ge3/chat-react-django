import React, { Component } from 'react';

import './room-chat.css';
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
  

  

 class RoomChat extends Component {
    //инициализ сервиса
    //chatService = new ChatService();

    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
       
        return (  
            <div>
                <p>Room chat{this.props.roomNumber}</p>
            </div>
        ) 
    }
}

export default RoomChat;