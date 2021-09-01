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
                    <div className="col-lg-10 col-md-12 w-100 stat_container  ">
                        <div className="card stat_card shadow bg-white rounded p-2 w-50 justify-content-center" ref={el => card = el} >
                            <div className="box">
                                <h3>
                                    100+
                                </h3>
                                <p>Active Seller</p>
                            </div>
                            <div className="box">
                                <h3>
                                    2000+
                                </h3>
                                <p>Foods</p>
                            </div>
                            <div className="box">
                                <h3>
                                    5100+
                                </h3>
                                <p>Clients</p>
                            </div>
                            <div className="box">
                                <h3>
                                    3.5+
                                </h3>
                                <p>Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;