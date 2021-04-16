import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Photo from '../Photo/Photo';

const ServiceArea = () => {
    // const [servicePhoto,setServicePhoto]=useState([]);
    const [user,setUser,servicePhoto,setServicePhoto]=useContext(userContext);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch('http://localhost:8080/servicePhoto')
        .then(res=>res.json(res))
        .then(data=>{
            setServicePhoto(data)
            setLoading(true)
        })
    },[])
   
    const homeResult = servicePhoto.filter(event=> event.imageURL);
    console.log("result",homeResult);

    return (
        <div className="container" style={{marginTop:'100px'}}>

            <h5 className="text-center ">Service</h5>
            <h3 className="text-center" style={{color:'#0000FF',marginBottom:'50px'}}>We are an agency tailored to all <br/> client needs that always delivers</h3>
           
          {
              loading &&  <div className="row">
              {
                  homeResult.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><Photo event={event}></Photo></div>)
              }
            </div> 
           
          }
       
       </div>
    );
};

export default ServiceArea;