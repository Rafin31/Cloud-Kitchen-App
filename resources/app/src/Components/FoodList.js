import React, { useEffect, useState } from 'react';
import Aos from "aos";
import DataAPI from './FoodListData/dataAPI';
import "aos/dist/aos.css";
import axios from "axios"

function FoodList() {



    useEffect(async () => {
        Aos.init({ duration: 2000 });
    }, []);



    return (
        <div>
            <div className="row Food_box_container justify-content-center mt-3 ">
                <div className="col-lg-8 col-sm-11 col-10 card rounded-bottom shadow p-3" data-aos="fade-up">
                    <h5>Search Your food</h5>
                    <form>
                        <input className="form-control search_field border border-secondary rounded-3" type="text" name="" id="" placeholder="What would you like to have...." />
                        <input type="button" className="btn btn-danger search_button w-25" value="Search" />
                    </form>
                </div>
            </div>

            <div className="row Food_box_container justify-content-center">
                <div className="col-lg-8">
                    <DataAPI />
                </div>
            </div>
        </div >
    );
}

export default FoodList;