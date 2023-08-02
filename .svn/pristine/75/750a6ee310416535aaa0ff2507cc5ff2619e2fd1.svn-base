import React, { useEffect,useState } from "react"
import Card from "./card"
import Wrapper from "./wrapper"
import { requestProfile } from "../service/page"

const TextStyle = {
    lineHeight:"34px",
    color:"#8E8E8E"
}

export default ()=>{
    const [profileData,setProfileData] = useState(undefined)
    const [bannerImg,setBannerImg] = useState('')
    const [profileText,setProfileText] = useState('')
    const [profileImg,setProfileImg] = useState('')
    const [investInfo,setInvestInfo] = useState('')
    const [investImg,setInvestImg] = useState([])
    const [investAdvangeImg,setInvestAdvangeImg] = useState([])

    useEffect(()=> {
        requestProfile().then(res => {
            const profileData = JSON.parse(res.data[0].detaildatajson)
            console.log(profileData)
            setProfileData(profileData)
            const bannerImg =profileData["headerImg"][0].url
            setBannerImg(bannerImg)
            const profileText = profileData.profileInfo
            setProfileText(profileText)
            const profileImg =profileData['profileImg'][0].url
            setProfileImg(profileImg)
            const investInfo = profileData.investmentInfo
            setInvestInfo(investInfo)
            const investImg = profileData["investImg"]
            setInvestImg(investImg)
            const investAdvangeImg = profileData.investAdvangeImg
            setInvestAdvangeImg(investAdvangeImg)


        })
    },[])
    if(!profileData){
        return <div>loading...</div>
    }
    return (
        <Wrapper
            banner={profileData["headerImg"][0].url}
        >
            <Card title={"企业简介"} subTitle="Company Profile" backgroundColor="#F3F7FD">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{width:"50%",...TextStyle}}>
                        {profileText}
                    </div>
                    <div style={{width:"48%"}}>
                        <img style={{width:"100%",height:"100%"}} src={profileImg}/>
                    </div>
                </div>
            </Card>

            <Card title="投资理念" subTitle="Investment conce" >
                <div style={TextStyle}>
                    {investInfo}
                {/* 中钊资本的愿景是成为价值投资的整合者，整合管理人、投资方、被投资方及其他合作方资源，推动增量创新，提升市场价值，实现多方共赢！中钊将与您携手并进，开拓进取，互惠共赢，为您的财富领航！ */}
                </div>
            </Card>

            <Card title="投资策略" subTitle="investment strategy">
                <div >
                    {
                        investImg.map((item,index) => {
                            return(
                                <img src={item.url} style={{width:"100%"}}/>
                            )
                            
                        })
                    }
                </div>
            </Card>

            <Card title="投资优势" subTitle="Investment advantages" backgroundColor="#F3F7FD">
                <div>
                    {
                        investAdvangeImg.map((im,ix) => {
                            return(
                                <img src={im.url} style={{width:"100%"}} key={ix}/>

                            )
                        })
                    }
                </div> 
            </Card>
            
        </Wrapper>
    )
}