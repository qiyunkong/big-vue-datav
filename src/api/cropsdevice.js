import axios from './http'


function cropsdeviceList(params){
  return axios.get('/cropsdevice/',{
    params,
  })
}

function cropsdeviceId(){
  
}

export default{
  cropsdeviceList,
  cropsdeviceId
}