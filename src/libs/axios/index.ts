import axios, { AxiosError } from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
})
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error: AxiosError) {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  function (response) {
    return response
  },
  async (error) => {
    const { config, response } = error
    console.log(response)
    if (response.status === 401 || response.statusCode === 401) {
      try {
        const res = await axios({
          method: 'put',
          url: `${process.env.REACT_APP_BASE_URL}/teacher/auth`,
          data: {
            refresh_token: localStorage.getItem('admin-refresh-token'),
          },
        })
        const { access_token, refresh_token } = res.data

        localStorage.setItem('admin-access-token', access_token)
        localStorage.setItem('admin-refresh-token', refresh_token)
        config.headers.Authorization = `Bearer ${access_token}`

        return axios(config)
      } catch (err: any) {
        if (err.response.status === 401) {
          console.log(err.response.status)
          alert('다시 로그인해주세요.')
          window.location.href = '/login'
          localStorage.clear()
        }
      }
    }
    return Promise.reject(error)
  }
)
export default instance
