import FeebackItem from "./FeebackItem"
function FeebackList(props) {
    console.log('feebacklist prop ',props)
    const data = props.data
    console.log('feeback data', data)
    return (
        <div>
           {data.map((item) => (
               <FeebackItem key={item.id} item={item} />
               ))}
        </div>
    )
}

export default FeebackList
