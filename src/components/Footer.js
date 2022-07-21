import React from 'react';
import '../styles/Footer.css';

const Styles = {
    linkImage: {
        height: '50px',
        width: 'auto',
    },
    container: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: 'auto'
    },
}

function Footer() {
    return (
        <div class="clinks" style={Styles.container}>
        <a href="https://github.com/OwenMG" target="_blank" >
            <img src="./ghub.png" alt="github icon" style={Styles.linkImage}/>
        </a>
        
        <a href="https://www.linkedin.com/in/owen-greengo-6371a1228/" target="_blank" >
            <img src="./linkedin-logo.png" alt="LinkedIn logo" style={Styles.linkImage}/>
        </a> 
        
    </div>
    );
}

export default Footer;