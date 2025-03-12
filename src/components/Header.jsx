import { React,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Header.css';
import { ReactComponent as MenuLogo } from '../assets/menu_logo.svg';

const Header = () => {
    const navigate = useNavigate();
    const [expand,setExpand] = useState(false)
    
    var isPointerEventInsideElement = function (event, element) {
        var pos = {
            x: event.targetTouches ? event.targetTouches[0].clientX : event.clientX,
            y: event.targetTouches ? event.targetTouches[0].clientY : event.clientY
        };
        var rect = element.getBoundingClientRect();
        return  pos.x < rect.right && pos.x > rect.left && pos.y < rect.bottom && pos.y > rect.top;
    };

    document.querySelector("#root").addEventListener('click', function (event) {
        //console.log("Click on menu...")
        //console.log(isPointerEventInsideElement(event, document.querySelector('#click_header')))
        if(!isPointerEventInsideElement(event, document.querySelector('#click_header'))){
            document.getElementById("menu_icon").style.transform = "none";
            document.getElementById("menu_popup").style.display = "none";
            setExpand(false);
        } 
    });    

    const handleClick = (e) => {
        if(!expand){
            document.getElementById("menu_icon").style.transform = "rotate(90deg)";
            document.getElementById("menu_popup").style.display = "flex";
            setExpand(true);
        } else {
            document.getElementById("menu_icon").style.transform = "none";
            document.getElementById("menu_popup").style.display = "none";
            setExpand(false);
        };
    };

    const handleMenuClick = (e) => {
        //console.log(`Implement navigate to: /${e.target.id}`);
        switch(e.target.id){
            case "comp_sci":
                navigate('/compsci/0');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "landscape":
                navigate('/landscape/0');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "hobbies":
                navigate('/hobbies');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            case "home":
                navigate('/');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            default:
                break;
        }
        
    };

    const handleHomeClick = (e) => {
        navigate('/')
    }

    return (
        <header>
            <div id="menu_popup" className="popup" onClick={handleMenuClick}>
                    <div id="comp_sci" className="menuItem">
                        <p>computer science</p>
                    </div>
                    <div id="landscape" className="menuItem">
                        <p>landscape arch</p>
                    </div>
                    <div id="hobbies" className="menuItem">
                        <p>hobbies</p>
                    </div>
                    <div id="home" className="menuItem">
                        <p>back to home</p>
                    </div>
                </div>
            <div className="header">
                <div id="click_header" className="container">
                    <a href="/"><h2 id="name">cameron braatz</h2></a>
                    <MenuLogo
                        id="menu_icon"
                        className="icon"           
                        onClick={handleClick}
                    />
                </div>
            </div>
            
        </header>
    );
};

export default Header;