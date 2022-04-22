import React from 'react';
import logoItau from '../../assets/images/logo-itau.png';
import '../../assets/css/bicheader.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header role='banner'>
            <div className="wpthemeHeader">
				<div className="wpthemeInner"></div>
			</div>
            <div className='wpthemeBanner'>
                <div className="wpthemeBannerInner">
                    <div className="wpthemeInner">
                        <div className="lotusui lotusTitleBar">
                            <div className="lotusRightCorner">
                                <div className="lotusInner" id="lotusInnerId">
                                    <NavLink to="/" className="lotusLogo" style={{ marginRight: "15px" }}>
                                        <img src={logoItau} />
                                    </NavLink>

                                    <div id="header" role="navigation">
                                        <div className="mnuHeader">
                                            <ul className="contentAll">
                                                <li className="mnuProdutos">
                                                    <NavLink to="/personas" className="mnu">Personas</NavLink>
                                                </li>

                                                <li className="mnuObjetivos">
                                                    <NavLink to="/fibonacci" className="mnu">Fibonacci</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpthemeClear"></div>
                    </div>
                </div>
            </div>
            <div className="wpthemeSecondaryBanner">
				<div className="wpthemeInner">
					<div className="wpthemeClear"></div>
				</div>
			</div>
        </header >
    );
}

export default Header;