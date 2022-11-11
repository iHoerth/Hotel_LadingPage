import { useEffect,useState } from "react"
import { getItems } from "../../Data/api";

import Room from "./Room"

const RoomsContainer = () => {
  const [loading,setLoading] = useState(true);
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getRooms = async () => {
      const data = await getItems('rooms');
      setRooms(await data);
      setLoading(false);    
    }
    getRooms();
  },[])
  
  if(loading){
    return(
      <div className='roomsContainer' style={{fontSize:'50px'}}> L O A D I N G . . . </div>
    )
  }
  return (
    <div className='roomsContainer'>
      {
        rooms.map((room) => <Room roomData={room} key={room.id}/>)
      }

    </div>
  )
}

export default RoomsContainer