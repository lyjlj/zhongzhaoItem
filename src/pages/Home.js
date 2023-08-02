import { useEffect, useRef, useState } from "react"
import styles from "./home.module.css"
import { Thumbs } from 'swiper'

import { Swiper, SwiperSlide,  } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { Pagination, Navigation, Autoplay } from 'swiper' // js 模块
import 'swiper/swiper-bundle.css' // css 模块
// Swiper.use([Pagination, Navigation, Autoplay])

import { Link } from "react-router-dom";

import React from "react";

const IMG = [
    {
        "url":require("../resource/home_cards/企业简介.png"),
        link : "introduce",
        bg : require("../resource/home_cards/企业简介bg3-24.png")
    },
    {
        "url": require("../resource/home_cards/发展历程.png"),
        "link": "development",
        "bg":require("../resource/home_cards/发展历程bg3-24.jpg"),
    },
    {
        "url": require("../resource/home_cards/旗下基金.png"),
        "link": "qxjj",
        "bg":require("../resource/home_cards/旗下基金03-21.png"),
    },
    {
        "url": require("../resource/home_cards/投资业绩3-23.jpg"),
        "link": "tzyj",
        "bg":require("../resource/home_cards/投资业绩bg3-23.png"),
        
    },
    {
        "url": require("../resource/home_cards/资质荣誉.png"),
        "link": "zzry",
        "bg":require("../resource/home_cards/资质荣誉03-21.png"),
    },
    {
        "url": require("../resource/home_cards/中钊动态.png"),
        "link": "activity",
        "bg":require("../resource/home_cards/中钊动态03-21.png"),

    }
]


export default () => {
    const [bgImg, setBgImg] = useState("https://file.moyublog.com/d/file/2020-12-03/54ac04c4f25a5ede6af4a89a14571b00.jpg");
    const [currentIndex, setCurrentIndex] = useState(1);
    const [ai, setAi] = useState(1);
    const indexWidth = 100 / IMG.length
    const [thumbsSwiper,setThumbsSwiper] =  useState(null);
    const swiper = useRef()

    document.title="中钊资本"

    useEffect(()=>{
        setInterval(() => {
            if(swiper.current){
                swiper.current.slideNext();
            }
        }, 5000);
    },[])
    
    
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            overflow: "hidden"
        }}>
            <img src={bgImg} style={{position : "absolute",width:"100%",left:0,height:"100%"}}/>
            {/* 了解更多 */}
            <div style={{ height: "50%" }}>
            {/* <img src={require("../resource/logo_white.png")} style={{width:150,top:50,position:"absolute",left : 50}}/> */}
                {/* <img src={require("../resource/development.png")} style={{width:400,position:"absolute",left : 50}}/>
                <img src={require("../resource/text.png")} style={{width:400,bottom:250,position:"absolute",left : 50}}/> */}
                <div style={{position:"absolute",left:50,bottom:100, textAlign: "center"}}>
                    <Link to={IMG[currentIndex-1].link}>
                    <img src={require("../resource/组 6.png")} style={{width:50,height:50}} />
                    </Link>
                </div>
                <Link to={IMG[currentIndex-1].link}>
                <div style={{ width: 200, height: 50,position:"absolute",left:130,bottom:100, textAlign: "center", lineHeight: "50px", borderRadius: 25, border: "1px solid white", color: "white" }}>
                    了解更多
                </div>
                </Link>
            </div>
            {/* 轮播图 */}
            <div style={{ width: "848px", height: "450px", position: "relative",touchAction:"pan-y" }}>
                <div style={{ display: "flex", height: "70%" }} className={styles.imgContainer}>
                    {/* {
                    IMG.map(item => {
                        return (
                            <img draggable={false} style={{ boxShadow: "0px 0px 10px red", width: "28%", height: "100%", backgroundColor: "red", borderRadius: 20, marginRight: 20 }} src={item.url} onClick={() => { window.location.href = item.link }} />
                        )
                    })
                } */}
                    <Swiper
                        style={{touchAction:"pan-x"}}
                        id="filmswiper"
                        spaceBetween={20}
                        slidesPerView={3.5}
                        loop
                        modules={[Thumbs]} 
                        thumbs={{ swiper: thumbsSwiper }}
                        loopedSlides={IMG.length}
                        onSwiper={(s)=>{
                            console.log("log from on swiper")
                            swiper.current = s;
                        }}

                        autoplay={true}
                        onSlideChange={(v) => {
                            const newIndex = (v?.activeIndex % IMG.length);
                            setCurrentIndex(newIndex+1);
                            if(IMG[newIndex].bg){
                                setBgImg(IMG[newIndex].bg)
                            }
                            
                        }}
                    >
                        {
                            IMG.map((item,index) => {
                                return <SwiperSlide key={index}  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img  style={{objectFit:"cover",  borderRadius: 20, width: "100%", height: "100%", }} src={item.url} onClick={() => { window.location.href = item.link }} />
                                    </SwiperSlide>
                                // return <img  style={{objectFit:"cover",  borderRadius: 20, width: "100%", height: "100%", }} src={item.url} onClick={() => { window.location.href = item.link }} />
                            })
                        }
                        {/* <SwiperSlide><img src={IMG[0].url} onClick={()=>{window.location.href=IMG[0].link}}/></SwiperSlide> */}
                    </Swiper>
                </div>
                <div style={{ display: "flex", color: "white", marginTop: 30, alignItems: "center" }}>
                    <div style={{ display: "flex", width: 120, justifyContent: "space-between" }}>
                        {/* 左边 */}
                        <div onClick={() => {
                            // debugger
                            swiper.current.slidePrev();
                        }} style={{ width: 50, height: 50, borderRadius: 50, border: "1px solid white", textAlign: "center", lineHeight: "50px" }}>
                            <img src={require("../resource/组 8.png")} style={{width:"100%",height:"100%"}}/>
                        </div>
                        {/* 右边 */}
                        <div onClick={() => {
                            console.log(swiper)
                            swiper.current.slideNext()
                        }} style={{ width: 50, height: 50, borderRadius: 50, border: "1px solid white", textAlign: "center", lineHeight: "50px" }}>
                            <img src={require("../resource/组 9.png")} style={{width:"100%",height:"100%"}}/>
                        </div>
                    </div>
                    <div style={{ width: 100 }}></div>
                    {/* 指示条 */}
                    <div style={{ display: "flex", flex: 1, }}>
                        <div style={{ width: "90%", height: 2, backgroundColor: "white", position: "relative" }}>
                            <div style={{
                                position: "absolute",
                                left: `${(currentIndex-1) * indexWidth}%`,
                                width: `${indexWidth}%`,
                                height: "100%",
                                top: 0,
                                backgroundColor: "#cc9c61"
                            }}>

                            </div>
                        </div>
                    </div>
                    {/* 序号 */}
                    <div style={{ width: 100, fontSize: 50, fontWeight: "bold" }}>
                        0{currentIndex}
                    </div>
                </div>
            </div>

        </div>
    )
}