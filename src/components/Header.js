import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {

    }
};

function Header() {
    return (
        <header style={styles.headerStyle} className='header'>
            <h1>
                OwenMG
            </h1>
        </header>
    );
}

export default Header;