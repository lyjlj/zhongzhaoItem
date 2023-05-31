import hyRequest from '../index'
//js中没有枚举事件enum
var pageAPI = {
    ActivtyMessage:"https://spapi.zhuanyegou.com/api/values?action=BusinessDetails_GetList&businessid=8",
    companyProfile:"https://spapi.zhuanyegou.com/api/values?action=BusinessDetails_Select&businessdetailid=172",
    development:"https://spapi.zhuanyegou.com/api/values?action=BusinessDetails_Select&businessdetailid=173",
    fundsumbrella:'https://spapi.zhuanyegou.com/api/values?action=BusinessDetails_Select&businessdetailid=174',
    investment:'https://spapi.zhuanyegou.com/api/values?action=BusinessDetails_Select&businessdetailid=175',
    honor:"https://spapi.zhuanyegou.com/api/values?action=BusinessDetails_Select&businessdetailid=176"
}
//获取动态信息
export function requestActivty(){
    return hyRequest.get({
        url:pageAPI.ActivtyMessage
    })
}
//获取企业简介信息
export function requestProfile(){
    return hyRequest.post({
        url:pageAPI.companyProfile
    })
}
//发展历程
export function requestDevelopment(){
    return hyRequest.post({
        url:pageAPI.development
    })
}
//旗下基金
export function requestFunds(){
    return hyRequest.post({
        url:pageAPI.fundsumbrella
    })
}
//投资业绩
export function requestInvestment(){
    return hyRequest.post({
        url:pageAPI.investment
    })
}
//资质荣誉
export function requestHonor(){
    return hyRequest.post({
        url:pageAPI.honor
    })
}