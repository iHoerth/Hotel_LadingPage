import { useState } from 'react';
import ReactDatePicker from 'react-datepicker'
import { Button } from '@mui/material'

import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({handleGuestAmount,handleReservation,handleDatePick,startDate,endDate}) => {

  return (
    <div className='datePickerWrapper'>
      <div style={{fontWeight:'400',fontSize:'22px',display:'flex', flexDirection:'column'}}>
        <h3 style={{fontWeight:'500',fontSize:'44px',marginBottom:'10px'}}>Reserva tu habitacion</h3>
        <div style={{display:'flex'}}>
          <p style={{fontWeight:'500',width:'50%'}}>INICIO : </p>
          <div style={{width:'50%'}}>
            <ReactDatePicker selected={startDate} onChange={(date) => handleDatePick(date,'start') } />
          </div>
        </div>
        <div style={{display:'flex'}}>
          <p style={{fontWeight:'500',width:'50%'}}>FIN : </p>
          <div style={{width:'50%'}}>
            <ReactDatePicker selected={endDate} onChange={(date) => handleDatePick(date,'end') } />
          </div>
        </div>
        <div style={{display:'flex'}}>
          <p style={{fontWeight:'500',width:'50%'}}>CANTIDAD : </p>
          <input defaultValue={1} id='amountValue' type='number' onChange={(e) => handleGuestAmount(e.target.value)} style={{width:'35%'}} />
        </div>
 
      </div>
      <Button
       variant='contained'
       size='small'
       style={{fontWeight:'500',fontSize:'18px',backgroundColor:'#1A1A1A',height:'7vh',width:'75%',alignSelf:'center'}}
       onClick={() => handleReservation(startDate,endDate)
       }>
        Consultar Disponibilidad
       </Button>
    </div>
  )
}

export default DatePick