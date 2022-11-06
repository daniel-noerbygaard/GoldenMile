import Home from './Components/Home/Home'
import { registerRootComponent } from 'expo'; // Must not be removed
import { useState, useEffect } from 'react';

export default function App() {
  const [participants, setParticipants] = useState(5)
  
  useEffect(() => {
    console.log(participants)
  }, [participants])

  return (
    <Home participants={participants} setParticipants={setParticipants}/>
  )
}

registerRootComponent(App);