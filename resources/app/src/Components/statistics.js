import React from 'react';
import TweenMax from 'gsap';
import { Power3 } from 'gsap';
import { useRef, useEffect } from 'react';

function Statistics(props) {

    let card = useRef(null);


    useEffect(() => {
        TweenMax.from(card, 0.99, { opacity: 0, x: 200, ease: Power3.ease, delay: 0.5 });
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row container-fluid ">
                    <div className="col-lg-12 ">
                        <div className="card stat_card shadow bg-white rounded justify-content-center" ref={el => card = el} >
                            <div className="card-body stat_body">
                                <div className="box">Seller</div>
                                <div className="box">Foods</div>
                                <div className="box">Customer</div>
                                <div className="box">1000+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;