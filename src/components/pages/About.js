import React from 'react';

const Styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    info: {

    },
    portrait: {
        maxHeight: '400px',
        maxWidth: 'auto'
    }
}

export default function Portfolio() {
  return (
    <div>
      <h1>About OwenMG</h1>
      <div class="container">
            <div class="row">
                <div class="col-12 col-md-9">
                    <article id="info">
                        <p>I am Owen, or OwenMG, a Full Stack Web Developer training at the University of Washington, in the BCS Full Stack Flex Bootcamp. 
                            I enjoy problem solving through creative programming and working on teams to bring collective ideas to life.
                            I am currently based in the Seattle area, working part time at a coffee shop, and looking for projects or teams that need more members
                            passionate about coding!   
                        </p>
                    </article>
                </div>

                <div class="col-12 col-md-3">
                <img src="./portrait.jpg" alt="A of me" id="portrait" style={Styles.portrait}/>
                </div>
            </div>
        </div>
      </div>
  );
}
