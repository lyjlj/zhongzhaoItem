import HYRequest from './request'

const hyRequest = new HYRequest({
    interceptors: {
      requestInterceptor: (config) => {
        // 携带token的拦截
        
        return config
      },
      requestInterceptorCatch: (err) => {
        return err
      },
      responseInterceptor: (res) => {
        return res
      },
      
      responseInterceptorCatch: (err) => {
        return err
      }
    }
  })
  
  export default hyRequest