import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 509b1a884bb6d61cf7bf1c964e595b66ae51f1d63fdb7723a7c9194f9fb780b8'
  }
})
