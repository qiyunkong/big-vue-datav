import axios from './http'


function cropsdataList(params){
  return axios.get('/data/',{
    params,
  })
}


export default{
  cropsdataList,
}