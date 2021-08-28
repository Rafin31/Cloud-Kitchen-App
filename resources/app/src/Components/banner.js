import React, { useEffect, useRef } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import TweenMax from 'gsap';
import { Power3 } from 'gsap';
import Navbar from './Navbar/Navbar';
import Statistics from './statistics';


function Banner() {
    let card = useRef(null);


    useEffect(() => {
        TweenMax.from(card, 0.99, { opacity: 0, y: 200, ease: Power3.ease, delay: 0.2 });
    }, [])


    return (
        <>
            <Navbar />
            <div className="banner banner_black">
                <div className="row container-fluid banner_row h-100 ">
                    <div className="left_banner col-sm-10 col-lg-12 justify-content-center ">
                        <div class="card shadow wow bounceInUp p-3 mb-5 bg-white rounded " ref={el => card = el}  >
                            <div class="card-body" >
                                <p>Order Your <span>Favourite Food</span> Now!</p>
                                <form>
                                    <div className="inputWithIcon">
                                        <input type="text" className="form w-100" placeholder="Search Foods..." />
                                        <input type="text" className="form location w-100" placeholder="Your Location..." />
                                    </div>
                                    <input type="submit" className="banner_btn btn btn-danger w-25 p-1" value="Search" />
                                    <FaLocationArrow className="icon" />
                                    <AiOutlineSearch className="search_icon" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>


    );
}

export default Banner;