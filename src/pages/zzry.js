import Card from "./card"
import Wrapper from "./wrapper"
import { requestHonor } from "../service/page"
import { useEffect,useState } from "react"



export default ()=>{
    const [honor,setHonor] = useState(undefined)
    useEffect(()=>{
        requestHonor().then(res => {
            const honor = JSON.parse(res.data[0].detaildatajson)
            setHonor(honor)
        })
    },[])
    if(!honor){
        return <div>loading</div>
    }
    return (
        <Wrapper banner={honor.fundsheaderImg[0].url}>
            <Card title="资质荣誉" subTitle="Investment performance" backgroundColor="#F3F7FD">
                <div style={{display:"flex",flexWrap: "wrap"}}>
                    {
                        honor.leaftImg.map((im,ix) => {
                          return <img src={im.url} style={{width:"50%"}} key={ix} />
                            
                        })
                    }
                </div>
                {/* <img src={honor.rightImg[0].url} style={{width:"50%"}}/> */}
                {/* <img src={require("../resource/投资业绩_06.jpg")} style={{width:"100%",marginTop:50}}/> */}
            </Card>
        </Wrapper>
    )
}
