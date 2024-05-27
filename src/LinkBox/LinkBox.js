import React from 'react';
import './LinkBox.css';
import LinkAlpha from "../LinkAlpha/LinkAlpha.js";


export default function LinkBox() {

    return (
        <div>
            <nav className="container">
                <ul style={{listStyle: "none", padding: "0"}}>
                    <li>mainboard</li>
                    <li>image</li>
                    <li>new faces</li>
                    <li>timeless</li>
                    <li>all</li>
                </ul>
                <form id="formsearchbyname" className="search" method="post">
                    <input className="input" id="searchname2" type="text" name="_name" placeholder="search by name..."
                           automplete="off"/>
                    <input className="input" id="pagecat" type="hidden" name="_cat" value="16"/>
                    <input className="input" id="pagegender" type="hidden" name="_gender" value="2"/>
                    <div className="submit no-smoothState" id="searchbynamesubmit" type="submit" name="submit"
                         value="Search">
                    </div>
                </form>
            </nav>

            {/*<LinkAlpha/>*/}

        </div>
    )
}