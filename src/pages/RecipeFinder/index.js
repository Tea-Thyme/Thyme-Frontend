import React, { useState } from 'react';
import './recipefinder.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';




export const RecipeFinder = () => {

  

    const [user, setUser] = useState({username: "", email: ""});
    const username = localStorage.getItem("username")
    const navigate = useNavigate();
    
    const LoggedOut = () => {
        console.log("Log out")
        console.log(user)
        setUser({ username: "", email: ""});
        navigate('/logout')
    }

    const homeIcon = <FontAwesomeIcon icon={faHouse} />
    const profileIcon = <FontAwesomeIcon icon={faUser} />
    const ingredientsIcon = <FontAwesomeIcon icon={faUtensils} />

 


    
    return (

        <>
<div className="door-back">  
<div className="fridgeTitleBack"> {username}'s  &nbsp; <span style= {{color: "#31BFF3"}}> F</span>
                                            <span style= {{color: "#A484E9"}}> r</span>
                                            <span style= {{color: "#F4889A"}}> i</span>
                                            <span style= {{color: "#FFAF68"}}> d</span>
                                            <span style= {{color: "#F6E683"}}> g</span>
                                            <span style= {{color: "#79D45E"}}> e</span>
                                            </div>
                                            <div className ="logOutBox">
    <button className="logOutButton" onClick={LoggedOut}> <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> </button>
    </div>
    <div className="shoppingList">
      <h1 className="shoppingTitle">Recipe Finder</h1>
    </div>
   


    <div className="bottomNavBar">  <Tooltip title='Home'>
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/'>{homeIcon} </Link>
      </IconButton>
      </Tooltip>
      <Tooltip title='Profile'>
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/profile'>{profileIcon} </Link>
      </IconButton>
    </Tooltip>  
    <Tooltip title='Ingredients'>
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/ingredients'>{ingredientsIcon} </Link>
      </IconButton>
    </Tooltip>  </div> 
 
    </div>

   

        </>
    
   ) }


export default RecipeFinder;