// function App() {
//     const a = 1
//     const b = 2 
//     const c = [{id:1 ,text:'abc'},{id:2 ,text:'abc'},{id:3 ,text:'abc'}]
//     const loading = false
//     const showComment = true
//     const commentBlock = (
//         <div className="Comment">
//         <ul>
//           {c.map((maps, index) => (
//               <li key={maps.id}>{maps.text}</li>
//               ))}
//          </ul>
//       </div>)
//     if(loading) {return (<h1>loading...</h1>)}
//   return (
//   <div>
//       <h1>this is import {a} {b}</h1>
//       {showComment ? (commentBlock):(<h1>no</h1>)}
      
//       <h1>this is import {a} {b}</h1>
//     </div>
//   )
// }
import { useState } from "react"
import FeebackItem from "./components/FeebackItem"
import FeebackList from "./components/FeebackList"
import Header from './components/Header'
import FeedbackData from './data/FeebackData'

function App() {
    const [data, setData] = useState(FeedbackData)
    const abc = [123]
    console.log(data)
    return (
        <>
        <div className="container">
            <h1>This is my app js</h1>
         <Header />
         <FeebackList data={data}/>
        </div>
        
        </>
    )
}

export default App