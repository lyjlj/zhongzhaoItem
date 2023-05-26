import React from "react";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";


export const CONTENT_WIDTH = 1000 ;

export default (prop)=>{
    const {banner,children,bannerStyle} = prop;
    
    return (
        <div>
            {/* 头部 */}
            {/* <div style={{width: "100%",display:"flex",justifyContent:"center", position: "fixed",top: 0,background: "#fff"}}> */}
            <div style={{width: "100%",display:"flex",justifyContent:"center", position: "fixed",top: 0,background: "#fff"}}>
            <div style={{width:CONTENT_WIDTH,paddingTop:22,paddingBottom:22,display:"flex",justifyContent:"space-between",alignItems:"center"}} onClick={()=>{window.location.href="/"}}>
                <img style={{width:200,height:50,}} src={require("../resource/logo.png")}/>
                <div onClick={()=>{window.location.href="/"}} style={{}}>
                    <img src={require("../resource/backBtn.png")} style={{width:50,bottom:170,right:30,position:"fixed"}}/>
                </div>
                {/* <Link to={"/"} >返回</Link> */}
            </div>
            </div>
            {/* 轮播 */}
            <div style={{width:"100vw",height:"20vw",paddingTop:100,...bannerStyle}}>
                <img src={banner} style={{height:"100%",width:"100%"}}/>
            </div>
            {/* 内容 */}
            {children}
        </div>
    )
}