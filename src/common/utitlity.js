export const getdate = (timeStamp) => {
  return (new Date(timeStamp * 1000)).toDateString()
}

export const getTime = (timeStamp) => {
  return (new Date(timeStamp * 1000)).toLocaleString()
}

export const getlocaldate = (timeStamp) => {
  let newDate = new Date(timeStamp * 1000)
  return newDate.toLocaleTimeString()
}

export const getWeather = (clouds) => {
  if(clouds > 80){
    return "Cloudly"
  }
  if(clouds < 80 && clouds > 30) {
    return "Partially Cloudly"
  }
  return "Sunny"
}

export const getTemp = (temp) => {
  return (temp - 273.15).toFixed(2);
}