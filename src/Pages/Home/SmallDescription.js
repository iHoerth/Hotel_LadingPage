import React from 'react'

const SmallDescription = ({img,description}) => {
  return (
    <div className='homeSectionWrapper' style={{height:'38vh',width:'50%',margin:'3% 0 6% 0',fontSize:'22px'}}>
      <h3 style={{fontSize:'40px'}}>Descripcion de servicio</h3>
      <p style={{fontStyle:'italic',textAlign:'center'}}>{description}</p>
      <img src={img} style={{width:'200px',height:'200px', borderRadius:'100%'}} alt='' />
    </div>
  )
}

export default SmallDescription