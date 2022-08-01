import React,{useState} from 'react'
import carlist from '../../trialObjects/carlist'
import '../../carCardComponents/card.css'
import {Link} from "react-router-dom"

function AvailableCar() {
    let [availableCar, setAvailableCar] = useState(carlist);
    let [search, setSearch] = useState('')
    // console.log(availableCar);
    let AvailableCar = availableCar.filter((ele) => ele.status !== "rented")
    let FilteredList = AvailableCar.filter((ele) => {
        if (ele.company.toLowerCase().includes(search.toLowerCase())) {
            // console.log(ele);
            return ele
        } else if (ele.rentPrice==search) {
            // console.log(ele);
            return ele
        }
    })
    return (
        <div className='card'>
            <div className="card-header">
                <div className='card-title'>Available Cars Status</div>
                <div className='card-search'>
                    <input type="text" placeholder='search modal or price'  onChange={(e)=>setSearch(e.target.value)}/>
                </div>
                <div className='card-back'>
                    <button  style={{ border: "none", outline: "none", backgroundColor: "lightpink" }}><Link to="/dashboard" style={{textDecoration:"none"}} >Go Back</Link></button>

                </div>
            </div>

            <div className='card-body'>
                {
                FilteredList.length !==0 ?FilteredList.map((ele,idx) => {
                    return (
                        <>

                            <div className='card-card' key={idx}>
                                <div className='card-card-img'>
                                    <img src={ele.url} />
                                </div>
                                <div className="card-card-title">Company :- {ele.company}</div>
                                <div className="card-card-modal">Modal :-{ele.modal}</div>
                                <div className="card-card-tag">Price:- {ele.rentPrice}Rs/Day</div>
                                <div className="card-card-rent">
                                    <div>Status :-{ele.status }</div>
                                </div>
                            </div>

                        </>
                    )
                }) :
                AvailableCar.map((ele,idx) => {
                    return (
                        <>

                            <div className='card-card' key={idx}>
                                <div className='card-card-img'>
                                    <img src={ele.url} />
                                </div>
                                <div className="card-card-title">Company :- {ele.company}</div>
                                <div className="card-card-modal">Modal :-{ele.modal}</div>
                                <div className="card-card-tag">Price:- {ele.rentPrice}Rs/Day</div>
                                <div className="card-card-rent">
                                    <div>Status :-{ele.status }</div>
                                </div>
                            </div>

                        </>
                    )
                })
                }
            </div>
        </div>
    )
}

export default AvailableCar