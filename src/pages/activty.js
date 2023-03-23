import Card from "./card"
import Wrapper from "./wrapper"


const DATA = [
    {
        img:require("../resource/dongtai/中钊动态_03.png"),
        title :"乔迁之禧，焕新启航 | 中钊资本举行办公室乔迁开业典礼",
        desc : "2022年12月17日，中钊资本办公室正式乔迁开业，入驻罗湖区中冠商务大厦，举办开业典礼暨揭牌仪式。集团及公司相关高管出席，一同见证新办公室揭牌仪式...",
        date : "2022.12.17",
        linkMore : "https://mp.weixin.qq.com/s/gBg3R_caP8TBys8ihLEriQ"
    },
    {
        img:require("../resource/dongtai/中钊动态_06.png"),
        title :"中钊和檀基金完成备案",
        desc : "中钊和檀（基金编号:SXB599）是深圳市前海中钊资本管理有限公司旗下独立管理基金。该基金于2022-07-21成立，于2022-09-29在中国证券投资基金业协会成功备案...",
        date : "2022.10.11",
        linkMore : "https://mp.weixin.qq.com/s/4mE0BYoY_p1yGrhHdzW_mw"
    },
    {
        img:require("../resource/dongtai/中钊动态_08.png"),
        title :"中钊资本参与投资显示芯片设计领先企业",
        desc : "  四月，国内大尺寸液晶面板驱动芯片设计领先企业——深圳通锐微电子技术有限公司，完成超亿元融资。本轮融资由中电信基金、湖州芮智、联通中金...",
        date : "2021.07.22",
        linkMore : "https://mp.weixin.qq.com/s/5SwVjDUwB2xT4bqBdsDQyg"
    },
    {
        img:require("../resource/dongtai/中钊动态_10.png"),
        title :"来画发布大众版数字人智能创作平台，开启「数字人自由」时代",
        desc : "自2021年元宇宙“爆炸”后，资本和巨头的狂热追逐，将我们带向一个崭新的虚拟平行世界。据彭博行业研究预计，元宇宙市场规模将在2024年达到8000亿美元...",
        date : "2022.08.10",
        linkMore : "https://mp.weixin.qq.com/s/lpa-mAI8zYQ_lDYNrtfoiA"
    }

]

export default ()=>{
    return (
        <Wrapper banner={require("../resource/zzdt.png")}>
            <Card title="中钊动态" subTitle="NEWS" backgroundColor="#F3F7FD">
                <div style={{width:"100%"}}>
                    {
                        DATA.map(i=>{
                            return (
                                <div style={{display:"flex",padding:10,backgroundColor:"white",marginBottom:20}} onClick={()=>window.open(i.linkMore)}>
                                    <img style={{width:250,height:150}} src={i.img}/>
                                    <div style={{display:"flex",flex:1,flexDirection:"column",marginLeft:20,paddingTop:10}}>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            {/* 标题 */}
                                            <div style={{lineHeight:"23px",fontSize:18}}>{i.title}</div>
                                            {/* 时间 */}
                                            <div style={{color:"#B8B8B8",fontSize:13}}>{i.date}</div>
                                        </div>
                                        {/* 描述 */}
                                        <div style={{wordSpacing:10,marginTop:10,color:"#8E8E8E",lineHeight:"22px",whiteSpace:"10",fontSize:"15px"}}>
                                            {i.desc}
                                        </div>
                                        {/* 查看更丢哦 */}
                                        <div style={{marginTop:20}}>
                                            <span style={{border:"1px solid #D2D2D2", borderRadius:"5px",color:"#D2D2D2",padding:"3px 8px 3px 8px",fontSize:14}}>查看更多{" >"}</span>
                                        </div>
                                        
                                    </div> 
                                </div>
                            )
                        })
                    }
                </div>
            </Card>
        </Wrapper>
    )
}