import { useState } from 'react'
import DatePick from '../../Components/DatePick'
import { validateReservation } from '../../Services/Helpers';
import ColumnDescription from './ColumnDescription';
import Container from '../../Components/Container';
import RoomsDescription from './RoomsDescription';
import SmallDescription from './SmallDescription';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestAmount, setGuestAmount] = useState(1);

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
  const handleGuestAmount = (amount) => {
    setGuestAmount(amount);
  }
  const handleReservation = (start,end,amount) => {
    if(!validateReservation(startDate,endDate)) {
      return;
    } 
    else {
      setStartDate(new Date(start));
      setEndDate(new Date(end));
      setGuestAmount(amount);
      // pregunte en base de datos
      // si => actualizar base de datos ;  no => nada
      alert('RESERVA PARA '+guestAmount+' DESDE ' + startDate.getDate() + '/' + (startDate.getMonth() + 1) + ' HASTA ' + endDate.getDate() + '/' + (endDate.getMonth() + 1));
    } 
  }

  return (

    <div className='homeContainer'>
      <Container style={{fontSize:'40px',backgroundColor:'transparent',flexDirection:'row',fontSize:'20px'}}>
        <Container style={{fontSize:'48px',backgroundColor:'transparent',margin:'0',flex:'1',justifyContent:'center',alignItems:'center',height:'92vh'}}>
          <div style={{display:'flex',flexDirection:'column',borderRadius:'4px',width:'100%',height:'280px',margin:'0 8% 0 16%'}}>
            <h2 style={{margin:'10px',fontWeight:'500'}}>Linea de Experiencia</h2>
            <p style={{fontStyle:'italic',fontSize:'26px',margin:'10px'}}>
              Texto descriptivo. Complementa la descripcion de la experiencia en una sola linea.Texto descriptivo.  
            </p>
          </div>
        </Container>

        <Container style={{backgroundColor:'transparent',flex:'1',margin:'0',justifyContent:'center',alignItems:'center',height:'92vh'}}>
          <DatePick handleGuestAmount={handleGuestAmount} handleReservation={handleReservation} handleDatePick={handleDatePick} startDate={startDate} endDate={endDate} /> 
        </Container>
        <img className='overlayImage' src='Home 1.jpeg' alt=''/>
        <div className='overlay'></div>
      </Container>
      
      <Container style={{width:'100%'}}>
        <Container style={{marginLeft:'4%',width:'92%'}}>
          <SmallDescription img={'Home 1.jpeg'} description={'Sea por placer o por trabajo, nuestra ubicacion le ayudara a planificar su visita a la ciudad'}/>
          <SmallDescription img={'Home 3.jpeg'} description={'Aca se come BIEN PIOLA amigo veni o te fajamos'}/>
       </Container>
      </Container>

      <RoomsDescription />

      <Container style={{margin:'0% 0 0 0%',width:'100%',justifyContent:'space-around',justifyContent:'center',alignItems:'center'}}>
        <Container style={{margin:'0 0 6% 0',width:'92%',justifyContent:'space-between'}}>
          <ColumnDescription img={'Home 1.jpeg'} description={'Description correspondiente a esta figuritaDescription correspondiente a esta figuritaDescription correspondiente a esta figurita'}/>
          <ColumnDescription img={'Home 2.jpeg'} description={'Description correspondiente a esta figuritaDescription correspondiente a esta figuritaDescription correspondiente a esta figurita'}/>
          <ColumnDescription img={'Home 3.jpeg'} description={'Description correspondiente a esta figuritaDescription correspondiente a esta figuritaDescription correspondiente a esta figurita'}/>
        </Container>
      </Container>
    </div>
  )
}

export default Home