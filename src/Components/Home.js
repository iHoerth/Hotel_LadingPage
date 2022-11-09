import { Button } from '@mui/material';
import { useState } from 'react'
import DatePick from './DatePick'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

   const handleDatePick = (date,condition) => {
    switch(condition){
      case 'start':
        setStartDate(new Date(date));
        break;
      case 'end':
        setEndDate(new Date(date));
        break;
    }
  }

  const handleReservation = (start,end) => {
    if(startDate.getMonth() > endDate.getMonth()){
      alert('El mes de salida no puede estar antes que el de entrada juas noob')
      return;
    }
    if(startDate.getDate() >= endDate.getDate() && startDate.getMonth() >= endDate.getMonth()){
      alert('El dia de salida no puede estar antes que el de entrada juas noob')
      return;
    }
    alert('RESERVA DESDE ' + startDate.getDate() + '/' + (startDate.getMonth() + 1) + ' HASTA ' + endDate.getDate() + '/' + (endDate.getMonth() + 1));
    setStartDate(new Date(start));
    setEndDate(new Date(end));
  }

  return (
    <div className='homeContainer'>
      <div  className='cajaRandom' style={{width:'92%',opacity:'0.8'}}>
        <div  style={{display:'flex',justifyContent:'center',width:'50%',height:'50vh',fontSize:'20px',marginTop:'12%'}}>
          <div style={{display:'flex',flexDirection:'column',border:'1px solid gray',borderRadius:'4px',width:'400px',height:'160px',margin:'0 8% 0 8%'}}>
            <h2 style={{margin:'10px'}}>LINEA DE EXPERIENCIA</h2>
            <p style={{fontSize:'18px',margin:'10px'}}>
              Texto descriptivo. Complementa la descripcion de la experiencia en una sola linea.Texto descriptivo.  
            </p>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'50%',height:'160px',fontSize:'20px',marginTop:'12%',margin:'12% 8% 0 8%'}}>
          <DatePick handleReservation={handleReservation} handleDatePick={handleDatePick} startDate={startDate} endDate={endDate} /> 
        </div>
      </div>
      <div className='cajaRandom' style={{backgroundColor:'#E7E2D5',margin:'0',width:'100%'}}>
        <div className='cajaRandom' style={{width:'92%',marginRight:'4%',marginTop:'3%'}}>
          
          <div className='homeSectionWrapper' style={{height:'45vh',width:'50%'}}>
              <div className='homeSectionWrapper' style={{gap:'20px',width:'50%',margin:'3%',height:'70%'}}>
                <h3 style={{}}>Comodidad y cercania</h3>
                <p style={{textAlign:'center'}}>Sea por placer o por trabajo, nuestra ubicacion le ayudara a planificar su visita a la ciudad</p>
                <img src='Home 1.jpeg' style={{width:'160px',height:'160px', borderRadius:'100%'}} alt=''/>
              </div>
          </div>

          <div className='homeSectionWrapper' style={{height:'45vh',width:'50%'}}>
            <div className='homeSectionWrapper' style={{gap:'20px',width:'50%',margin:'3%',height:'70%'}}>
              <h3 style={{}}>Descripcion de servicio</h3>
              <p style={{textAlign:'center'}}>Aca se come BIEN PIOLA amigo veni o te fajamos</p>
              <img src='Home 3.jpeg' style={{width:'160px',height:'160px', borderRadius:'100%'}} alt='' />
            </div>
          </div>
        
        </div>
      </div>
      <div className='cajaRandom' style={{backgroundColor:'#E7E2D5',margin:'0',width:'100%'}}>
        <div className='cajaRandom' style={{width:'92%',marginRight:'4%'}}>
          
          <div className='homeSectionWrapper' style={{height:'55vh',width:'60%',margin:'0'}}>
              <div className='homeSectionWrapper' style={{gap:'8px',width:'60%',margin:'3%',height:'350px'}}>
                <img src='Home 1.jpeg' style={{height:'350px',width:'100%',borderRadius:'20px'}} alt='' />
              </div>
          </div>

          <div className='homeSectionWrapper' style={{height:'55vh',width:'50%'}}>
            <div style={{display:'flex', flexDirection:'column',justifyContent:'space-around',width:'70%',margin:'3%',marginTop:'30px',height:'220px'}}>
              <h3 style={{fontSize:'40px'}}>Destacado sobre Rooms</h3>
              <div>
                <p>Tenemos colchones re piolas</p>
                <p>Tenemos colchones re piolas</p>
                <p>Tenemos colchones re piolas</p>
              </div>
              <Button onClick={() => navigate('/rooms')} variant='contained' style={{fontSize:'12px',width:'60',backgroundColor:'#1a1a1a'}}>Nuestras habitaciones</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='cajaRandom' style={{backgroundColor:'#E7E2D5',margin:'0',width:'100%',height:'45vh'}}>
        <div style={{fontSize:'20px',width:'92%',display:'flex',flexDirection:'row',margin:'0 8% 0 8%',justifyContent:'space-between'}}>

          <div style={{
            backgroundColor:'#DCCBB1',
            height:'350px',
            width:'300px',
            borderRadius:'16px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-around',
            textAlign:'center',}}>
            <img src='Home 1.jpeg' style={{width:'160px',height:'160px', borderRadius:'100%'}} alt=''/>
            <p>Lineas para destacar pro en Ubicacion</p>
          </div>

          <div style={{
            backgroundColor:'#DCCBB1',
            height:'350px',
            width:'300px',
            borderRadius:'16px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-around',
            textAlign:'center',}}>
            <img src='Home 1.jpeg' style={{width:'160px',height:'160px', borderRadius:'100%'}} alt=''/>
            <p>Lineas para destacar pro en Habitaciones</p>
          </div>

          <div style={{
            backgroundColor:'#DCCBB1',
            height:'350px',
            width:'300px',
            borderRadius:'16px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-around',
            textAlign:'center',}}>
            <img src='Home 1.jpeg' style={{width:'160px',height:'160px', borderRadius:'100%'}} alt=''/>
            <p>Lineas para destacar pro en Servicios</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home