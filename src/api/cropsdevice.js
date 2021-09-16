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




export default{
  cropsdeviceList,
  cropsdevicePie
}