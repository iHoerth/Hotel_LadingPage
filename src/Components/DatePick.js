import { useState } from 'react';
import ReactDatePicker from 'react-datepicker'
import { Button } from '@mui/material'

import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({handleReservation,handleDatePick,startDate,endDate}) => {

  return (
    <div className='datePickerWrapper'>
      <div style={{display:'flex', flexDirection:'column'}}>
        <h3 style={{fontSize:'18px',marginBottom:'10px'}}>RESERVA TU HABITACION</h3>
        <div style={{display:'flex'}}>
          <p style={{width:'50%'}}>INICIO : </p>
          <ReactDatePicker selected={startDate} onChange={(date) => handleDatePick(date,'start') } />
        </div>
        <div style={{display:'flex'}}>
          <p style={{width:'50%'}}>FIN : </p>
          <ReactDatePicker selected={endDate} onChange={(date) => handleDatePick(date,'end') } />
        </div>
      </div>
      <Button variant='contained' size='small' style={{backgroundColor:'#1A1A1A',width:'75%',alignSelf:'center'}} onClick={() => handleReservation(startDate,endDate)}>Reservar</Button>
    </div>
  )
}

export default DatePick