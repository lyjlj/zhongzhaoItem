

export default (prop)=>{
    const {title, subTitle, children,backgroundColor="white",contentWidth=1000} = prop;
    return (
        <div style={{width:"100%",backgroundColor:backgroundColor,display:"flex",justifyContent:"center"}}>
            <div style={{width:contentWidth,paddingTop:42,paddingBottom:42}}>
                
                    <div>
                        <span style={{fontSize:22,color:"#CEA766",fontWeight:"Medium",fontFamily:"SourceHanSansCN-Medium",lineHeight:"30px"}}>{title}</span>
                        <br/>
                        <span style={{fontSize:16,color:"#CEA766",fontWeight:"ExtraLight",fontFamily:"SourceHanSansCN-ExtraLight",lineHeight:"23px"}}>{subTitle}</span>
                    </div>
                    <div style={{paddingTop:18}}>
                        {children}
                    </div>
            </div>
        </div>
    )
}