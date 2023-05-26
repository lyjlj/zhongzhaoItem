import hyRequest from '../index'
//js中没有枚举事件enum
var pageAPI = {
    ActivtyMessage:"https://spapi.zhuanyegou.com/api/values?action=BusinessDetails_GetList&businessid=8"
}
export function requestActivty(){
    return hyRequest.get({
        url:pageAPI.ActivtyMessage
    })
}