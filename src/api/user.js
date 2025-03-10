import axios from '@/libs/api.request'

export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export const logout = (token) => {
  return axios.request({
    url: '/user/logout',
    method: 'post'
  })
}
