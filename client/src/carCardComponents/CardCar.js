import React,{useEffect,useState,useContext} from 'react'
import './card.css'
import { Link ,useNavigate} from "react-router-dom"
import carlist from '../trialObjects/carlist'
import rentCarContext from '../context/RentCarContext'
import statusContext from '../context/statusContext';
import axios from "axios"

function CardCar() {
    let { setAddCar,carData,setCarData} = useContext(rentCarContext)
    let navigate = useNavigate();
    let { isOwner,isUser,isAdmin } = useContext(statusContext);
    let [search, setSearch] = useState('')
    let [carList, setCarList] = useState(carlist)
    let FilteredList = carList.filter((ele) => {
        if (ele.company.toLowerCase().includes(search.toLowerCase())) {
            // console.log(ele);
            return ele
        } else if (ele.rentPrice==search) {
            // console.log(ele);
            return ele
        }
    })
    useEffect(() => {
     
    },[])
    console.log(carlist);
    function handleClick(ele) {
        // console.log(ele);
        setAddCar([{...ele}])
        // store in state and use in rent component
    }
    function handler() {
        if (isAdmin) {
            navigate("/dashboard")
        } else if (isOwner) {
            navigate('/owner')
        } else if (isUser) {
            navigate('/userDashboard')
        } else {
            alert('you are logged out');
            navigate("/")
        }
    }
    return (
        <div className='card'>
            <div className="card-header">
                <div className='card-title'>Welcome to Car Portfolio</div>
                <div className='card-search'>
                    <input type="text" placeholder='search modal or price' onChange={(e)=>setSearch(e.target.value)} value={search} />
                </div>
                <div className='card-back'>
                   <button onClick={handler} style={{border:"none",outline:"none",backgroundColor:"lightpink"}}>Go Back</button>
                    
                </div>
            </div>
            <div className='card-body'>
                {
                    FilteredList.length !== 0 ? FilteredList.map((ele, idx) => {
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
                                    <button onClick={()=>handleClick(ele)}><Link to="/rentcar"style={{ textDecoration: "none" }}>Rent this car</Link></button>
                                    </div>
                                </div>

                            </>
                       )
                    })
                        :
                    carList.map((ele,idx) => {
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
                                    <button onClick={()=>handleClick(ele)}><Link to="/rentcar"style={{ textDecoration: "none" }}>Rent this car</Link></button>
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

export default CardCar