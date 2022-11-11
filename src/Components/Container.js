
const Container = ({children,direction = 'row',width = '100%',background = '#e7e2d5',style}) => {

  const customStyle = {
    display:'flex',
    flexDirection: direction,
    width: width,
    flex:'wrap',
    // flex: '1',
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor: background,
    marginLeft:'0%',
    // border:'2px blue solid',
  }

  return (
      <div style={{...customStyle,...style,}}>
        {children}
      </div>
  )
}

export default Container