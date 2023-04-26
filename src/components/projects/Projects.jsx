import React from "react";
import style from './style.css'
import  nodeJs from '../../assets/nodeJs.png'
import  expressJS from '../../assets/expressJS.png'
import  sequelize from '../../assets/sequelize.png'
import  reactJS from '../../assets/reactJS.png'
import  redux from '../../assets/redux.png'
import  postgress from '../../assets/postgress.png'


export const Projects = () => {
    return (
        <section id = "Projects" >
            <h2 className="title_project">Portfolio</h2>

            <div className="container portfolio_container">
                <div class="card">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner">
                        <h2 className="card_title">All Foods</h2>
                        <h3 className="stack_title">Stack</h3>
                        <div className="stack">
                            <img src={nodeJs} alt="nodeJs" title="NodeJs"  className="stack_img" />
                            <img src={expressJS} alt="expressJS" title="ExpressJS"  className="stack_img" />
                            <img src={sequelize} alt="sequelize" title="Sequelize"  className="stack_img" />
                            <img src={reactJS} alt="reactJS" title="ReactJS"  className="stack_img" />
                            <img src={redux} alt="redux" title="Redux"  className="stack_img" />
                            <img src={postgress} alt="postgress" title="Postgress"  className="stack_img" />
                        </div>
                        <a href="https://github.com/lordchief21" target="_blank" className="linkeable">Github</a>
                    </div>
                </div>
                <div class="card">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner">
                        
                    </div>
                </div>
                <div class="card">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner">
                        
                    </div>
                </div>
            </div>

        </section> 
    )
}