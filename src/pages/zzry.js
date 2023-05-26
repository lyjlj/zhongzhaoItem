import Card from "./card"
import Wrapper from "./wrapper"



export default ()=>{
    return (
        <Wrapper banner={require("../resource/资质荣誉二级页面.png")}>
            <Card title="资质荣誉" subTitle="Investment performance" backgroundColor="#F3F7FD">
                <img src={require("../resource/资质荣誉左3-29.png")} style={{width:"50%"}}/>
                <img src={require("../resource/资质荣誉右3-29.png")} style={{width:"50%"}}/>
                {/* <img src={require("../resource/投资业绩_06.jpg")} style={{width:"100%",marginTop:50}}/> */}
            </Card>
        </Wrapper>
    )
}
