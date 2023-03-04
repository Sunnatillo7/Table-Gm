import React, { Component } from 'react'

export default class Second extends Component {
  render() {
    const url = window.location.href.split("/")
    const {users } = this.props
    return (
      <div>
        {
         users.filter(item => item.id === url[4] -0).map((item, index) =>{
            return <ul className='text-center' key={index}>
                <li>{item.id + 1}</li>
                <li>{item.name}</li>
                <li>{item.color}</li>
                <li>{item.price}</li>
                <li>{item.position}</li>
                <li>{item.year}</li>
            </ul>
         })
          
        }
      </div>
    )
  }
}
