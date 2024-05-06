import React from 'react'
import picture from '../assets/awardbooks.png'

const Dashboard = () => {
    return (
        <div className="py-10 md:ml-40 flex flex-col items-center justify-center">
            <div><h2 className='text-6xl text-blue-600'> Dashboard</h2></div>
            <div><img src={picture} alt='' className='mx-auto' /></div>
        </div>
    )
}

export default Dashboard