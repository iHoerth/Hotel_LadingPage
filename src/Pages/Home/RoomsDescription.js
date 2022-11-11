import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Container from "../../Components/Container";

const RoomsDescription = () => {
  const navigate = useNavigate();
  return (
    // <Container style={{margin:'0% 0 0 0%',width:'100%',justifyContent:'space-around',justifyContent:'center',alignItems:'center'}}>
    //     <Container style={{height:'65vh',margin:'0',marginBottom:'5%',border:'2px solid blue',margin:'0 0 4% 0',width:'92%',}}>
    <Container style={{width:'100%'}}>
      <Container style={{width:'92%',margin:'5% 0 6% 4%'}}>

        <Container style={{width:'50%'}}>
          <img src='Home 1.jpeg' style={{height:'100%',width:'95%',borderRadius:'5px',boxShadow:'4px 4px 4px 1px rgba(40, 40, 40, 0.5'}} alt='' />
        </Container>

        <Container style={{width:'50%',margin:'0',height:'100%',marginBottom:'5%',justifyContent:'start',justifyContent:'center',alignItems:'center'}}>
          <Container style={{flexDirection:'column',margin:'0 0 0 5%',height:'40vh',alignItems:'stretch',flex:'0.9',justifyContent:'space-between'}}>
            <h3 style={{fontSize:'50px'}}>Destacado sobre Rooms</h3>
            <div style={{fontSize:'26px',fontStyle:'italic'}}>
              <p>Tenemos colchones re piolas dfgsdfgsdfgsdfgfsdhsdfgsdfgd</p>
              <p>Tenemos colchones re piolas dfgsdfgsdfgsdfgfsdhsdfgsdfgd</p>
              <p>Tenemos colchones re piolas dfgsdfgsdfgsdfgfsdhsdfgsdfgd</p>
            </div>
            <Button onClick={() => navigate('/rooms')} variant='contained' style={{fontSize:'18px',width:'40%',backgroundColor:'#1a1a1a'}}>Nuestras habitaciones</Button>
          </Container>
        </Container>
      </Container>
        
    </Container>
  )
}

export default RoomsDescription