const Attribute = ({att:{name,value}}) => {
    return (
        <>
            <span>{name}: </span>
            <span>{value}</span>
        </>
    )
}

export default Attribute