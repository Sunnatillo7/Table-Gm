import React, { Component } from 'react'
import {Route, Routes} from "react-router-dom"
import First from "./components/First"
import Second from "./components/Second"
import "./Assets/main.css"

export default class App extends Component {

  state ={
    users :[
      {id:0, name:"Gentra", year:2020, color: "black", position:2, price:"15000$" },
      {id:1, name:"Cobalt", year:2022, color: "blue", position:4, price:"13000$" },
      {id:2, name:"Onix", year:2023, color: "red", position:1, price:"19000$" },
      {id:3, name:"Malibu", year:2019, color: "gray", position:3, price:"35000$" }
    ]
  }
  render() {
    const {users} = this.state
    return (
      <div>
       
        <Routes>
          <Route path='/' element={<First users={users}/>}/>
          <Route path='/second/:id' element={<Second users ={users}/>}/>
        </Routes>
      </div>
    )
  }
}
