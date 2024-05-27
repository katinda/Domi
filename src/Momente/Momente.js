import React from 'react';
import './Momente.css';
export default function Momente() {
    return (
        <div>
            <h2 style={{textAlign: 'center', color: 'black', marginTop: '40px'}}>insta of the moment</h2>

            <section style={{
                marginBottom: '25px',
                marginTop: '25px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }} className="barreVerticale">
                <div style={{
                    borderLeft: '1px solid black',
                    height: '25px',
                    width: '0px',  // Ajoutez ceci pour que le div soit visible
                }}></div>
            </section>

            <section className="grid">
                <div className="grid1"></div>
                <div className="grid2"></div>
                <div className="grid3"></div>
            </section>

            <section className="interested">
                <div>Interested in a modelling career ?</div>
                <div>CONTACT US</div>
            </section>

            <section style={{marginTop:'100px',}}>
                <div>
                    FOLLOW US ON
                </div>
            </section>

            <section style={{
                marginBottom: '25px',
                marginTop: '25px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }} className="barreVerticale">
                <div style={{
                    borderLeft: '1px solid black',
                    height: '25px',
                    width: '0px',  // Ajoutez ceci pour que le div soit visible
                }}></div>
            </section>

            <section>

                <div>
                    <a href="https://www.instagram.com/dominiquemodels_official/" target="_blank">Instagram</a>
                    <span style={{margin: '0 15px'}}>·</span>
                    <a href="https://www.facebook.com/pages/DOMINIQUE-MODELS/113304885366073"
                       target="_blank">Facebook</a>
                </div>

                <div style={{margin: '30px 0'}}>
                    <a href="" className="no-smoothState newsletterbtn">
                        sign up for our newsletter
                    </a>
                </div>

            </section>

            <section style={{margin: '100px 0'}}>

                <div>
                    <a href="https://www.dominiquemodels.com/privacy-policy" target="_blank"
                       className="siteby">Privacy &amp; Cookie Policy</a>
                </div>

                <div>
                    <a href="http://www.plug.be" target="_blank" className="siteby">site by plug</a>
                </div>


            </section>

        </div>
    );
}


