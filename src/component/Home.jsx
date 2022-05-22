import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0 text-white otto">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-1 fw-bold otto">Enjoy Online Shopping With eStore</p>                        
                    </div>

                </div>
            </div>
            <Products/>
        </div>
    )
}
