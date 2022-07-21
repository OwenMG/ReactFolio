import React from 'react';

const Styles = {
  container: {
      display: 'flex',
      justifyContent: 'space-evenly'
  }
}

export default function Resume() {
  return (
    <div>
      <h1>Resumé</h1>
      <div style={Styles.container}>
      
        <a href="./Owen_Greengo_Resume_2022.pdf" download>
          <img id="resumeicon" src="./resume-icon.png" alt="icon depicting resume download"/>
          </a>
        <div>
          <ul>
          Familiar Technologies: Reach out if you need a project built using...
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MongoDB/Mongoose</li>
            <li>Express</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>Webpack</li>
          </ul>
          <p>and more!</p>
          </div>
      </div>
    </div>
  );
}
