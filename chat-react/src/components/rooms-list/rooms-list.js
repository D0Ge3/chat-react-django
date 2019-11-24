import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './rooms-list.css';
import LoginPage from '../login-page/';
import ChatService from '../../services/chat-service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

import RoomChat from '../room-chat/';
import {  withRouter } from 'react-router-dom';



class RoomsList extends Component  {
    chatService = new ChatService();
    

    // test = () => {
    //     console.log(this.props.isLoggedIn);
    // }
    constructor() {
        super();
        this.state = {
            //auth:true
            rooms: null,
            selectedRoom: null
            
        }
    }

    onRoomSelect = (id) => {
      console.log(id);
      this.props.selectedRoom(id);
      this.props.history.push(`/roomslist/${id}`);
      // console.log(this.state);
      //console.log(`выбрано ${e.target.key}`);
      //this.props.history.push(`/roomslist/${id}`);
    }

    componentDidMount() {
        this.chatService
        .getRooms()
        .then((res) => {if(res.data){this.setState({rooms: res.data.data})}});
      } 
//this.props.selectedRoom={id}
      renderItems(arr) {
        return arr.map(({id,date,creater})=>{
          return (
            <li
              key={id}
              onClick={()=> {
                this.onRoomSelect(id);
                
              }}>
             
              {id} Создатель: {creater.username}
            </li>
          )
        })
      }

  


    render() {
        const { rooms } = this.state;
        if((!rooms)  && (this.props.isLoggedIn)) {
            return <p>Rooms пуст</p>
        }
        if (this.props.isLoggedIn) {
            const items = this.renderItems(rooms);
            return (<div>
                <p>All is OK</p>
                {/* <Router> */}
                <ul>
                    {items}
                </ul>

        {/* <Route path={`/roomslist/:id`} exact>
          <RoomChat />
        </Route>
        
                </Router> */}
                <button onClick={() => console.log(this.state.rooms[0])}>Check</button>
                </div>)
        
    }  else {

        //const t = this.test();
        return <Redirect to="/login"/>
        // return (
        }

        // )
    }
}

export default withRouter(RoomsList);


// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

// import './rooms-list.css';
// import LoginPage from '../login-page/';
// import ChatService from '../../services/chat-service';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import RoomChat from '../room-chat/'



// class RoomsList extends Component  {
//     chatService = new ChatService();
    

//     // test = () => {
//     //     console.log(this.props.isLoggedIn);
//     // }
//     constructor() {
//         super();
//         this.state = {
//             //auth:true
//             rooms: null
            
//         }
//     }

//     componentDidMount() {
//         this.chatService
//         .getRooms()
//         .then((res) => {if(res.data){this.setState({rooms: res.data.data})}});
//       } 

//       renderItems(arr) {
//         return arr.map(({id,date,creater})=>{
//           return (
//             <li
//               key={id}
//               onClick={() => console.log(`выбрано ${id}`)}>
//               <Link to={`/roomslist/${id}`}>{id} Создатель: {creater.username}</Link>
//             </li>
//           )
//         })
//       }

  


//     render() {
//         const { rooms } = this.state;
//         if((!rooms)  && (this.props.isLoggedIn)) {
//             return <p>Rooms пуст</p>
//         }
//         if (this.props.isLoggedIn) {
//             const items = this.renderItems(rooms);
//             return (<div>
//                 <p>All is OK</p>
//                 <Router>
//                 <ul>
//                     {items}
//                 </ul>

//         <Route path={`/roomslist/:id`} exact>
//           <RoomChat />
//         </Route>
        
//                 </Router>
//                 <button onClick={() => console.log(this.state.rooms[0])}>Check</button>
//                 </div>)
        
//     }  else {

//         //const t = this.test();
//         return <Redirect to="/login"/>
//         // return (
//         }

//         // )
//     }
// }

// export default RoomsList;


