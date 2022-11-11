export const validateReservation = (startDate,endDate) => {
  if(startDate.getMonth() > endDate.getMonth()){
    alert('El mes de salida no puede estar antes que el de entrada juas noob')
    return false;
  }
  if(startDate.getDate() >= endDate.getDate() && startDate.getMonth() >= endDate.getMonth()){
    alert('El dia de salida no puede estar antes que el de entrada juas noob')
    return false;
  }
  return true;
}