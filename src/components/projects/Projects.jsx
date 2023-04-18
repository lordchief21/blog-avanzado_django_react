import React from "react";
import style from './style.css'
import all_foods from '../../assets/all_foods.jpg'
import fastAPI from '../../assets/fastAPI.jpg'
import Unkwon_coder from '../../assets/Unkwon_coder.jpg'

export const Projects = () => {
    return (
        <section id = "Projects" >
            <h2 className="title_project">Portfolio</h2>

            <div className="container portfolio_container">
                <article className="card">
                    <div>
                        <img className="img_project" src={fastAPI} alt="all_foods_project"/>
                    </div>
                    <h3>API using FastAPI (Python Integration)</h3>
                    <a href="https://github.com/lordchief21/Back-End_FastAPI-Python" className="bg-green-700 rounded-full scroll-pl-6">Github</a>
                </article>
                <article className="card">
                    <div>
                        <img className="img_project" src={Unkwon_coder} alt="all_foods_project"/>
                    </div>
                    <h3>Uknown coder (PG-HENRY)</h3>
                    <a href="https://github.com/lordchief21/PG-SoyHenry" className="bg-green-700 rounded-full scroll-pl-6">Github</a>
                </article>
                <article className="card">
                    <div>
                        <img className="img_project" src={all_foods} alt="all_foods_project"/>
                    </div>
                    <h3>Food_PI (PI-HENRY)</h3>
                    <a href="https://github.com/lordchief21/Food_PI" className="bg-green-700 rounded-full scroll-pl-6">Github</a>
                </article>
            </div>

        </section> 
    )
}