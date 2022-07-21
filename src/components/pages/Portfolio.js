import React from 'react';
import '../../styles/Portfolio.css';

const Styles = {
    portLinkSection: {
        margin: "10px auto"
    }
}

export default function Portfolio() {
  return (
    <div>
      <div class="container">
      <div class="row justify-content-center">
                
                <div class="card" id="spotlight">
                    <img src="./DEViseShot.png" class="card-img-top" alt="screenshot of DEVise application"/>
                <div class="card-body">
                  <h5 class="card-title">DEVise</h5>
                  <p class="card-text">DEVise is a collaborative team-project management hub for software developers. Users can 
                    create an account, create a team dashboard, and share their team code to invite other members to join and organize 
                    the development of new software.
                  </p>
                  <div class="cardlinkarea">
                    <a href="https://github.com/OwenMG/DEVise" target="_blank" class="btn projlink">Application</a>
                    <a href="https://devisehub.herokuapp.com/" target="_blank"class="btn projlink">GitHub</a>
                  </div>
                    </div>
                </div>
        </div>
        <div class='row' style={Styles.portLinkSection}>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="./WeatherBoardShot.png" class="card-img-top" alt="screenshot of weather dashboard application"/>
                    <div class="card-body">
                      <h5 class="card-title">Weather Dashboard</h5>
                      <p class="card-text">Search for any city and get a weather report showing today's weather conditions as well as a five-day
                          forecast.
                      </p>
                      <div class="cardlinkarea">
                        <a href="https://owenmg.github.io/Weather_Dashboard" target="_blank" class="btn projlink">Application</a>
                        <a href="https://github.com/OwenMG/Weather_Dashboard" target="_blank" class="btn projlink">GitHub</a>
                      </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="./JSQuizShot.png" class="card-img-top" alt="screenshot of js quiz application"/>
                    <div class="card-body">
                      <h5 class="card-title">JavaScript Quiz</h5>
                      <p class="card-text">Test your knowledge of some of JavaScript's fundamentals in this short quiz. Designed to be easy for devs
                          and hard for anyone else, this test will give you less time with each error!
                      </p>
                      <div class="cardlinkarea">
                        <a href="https://owenmg.github.io/Javascript_Quiz/" target="_blank" class="btn projlink">Application</a>
                        <a href="https://github.com/OwenMG/Javascript_Quiz" target="_blank" class="btn projlink">GitHub</a>
                      </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                <img src="./DinnerDeciderShot.png" class="card-img-top" alt="screenshot of dinner decider application"/>
            <div class="card-body">
              <h5 class="card-title">Dinner Decider</h5>
              <p class="card-text">Looking for a quick and easy home cooking recipe for dinner tonight? Dinner Decider is an application 
                  built to allow you to search for any meal and get a recipe along with a YouTube video demonstrating how to cook it!
              </p>
              <div class="cardlinkarea">
                <a href="https://owenmg.github.io/Dinner_Decider/" target="_blank" class="btn projlink">Application</a>
                <a href="https://github.com/OwenMG/Dinner_Decider" target="_blank" class="btn projlink">GitHub</a>
              </div>
                </div>
            </div>
            </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="./PassGenShot.png" class="card-img-top" alt="screenshot of password generator application"/>
                    <div class="card-body">
                      <h5 class="card-title">Password Generator</h5>
                      <p class="card-text">Generate a complex and secure password for personal or professional use. Just click generate and enter your 
                          preferences in the alerts that follow and enjoy your new random password.
                      </p>
                      <div class="cardlinkarea">
                        <a href="https://owenmg.github.io/Password_Generator/" target="_blank" class="btn projlink">Application</a>
                        <a href="https://github.com/OwenMG/Password_Generator" target="_blank" class="btn projlink">GitHub</a>
                      </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="./ConBlogShot.png" class="card-img-top" alt="screenshot of js quiz application"/>
                    <div class="card-body">
                      <h5 class="card-title">Console.Blog</h5>
                      <p class="card-text">Console.Blog is a heroku-deployed tech blog which allows users to create an account, create blog posts, and even comment
                      on eachothers posts! It serves as proog of concept for some social network technology.
                      </p>
                      <div class="cardlinkarea">
                        <a href="https://pure-reaches-80045.herokuapp.com/" target="_blank" class="btn projlink">Application</a>
                        <a href="https://github.com/OwenMG/Console_Dot_Blog" target="_blank" class="btn projlink">GitHub</a>
                      </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}
