import Card from "./card"
import Wrapper from "./wrapper"
import { requestInvestment } from "../service/page"
import { useEffect,useState } from "react"



export default ()=>{
    const [investment,setInvestment] = useState(undefined)
    useEffect(()=>{
        requestInvestment().then(res => {
            console.log("div的值",res.data[0].detaildatajson)
            const investment = JSON.parse(res.data[0].detaildatajson)
            setInvestment(investment)
        })
    },[])
    if(!investment){
        return <div>loading</div>
    }
    return (
        <Wrapper banner={investment.fundsheaderImg[0].url}>
            <Card title="投资业绩" subTitle="Investment performance" backgroundColor="#F3F7FD">
                <div>
                    {
                        investment.developmentImg.map((im,ix)=>{
                            return <img src={im.imgURL} style={{width:"100%"}} key={ix}/>
                            
                        })
                    }
                </div>
                {/* <img src={require("../resource/投资业绩_03.jpg")} style={{width:"100%"}}/>
                
                <img src={require("../resource/投资业绩_06.jpg")} style={{width:"100%",marginTop:50}}/> */}
            </Card>
        </Wrapper>
    )
}