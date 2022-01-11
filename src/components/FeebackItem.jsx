import { useState } from "react"
function FeebackItem(props) {
    console.log('feebackitem props', props)
    return (
        <div className="card">
            <div className="num-display">{props.item.rating}</div>
            <div className="text-display">{props.item.text}</div>
            <button className="btn">hi</button>
        </div>
    )
}
// {/* <button className="btn" onClick= {()=>{return setAbc((prev)=>{return prev+1}) }}
//     const [abc,setAbc] = useState(5) */}
    // onClick= {()=>{return setAbc((prev)=>{return prev+1})
export default FeebackItem
