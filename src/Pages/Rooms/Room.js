import React from 'react'

const Room = ({roomData}) => {
  return (
    <div className='card-container'>
      <div style={{fontSize:'30px'}}>HABITACION {roomData.numero}</div>
      <div>DISPONIBLE{roomData.reservado.length == 0 ? ': SI' : ' A PARTIR DEL ' + roomData.reservado[1]}</div>
    </div>
  )
}

export default Room