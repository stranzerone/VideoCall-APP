import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../provider/Provider';
import { useNavigate } from 'react-router-dom';
import "./lobby.css"
export default function LobbyScreen() {
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const socket = useSocket();
const navigate =useNavigate()
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log({ email, room });

    socket.emit('room:join', { email, room });
  }, [email, room, socket]);

  const handleJoinRoom = useCallback((data)=>{
 const {email,room} =data;
navigate('/room/'+room);
  },[navigate])

  useEffect(() => {
    socket.on('room:join', handleJoinRoom);

 
    return()=>{
        socket.off('room:join',handleJoinRoom)
    }
    // Clean up the event listener when the component unmounts
    
  }, [socket]);

  return (
    <div className='lobbyCoin'>
    
      <h1>Lobby</h1>
      <h4>let join the crew</h4>
      <div className='lobbyBox'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          placeholder='Email'
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor='room'>Room No</label>
        <input
          name='room'
          type='text'
          value={room}
          placeholder='ROOM ID'
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button>Connect</button>
      </form>
    </div>
    </div>
  );
}
