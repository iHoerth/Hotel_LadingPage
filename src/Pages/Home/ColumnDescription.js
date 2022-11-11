import React from 'react'

const ColumnDescription = ({img,description}) => {
  return (
    <div className='homeColumnSections' style={{width:'28%',height:'600px',boxShadow:'2px 2px 4px 2px rgba(40, 40, 40, 0.5)'}}>
      <img src={img} style={{width:'200px',height:'200px', borderRadius:'100%',}} alt=''/>
      <p style={{fontSize:'22px'}}>{description}</p>
    </div>
  )
}

export default ColumnDescription