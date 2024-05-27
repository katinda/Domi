import React, { useState } from 'react';

export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    return (
        <div>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776; open</span>
            <div id="myNav" className="overlay" style={{ width: isNavOpen ? '100%' : '0%', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
                <a href="javascript:void(0)" className="closebtn" style={{ fontSize: '30px', cursor: 'pointer', position: 'absolute', top: '20px', right: '25px' }} onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                    <a href="#overview" onClick={closeNav}>Introduction</a>
                    <a href="#styleguides" onClick={closeNav}>Style Guides</a>
                    <a href="#logo" onClick={closeNav}>Logo</a>
                    <a href="#color-typography" onClick={closeNav}>Color and Typography</a>
                    <a href="#web-design" onClick={closeNav}>Web Design</a>
                </div>
            </div>
        </div>
    )
}
