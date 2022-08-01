import React, { useState, useContext } from 'react'
import "./owner.css"
import "../../carCardComponents/card.css"
import ownerCarList from '../../trialObjects/ownerCarList'
import { Link } from "react-router-dom"
import rentCarContext from '../../context/RentCarContext'
import statusContext from '../../context/statusContext'
import axios from "axios"

function Owner() {
  let { ownerName, rentPrice } = useContext(rentCarContext);
  let { ongoingStatus } = useContext(statusContext)
  let [payment, setPayment] = useState('')
  let [list, setList] = useState(false)
  let [history, setHistory] = useState(false)
  let [paid, setPaid] = useState(0)
  function handleList() {
    setList(!list)
  }
  const handlehistory = async () => {
    let res = await axios.get("http://localhost:5000/payment")
    console.log(res.data);
    setPayment(res.data)
    setHistory(!history)
  }
  return (
    <>
      <div className='owner-header'>
        <h3>Welcome to Owner Dashboard:--{ownerName}</h3>
        <button onClick={handleList}>List My Cars</button>
        <button><Link to="/carcard" style={{ textDecoration: "none" }}>List All Cars</Link></button>
        <button onClick={handlehistory}>Payment history</button>
        <button><Link to="/" style={{ textDecoration: "none" }}>Logout</Link></button>
        {
          payment.length!==0 ? <span style={{ fontWeight: "bold" }}>Owner Wallet Balance :-{3000 + payment.paid}</span>:<span style={{ fontWeight: "bold" }}>Owner Wallet Balance :-3000</span>
       }



        {/* <span>My Wallet balance:- {0 + paid} <span>Rs.</span></span> */}
      </div>
      <div className='owner-body'>
        <div className='card-body owner'>
          {
            list && ownerCarList.map((ele, idx) => {
              return (
                <>
                  <div className='card-card' key={idx}>
                    <div className='card-card-img'>
                      <img src={ele.url} />
                    </div>
                    <div className="card-card-title">Company :- {ele.company}</div>
                    <div className="card-card-modal">Modal :-{ele.modal}</div>
                    <div className="card-card-tag">Price:- {ele.rentPrice}Rs/Day</div>
                    <div>Status :-{ele.status}</div>
                  </div>
                </>
              )
            })
          }
          {
            history && <div className='history'>
              <h3>Payment History of your Rented Car :--</h3>
              <span>Name of customer :-{payment.name}</span><br />
              <span>Price Paid :-{payment.paid}</span><br />
              {/* <span style={{ fontWeight: "bold" }}>Owner Wallet Balance :-{0 + payment.paid}</span> */}

            </div>
          }
        </div>
      </div>

    </>

  )
}

export default Owner