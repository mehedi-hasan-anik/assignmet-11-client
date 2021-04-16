import React from 'react';
import HeaderPhoto from '../image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';

const HeaderBottom = () => {
    return (
        <div className="container">
            <div className=" row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                     <h1 className="text-primary mb-5">We Build <br/>Your Dream</h1>
                     <p>online Easte Agency the mordern  way to sell your own home
                     you can use Griffin Residential to market your property</p>
                     <button className="btn btn-primary">Booking</button>
                </div>
                <div className="col-md-6">
                    <img src={HeaderPhoto} alt="" className="img-fluid"/>
                </div>
                
            </div>
        </div>
    );
};

export default HeaderBottom;