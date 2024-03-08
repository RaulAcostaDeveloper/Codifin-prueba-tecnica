import { useState } from "react";

// This header is a courtesy to complete the app page
export const Header = ({ title }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <div className="Header">
            <button onClick={ ()=>setIsOpenMenu(!isOpenMenu) } title="Open menu">
                <img src="./icons/menu.png" alt="menu"/>
            </button>
            <h1>{ title }</h1>
            { isOpenMenu &&
                <div className="openedMenu" title="Click to close" onClick={ ()=>setIsOpenMenu(false) }>
                    <div className="insideMenu">
                        <div className="headerMenu">
                            <img src="./images/codifinMiniLogo.png" alt="Codifin mini logo" />
                            <div className="text">
                                <h3>Challenge Test</h3>
                                <p>Select random movie</p>
                            </div>
                        </div>
                        <div className="insideElement">
                            <a href="https://www.codifin.com/" target="_blank" rel="noopener noreferrer">Codifin.com</a>
                        </div>
                        <div className="insideElement" >
                            <a href="https://www.raulacostadeveloper.com/dev" target="_blank" rel="noopener noreferrer">raulacostadeveloper.com</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}