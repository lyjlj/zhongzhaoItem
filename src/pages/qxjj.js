import Card from "./card"
import Wrapper from "./wrapper"



export default ()=>{
    return (
        <Wrapper banner={require("../resource/企业简介_02.jpg")}>
            <Card title="旗下基金" subTitle="FUND" backgroundColor="#F3F7FD">
                <img src={require("../resource/旗下基金_03.jpg")} style={{width:"100%"}}/>
            </Card>
        </Wrapper>
    )
}