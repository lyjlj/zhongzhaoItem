import React, { useEffect,useState } from "react"
import Wrapper from "./wrapper"
import { requestDevelopment } from "../service/page"



export default ()=>{
    const [developmentImg,setDevelopment] = useState('')
    useEffect(()=>{
        requestDevelopment().then(res => {
            const development = JSON.parse(res.data[0].detaildatajson).developmentImg[0].url
            setDevelopment(development)
        })

    },[])
    return <Wrapper
        banner={developmentImg}
        bannerStyle={{width:"100%",height:"auto"}}
    >

    </Wrapper>
}