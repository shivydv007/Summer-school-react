import React from 'react'
import './Summer_school_experience.css'

const Summer_school_experience = () => {
    return (
        <>
            <div class="container">
                <header>J L U G</header>
                <div class="subheading">
                    Empowering the next generation of technologists
                    <br />
                    through comprehensive learning experiences.
                </div>



                <section class="feedback-wrapper">
                    <div class="feedback-box">
                        <div class="rate">
                            <h2>RATE&nbsp;&nbsp;YOUR&nbsp;&nbsp;EXPERIENCE</h2>
                            <p>Help us to improve by sharing your feedback</p>

                            <div class="card-box">
                                <div class="slider">
                                    <div class="card">“I love your workshop...”<div class="photo"><img src="pfp.jpg" alt="image" />  </div><div class="name">Aman Kaur</div><div class="time">2 min ago</div></div>
                                    <div class="card">“The hands-on sessions...”<div class="photo"><img src="link here" alt="image" />  </div><div class="name">Rahul Verma</div><div class="time">5 min ago</div></div>
                                    <div class="card">“Amazing mentors...”<div class="photo"><img src="link here" alt="image" /></div>  <div class="name">Priya Singh</div><div class="time">10 min ago</div></div>
                                </div>
                            </div>
                            <button class="add-btn">Add Yours</button>

                        </div>
                    </div>
                </section>

                <footer>


                    <nav>
                        <a href="#">Home</a> |
                        <a href="#">About</a> |
                        <a href="#">Program</a> |
                        <a href="#">Workshops</a>
                    </nav>

                    <p>©️ 2025 JLUG Summer School Program. All rights reserved</p>

                </footer>
            </div>

        </>
    )
}

export default Summer_school_experience