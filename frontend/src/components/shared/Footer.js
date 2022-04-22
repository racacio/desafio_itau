import React from 'react';
import '../../assets/css/bicfooter.css';

const Footer = () => {
    return (
        <footer className='wpthemeFooter'>
            <div id="footer" role="navigation" style={{ position: "fixed", top: "628px" }}>
                <div className="bottom_footer" style={{ backgroundImage: "url(../assets/images/bg-footer.png)" }}>
                    <p style={{ textAlign: "center"}}>Diseñado por: Reinaldo Acacio.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;