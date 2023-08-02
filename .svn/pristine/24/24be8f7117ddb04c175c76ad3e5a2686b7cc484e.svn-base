import Card from "./card"
import Wrapper from "./wrapper"
import { requestFunds } from "../service/page"
import { useEffect,useState } from "react"



export default ()=>{
    const [fundsData,setFundsData] = useState()
    useEffect(()=> {
        requestFunds().then(res => {
            const fundsData =  JSON.parse(res.data[0].detaildatajson)
            setFundsData(fundsData)
            console.log(res.data)

        })
    },[])
    if(!fundsData){
        return <div>loading</div>
    }
    return (
        <Wrapper banner={fundsData.fundsheaderImg[0].url}>
            <Card title="旗下基金" subTitle="FUND" backgroundColor="#F3F7FD">
                <div>
                {
                        fundsData.fundContentImg.map((im,ix)=> {
                            return <img src={im.url} style={{width:"100%"}} key={ix}/>
                        })
                    }
                </div>
                
            </Card>
        </Wrapper>
    )

}