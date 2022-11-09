import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const oof = (language) => {
    alert('ENHORABUENA, EL SITIO ESTA EN ' + language)
  }

  return (
    <div className='navbar'>
      <NavLink style={{paddingLeft:'4%'}} className={({isActive}) => isActive ? 'navActive' : 'navInactive'} to='/home'>
      <img src='Logo PNG.png' className='navbarLogo'  alt='' />
      </NavLink>
      
      <div style={{display:'flex',flexDirection:'row',gap:'0 25px',paddingRight:'4%'}}>
        <NavLink className={({isActive}) => isActive ? 'navActive navButton' : 'navInactive navButton'} to='/rooms'>Habitaciones</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navActive navButton' : 'navInactive navButton'} to='/services'>Servicios</NavLink>
        <NavLink className={({isActive}) => isActive ? 'navActive navButton' : 'navInactive navButton'} to='/location'>Ubicacion</NavLink>
        <div style={{display:'flex',flexDirection:'row', gap:'5px'}}>
          <div onClick={() => oof('espaNeol')} className='navInactive navButton' style={{paddingRight:'8px',borderRight:'2px solid white'}}>ES</div>
          <div onClick={() => oof('INGLIY')} className='navInactive navButton' style={{paddingRight:'8px',borderRight:'2px solid white'}}>ENG</div>
          <div onClick={() => oof('SEU PORTUGUES FDP')} className='navInactive navButton'>POR</div>
          <div  className='hamburgerButton'>
            <MenuIcon sx={{fontSize:'40px'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar