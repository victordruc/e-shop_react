const Money = ({price:{amount, value},type="std", children}) => {
    return (
        <>
            {
            type==="std"?
            <>
                <span>{children}</span>
                <span>{amount} {value}</span>
            </>:
            type==="old"?
            <>
                <span>{children}</span>
                <s>{amount} {value}</s>
            </>:
            <>
                <span>{children}</span>
                <span style={{color:"red",fontWeight:"bold"}}>{amount} {value}</span>
            </>
            }
        </>
    )
}

export default Money