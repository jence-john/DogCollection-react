import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import One from "./Images/1.png"
import Two from "./Images/2.png"
import Three from "./Images/3.png"
import Four from "./Images/4.png"
import Five from "./Images/5.png"
import Six from "./Images/6.png"
import Seven from "./Images/7.png"
import Eight from "./Images/8.png"

const Root=ReactDOM.createRoot(document.getElementById("root"))

function Dogpic(props){
  return(
    // <div style={{display:"grid", gap:"20px",padding:"20px"}}>
    <div style={{textAlign:"center",padding:"15px",border:"1px solid", backgroundColor:"aliceblue"}}>
      <img src={props.img} style={{width:"100%"}} />
      <h4 style={{ marginTop: "10px", fontSize: "18px" }}>{props.name}</h4>
    </div>
    //  </div>
  )
}

var details=[
  {
    img:One,
    name:"Black Pug"
  },
  {
    img:Two,
    name:"German Shepherd"
  },
    {
    img:Three,
    name:"Siberian Husky"
  },
    {
    img:Four,
    name:"Shih Tzu"
  },

    {
    img:Five,
    name:"Lhasa"
  },
    {
    img:Six,
    name:"Dog Shihtzu"
  },
    {
    img:Seven,
    name:"Brown Husky"
  },
    {
    img:Eight,
    name:"German Pomeranian"
  },
]


Root.render(
  <div     style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      padding: "20px",
      backgroundColor:"burlywood"
    }}>
    {
      details.map (function(item)
    {
      return(
      <Dogpic img={item.img}name={item.name}></Dogpic>
      )
    })
    }
  </div>
)