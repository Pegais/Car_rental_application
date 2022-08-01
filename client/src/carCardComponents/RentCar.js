import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import rentCarContext from '../context/RentCarContext'
import './rentcar.css'
import statusContext from '../context/statusContext'

function RentCar() {
  let { addcar, setRentPrice } = useContext(rentCarContext)
  let {setOngoingStatus} = useContext(statusContext)
  console.log(addcar);
  let [duration, setDuration] = useState(0)
  

  const pay = (ele, time) => {
    console.log(ele.rentPrice * time);
    setRentPrice(ele.rentPrice * time)
    setOngoingStatus([{...ele}])
  }
  return (
    <div className='rentcar-page'>
      <h2>Thank you for your Interest in these car :--------</h2><br />
      <h4>PLEASE PROCEED WITH FURTHER STEP TO RENT THIS CAR</h4>
      {
        addcar.length !== 0 ?
          addcar.map((ele,idx) => {
            return (
              <>
                <div className='rentcar-form' key={idx}>
                  <div className='carImage'>
                    <img src={ele.url} />
                  </div>
                  <div className='data-form'>
                    <div>Company Name :-----{ele.company}</div>
                    <div>Modal name :----{ele.modal}</div>
                    <div>Rate of rent/day:---{ele.rentPrice} <span>Rs.</span></div>
                    <div><input type="number" placeholder='enter duration in days' onChange={(e) => setDuration(e.target.value)} value={duration} /></div>
                    <div>Toal amount to be charged :--{`${ele.rentPrice*duration}`} </div>
                    <div><button onClick={()=>pay(ele,duration)}><Link to="/userDashboard" style={{textDecoration:"none"}}>Click to Pay</Link></button></div>

                  </div>
                </div>
              </>
            )
          }) :
          <div>No Car being rented now!!!!</div>
     }
    </div>
  )
}

export default RentCar