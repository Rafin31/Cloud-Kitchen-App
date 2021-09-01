import React, { useEffect, useRef } from 'react';
import { CatagoriesData } from "./data"
import { Link } from 'react-router-dom';
import TweenMax from 'gsap';
import { Power3 } from 'gsap';

function Catagories(props) {

    let animation = useRef(null);


    useEffect(() => {
        TweenMax.from(animation, 0.99, { opacity: 0, y: 200, ease: Power3.ease, delay: 0.5 });
    }, [])



    return (
        <div className="Catagory_contaier">
            <div className="catagory_container" ref={el => animation = el}>
                <div className="catagories_wrapper card shadow rounded-4"  >
                    {
                        CatagoriesData.map((data, index) => {
                            return (

                                <Link to={data.path} className={data.cName} ref={el => animation = el} >
                                    {data.icon}
                                    <span>{data.title}</span>
                                </Link>

                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Catagories;