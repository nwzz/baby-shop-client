import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceFlipCard.css';

const ServiceFlipCard = ({ service }) => {
    const { title, image, description, cost, days, origin } = service;
    const { setSelectedService, isAdmin } = useContext(UserContext);
    return (
        <div className="col-md-4 mb-5" style={{ background: 'none' }}>

            
                

                    <div className=" shadow border p-5">
                       
                            <div className=""></div>
                            <img style={{width: '250px', height:'200px'}} className=" " src={image} alt="Brohm Lake" /> <br /><br />
                            <h3>{title}</h3>
                            <h5>Imported From: <span style={{color:'tomato'}}> {origin}</span></h5>
                            
                            <div className="card bg-transparent" style={{ width: '18rem', border: 'none' }}>
                            
                            <div className="card-body">
                                <p className="card-text">{description.slice(0, 100)}...</p>

                            </div>
                            <div
                                class="card-footer bg-transparent border-top-0 d-flex justify-content-start">
                                <h5 id="price"><span className="fw-bolder">৳</span>{cost} <small>/Pieces</small></h5>
                                
                            </div>
                        </div>
                       
                        <Link to={isAdmin ? "/dashboard/orderList" : "/dashboard/book"}>
                                    <button type="button"
                                        className="btn-main"
                                        onClick={() => setSelectedService(service)}
                                    ><i class="fa fa-shopping-cart"></i>&nbsp;Buy
                                        Now</button></Link>
    
                    </div>
            </div>
    );
};

export default ServiceFlipCard;