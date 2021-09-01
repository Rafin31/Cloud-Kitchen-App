import React from 'react';
import { useState, useEffect } from 'react';


function DataAPI() {

    let [data, setData] = useState([]);

    useEffect(async () => {
        let data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
            .then(res => res.json())
            .then(resp => { setData(resp.meals) })
    }, [])
    console.log(data)



    return (
        <div>
            {
                data.map((food) => {

                    return (
                        <div className="card rounded-2 shadow food_box" data-aos="fade-up">
                            <div className="row m-2" >

                                <div className="col-lg-8 p-3">
                                    <h3>{food.strMeal}</h3>
                                    <p>Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et mollitia dolorum libero, laboriosam unde repellendus nam recusandae vitae possimus reprehenderit voluptatibus a quas explicabo officia dolor provident sit, quasi odit veritatis ratione, saepe fugiat doloribus consequuntur. Sed, ducimus ea. Eius illo nemo, voluptas reprehenderit dicta maiores? Quod non quisquam fugiat et ad impedit assumenda similique iste voluptatem aliquam quam eligendi ratione, voluptas numquam obcaecati optio blanditiis totam, saepe praesentium a amet velit cum magni quaerat. Tenetur, debitis nemo eligendi ullam fuga minus at beatae officia amet nam labore vitae delectus expedita doloribus molestias cum assumenda dolores corporis laboriosam nihil! ipsum dolor sit amet consectetur us error ratione? A nihil dolore placeat provident totam aperiam dolorem facilis esse quidem?</p>
                                    <p><strong>Price (BDT) : 500++</strong></p>
                                    <a href="" className="btn btn-outline-dark" > + Add to Cart</a>
                                </div>
                                <div className="col-lg-3 align-content-center ">
                                    <img className="food_img" src={food.strMealThumb} alt="" srcset="" />
                                </div>

                            </div>
                        </div>
                    );
                })

            }
        </div>
    );
}

export default DataAPI;