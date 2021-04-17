import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderListCard from './OrderListCard/OrderListCard';


const OrderList = () => {
    const [bookings,setBookings]=useState([])
    const [user,setUser,servicePhoto,setServicePhoto,paymentError,setPaymentError,paymentSuccess,setPaymentSuccess]=useContext(userContext);

    useEffect(()=>{
        fetch('http://localhost:8080/getOrder?email='+user.email)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])
    console.log(bookings);

    return (
        <div className="container">
            <h1 style={{textAlign:'center'}}>Service List </h1>
            <h3 style={{textAlign:'center'}}>{user.name}</h3>
            <div className="row">
                {
                    bookings.map(event=> <OrderListCard event={event}></OrderListCard> )
                }
            </div> 
      </div>
    );
};

export default OrderList;