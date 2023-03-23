import React from "react"
import Card from "./card"
import Wrapper from "./wrapper"

const TextStyle = {
    lineHeight:"34px",
    color:"#8E8E8E"
}

export default ()=>{
    return (
        <Wrapper
            banner={require("../resource/企业简介_02.jpg")}
        >
            <Card title={"企业简介"} subTitle="Company Profile" backgroundColor="#F3F7FD">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{width:"50%",...TextStyle}}>
                    深圳市前海中钊资本管理有限公司（简称“中钊资本”）是由甘露集团主导发起设立，专注于股权投资、创业投资及基金管理业务的专业机构，管理规模近20亿；是中国最大商业母基金前海股权投资基金、罗湖红土基金、广州红土天科基金的出资人，是淮泽中钊天使基金的管理人之一，并与多家深圳本土创投机构紧密合作。

中钊资本管理的基金专注投资战略性新兴产业和未来产业，关注有巨大市场空间的种子期企业、新兴成长型企业和有持续增长能力Pre-IPO企业。

中钊资本的团队由国内最早一批从事创投的专业人士组成，核心团队来源于境内外知名投资银行，长期深耕中国资本市场，在专业领域有多年的积累与成功经验；愿景是成为价值投资的整合者，整合管理人、投资方、被投资方及各合作方资源，推动增量创新，提升市场价值，实现多方共赢。
                    </div>
                    <div style={{width:"48%"}}>
                        <img style={{width:"100%",height:"100%"}} src={require("../resource/企业简介_03.jpg")}/>
                    </div>
                </div>
            </Card>

            <Card title="投资理念" subTitle="Investment conce" >
                <div style={TextStyle}>
                中钊资本的愿景是成为价值投资的整合者，整合管理人、投资方、被投资方及其他合作方资源，推动增量创新，提升市场价值，实现多方共赢！中钊将与您携手并进，开拓进取，互惠共赢，为您的财富领航！
                </div>
            </Card>

            <Card title="投资策略" subTitle="investment strategy">
                <img src={require("../resource/企业简介_07.jpg")} style={{width:"100%"}}/>
            </Card>

            <Card title="投资优势" subTitle="Investment advantages" backgroundColor="#F3F7FD"> 
                <img src={require("../resource/企业简介03-23.jpg")} style={{width:"100%"}}/>
                <img src={require("../resource/企业简介_12.jpg")} style={{width:"100%",marginTop:50}}/>
            </Card>
            
        </Wrapper>
    )
}