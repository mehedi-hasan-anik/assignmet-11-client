import React from 'react';

const Photo = ({event}) => {
    console.log('price',event);
    return (
        <div className="container card card-area">
        <img style={{width:'100%'}} src={event.imageURL} alt=""/>
         <h5>{event.title}</h5>
         <p>{event.description}</p>
         <p>{event.price}</p>
         {/* <button onClick={()=>handleCheckOut(event._id)} style={{background:'blue', color:'#fff'}}>Buy Now</button> */}
    </div>
    );
};

export default Photo;