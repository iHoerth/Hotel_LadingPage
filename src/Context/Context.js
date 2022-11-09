import useLocalStorage from '../Services/useLocalStorage';
import { createContext } from 'react';

const ContextProvider = ({children}) => {
  const [reservation, setReservation] = useLocalStorage('reservation',[]);
  const [user,setUser] = useLocalStorage('user',{});

  const newReservation = () => {
    setReservation({})
  }

  const cancelReservation = () => {
    setReservation({})
  }

  return (
    <>
      <Context.Provider value={[reservation,setReservation,user,setUser]}>
          {children}
      </Context.Provider>
    </>
    )
  }

export const Context = createContext([])

export default ContextProvider