import React from "react"

class React_Component extends React.Component {
  constructor(){
    super()
    this.state = {
      text: "Hello World"
    }
  }
  render(){
    return (
      {/*HTML to Javascript*/}
      <h1>{this.state.text}</h1>
      
      {/*Conditional Rendering*/}
      {this.state.Render ? <img src="https://www.liveabout.com/thmb/3O_xRfYpaPHX76-Z6AnMcorPVmI=/1050x700/filters:no_upscale():max_bytes(150000):strip_icc()/belikebill2a-56a563313df78cf772880ac7-5b12bc00a9d4f900380dd662.PNG" style={{width: "500px", height: "200px"}} alt="" : <h1>Hello World</h1>}
      
      {/*Handling Events*/}
      <button onClick={() => {
        console.log("clicked button")
      }}>
      Click
      </button>
    )
  }
}

export default React_Component
