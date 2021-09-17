import axios from './http'


function cropsdeviceList(params){
  return axios.get('/cropsdevice/',{
    params,
  })
}

function cropsdevicePie(params){
  return axios.get('/echart/num',{
    params,
  })
}

function cropsdeviceTime(params){
  return axios.get('/data/time',{
    params,
  })
}







export default{
  cropsdeviceList,
  cropsdevicePie,
  cropsdeviceTime
}