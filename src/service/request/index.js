import axios from 'axios'

class HYRequest{
  instance
  interceptors

  constructor(config){
    this.instance=axios.create(config)
    this.interceptors = config.interceptors

    //使用拦截器
    this.instance.interceptors.request.use(
        this.interceptors?.requestInterceptor,
        this.interceptors?.requestInterceptorCatch
        )
    this.instance.interceptors.response.use(
    this.interceptors?.responseInterceptor,
    this.interceptors?.responseInterceptorCatch
    )

    //添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
        (config)=>{
            return config
        },
        (err) => {
            return err
        }
    )
    this.instance.interceptors.response.use(
        (res) => {
            console.log(res)
            return res.data
        },
        (err) => {
            return err
        }
    )
  }
  request (config){
    return new Promise((resolve,reject) => {
        if (config.interceptors?.requestInterceptor) {
            config = config.interceptors.requestInterceptor(config)
        }

        this.instance.request(config).then((res) => {
            if (config.interceptors?.responseInterceptor) {
                res = config.interceptors.responseInterceptor(res)
            }
            resolve(res)
        }).catch((err) => {
            reject (err)
            return err
        })
    })
  }
  get (config){
    return this.request({...config,method:'GET'})
  }
  
}
export default HYRequest