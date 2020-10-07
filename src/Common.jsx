import React from 'react';
import { NavLink } from 'react-router-dom';
//import web from '../src/images/123.png'

import './App.css';

function Common(props) {
    return (
        <>
            <section id="" className="d-flex aline-itmes-center ">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-large-1 d-flex justify-content-center flex-column">
                                <h1>{props.name} <br /><strong className="brand-name">ninja project</strong>
                                </h1>
                                <h5 className="my-3">
                                    ok lets go

                                </h5>
                                <div className="mt-3">
                                    <NavLink to= {props.visit}  className="btn list-group-item-secondary" >{props.btname}</NavLink>

                                </div>


                            </div>
                           
                            <div className="col-lg-6 order-1 pt-5   order-lg-2 header-img d-flex">
                            <img src={props.img} className="img-fluid animated" alt="home" />

                            </div>

                       </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;