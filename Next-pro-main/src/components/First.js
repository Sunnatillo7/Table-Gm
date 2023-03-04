import React, { Component } from 'react'
import Eye from "../Assets/Images/eye.svg"
import {Link} from "react-router-dom"

export default class First extends Component {
    render() {
        const { users } = this.props
        return (
            <div className='mt-16'>
               
                <table className='min-w-full text-center text-sm font-light'>
                    <thead className='border-b font-medium dark:border-neutral-500'>
                        <tr>
                            <th className='px-6 py-4'>T/R</th>
                            <th className='px-6 py-4'>Name</th>
                            <th className='px-6 py-4'>Year</th>
                            <th className='px-6 py-4'>Color</th>
                            <th className='px-6 py-4'>Position</th>
                            <th className='px-6 py-4'>Price</th>
                            <th className='px-6 py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((item, index) => {
                                return <tr className='border-b dark:border-neutral-500' key={index}>
                                    <td className='whitespace-nowrap px-6 py-4' >{item.id + 1}</td>
                                    <td className='whitespace-nowrap px-6 py-4' >{item.name}</td>
                                    <td className='whitespace-nowrap px-6 py-4' >{item.year}</td>
                                    <td className='whitespace-nowrap px-6 py-4' >{item.color}</td>
                                    <td className='whitespace-nowrap px-6 py-4' >{item.position}</td>
                                    <td className='whitespace-nowrap px-6 py-4' >{item.price}</td>
                                    <td className='whitespace-nowrap px-6 py-4' >
                                       <Link to={`/second/${item.id}`}> <img src={Eye} alt="img" /></Link>
                                    </td>
                                </tr>


                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
