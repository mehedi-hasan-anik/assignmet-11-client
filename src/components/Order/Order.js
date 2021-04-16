import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Payment from '../Payment/Payment';


const Order = () => {
    const [user,setUser,servicePhoto,setServicePhoto]=useContext(userContext);
    const {idNumber} = useParams();
    const found = servicePhoto.find(Element => Element._id === idNumber);
    

    const handleOrder = () =>{
        const order ={
            name:user.name,
            email:user.email,
            serviceName:found.name,
            image:found.image,
            price:found.price,
            date: new Date(),
        }

        fetch('http://localhost:8080/addOrder',{
            method:"POST",
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }


    return (
        <div className="container" style={{marginTop:'20px'}}>

            {
                found && <div className="row">
                   <div className="col-md-6">
                     <Payment></Payment>
                   </div>
                    <div className="col-md-6">
                       <h5>Name : {user.name}</h5>
                       <p>Price : {found.price}</p>
                       <button onClick={handleOrder}>Get</button>
                    </div>
                </div>
            }
      
     </div>
    );
};

export default Order;