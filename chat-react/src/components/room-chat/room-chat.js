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
    chatService = new ChatService();
    constructor() {
        super();
        this.state = {
            messages: null
        }

    }

    renderMessages= () => {

    }

    componentDidMount() {

        this.chatService
        .getRoomMessages(this.props.roomNumber)
        .then((res) => {if(res.data.data)
                            {
                                console.log(res.data.data);
                                this.setState({messages:res.data.data});
                                console.log(this.state);
                                
        }});
        
      }

    render() {
        if(this.props.isLoggedIn) {
            
            return (  
                <div>
                    <p>Room #{this.props.roomNumber}</p> 

                </div>
        )} else {
            return <Redirect to="/login"/>
        }
    }
}

export default RoomChat;