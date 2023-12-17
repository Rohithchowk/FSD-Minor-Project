import React, { useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CampaignTwoToneIcon from '@mui/icons-material/CampaignTwoTone';
import { AppBar, Button, Toolbar,styled,Paper } from '@mui/material';
import {NavLink} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MenuPopupState from './NavBar';
import { Link } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import Carousel from 'react-material-ui-carousel';








function Example(props)
{
    var items = [
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/05/Orientation-Programme-2023-Guest-Honors-11.09.2023-1.png",
            
            
        },
        {
            name: "https://www.cbit.ac.in/wp-content/uploads/2023/07/Naac-A-Grade.png",
           
        },
        {
            name: "https://i.imgur.com/cKjSlca.png",
            
            
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div>
        <Paper>
            <img src={props.item.name} alt="cbit-logo" height="380" width="1250" style={{paddingTop: '10px', paddingBottom: '40px'}}></img>
            <Button style={{marginTop:'-20px'}}>
                
                <a href="https://www.cbit.ac.in/campuslife_post/event-gallery/" style={{display: 'inline-block',
    padding: '10px 20px',backgroundColor: 'green',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '2px',
    cursor: 'pointer'}}>Check-it-out</a>
            </Button>
           
            
        </Paper>
         
         </div>

    )
}


function AppbarCommon(){
const buttonStyle = {
    borderRadius: 0,
    backgroundColor: 'maroon',
    color: 'white',
    width: '125px',
    border:'None',
    height:'40px'
  };

  const menuStyle = {
    backgroundColor: 'white',
    color:'black',
    textDecoration:'none'
  };

  const menuItemStyle = {
    color: 'black', 
    padding: '8px 16px', 
    fontSize: '16px', 
    textDecoration: 'none !important', 
    '&:hover': {
      backgroundColor: 'lightgray', 
      color: 'maroon',
     
    },
  };

  const tabData = [
    {
      label: 'About',
      menuItems: ['Mission', 'History', 'Values'],
    },
    {
      label: 'Academics',
      menuItems: ['Courses', 'Academic Calendar', 'Library'],
    },
    {
      label: 'Departments',
      menuItems: ['Mechanical Engineering', 'Information-Technology', 'Civil Engineering'],
    },
    {
      label: 'Admissions',
      menuItems: ['Admission Requirements', 'Application Process', 'Scholarships'],
    },
    {
      label: 'Examinations',
      menuItems: ['Exam Schedule', 'Results', 'Exam Guidelines'],
    },
    {
      label: 'StudentLife',
      menuItems: ['Student Clubs', 'Events', 'Hostel Life'],
    },
    {
      label: 'Research',
      menuItems: ['Research Areas', 'Publications', 'Projects'],
    },
    {
      label: 'Placements',
      menuItems: ['Placement Drives', 'Companies', 'Career Services'],
    },
    {
      label: 'Facilities',
      menuItems: ['Library Facilities', 'Sports Complex', 'Computer Labs'],
    },
    {
      label: 'ContactUs',
      menuItems: ['Contact Info', 'Campus Map', 'Feedback'],
    },
  ];

  return (
    <>
    
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {tabData.map((tab, index) => (
        <PopupState key={index} variant="popover" popupId={`menu-${index}`}>
          {(popupState) => (
            <>
              <Button variant="contained" {...bindTrigger(popupState)} style={buttonStyle}>
                {tab.label}
              </Button>
              <Menu {...bindMenu(popupState)} PaperProps={{ style: { ...menuStyle, boxShadow: 'none' } }}>
                {tab.menuItems.map((item, itemIndex) => (
                  <MenuItem key={itemIndex} onClick={popupState.close} style={menuItemStyle}>
                    <Link to={`/${tab.label.toLowerCase()}/${item.toLowerCase()}`} style={{ textDecoration: 'none' ,color: 'black', '&:hover': {
      backgroundColor: 'lightgray', 
      color: 'maroon',
     
    },}}>
                      {item}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </PopupState>
      ))}
    </div>


    <Example/>
    </>)
}

const SearchBar = () => {
  const searchContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginTop:'20px'
  };

  const circleStyles = {
    backgroundColor: 'green',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputStyles = {
    marginLeft: '20px',
    height: '35px',
    width: '180px',

  };

  return (
    <div style={searchContainerStyles}>
      <input placeholder="Search here" style={inputStyles} />
      <div style={circleStyles}>
        <SearchIcon style={{ color: 'white' }} />
      </div>
      
    </div>
  );
};

const NavBar = () => {
  const buttonStyles = {
    backgroundColor: 'white',
    color: 'green',
    border: '1.5px solid black',
    padding: '5px 15px',
    marginLeft: '10px',
    cursor: 'pointer',
    borderRadius:'4px'
  };

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'darkgreen';
    event.target.style.color = 'white';
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'green';
  };

  return (
    <div className="navbar">
      <button
        style={buttonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Mandatory Disclosures
      </button>
      <button
        style={buttonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Library
      </button>
      <button
        style={buttonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Administration
      </button>
      <button
        style={buttonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Career
      </button>
      <button
        style={buttonStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Alumni
      </button>
    </div>
  );
};




const Common = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const containerStyles = {
    display: 'flex',
  };

  const div1Styles = {
    flex: '15%',
    height: '40px',
    backgroundColor: 'maroon',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '17px',
    position: 'relative',
    color: 'white',
  };

  const triangleStyles = {
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid maroon', 
    borderTop: '10px solid transparent',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '0',
  };
  
  const micIconStyles = {
    color: 'white',
  };

  const div2Styles = {
    flex: '70%',
    height: '40px',
    backgroundColor: 'lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '17px',
  };

  const marqueeStyles = {
    color: 'maroon',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: 'marquee 10s linear infinite',
    textDecoration: 'none',
    width:'95%',
  
  };

  const div3Styles = {
    flex: '15%',
    height: '40px',
    backgroundColor: 'lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    position: 'relative',
    
  };

  const dropdownButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const hamburgerStyles = {
    color: 'green',
    fontSize: '20px',
  };

  const dropdownStyles = {
    display: isDropdownVisible ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    right: isDropdownVisible ? '0' : '-30%',
    width: '30%',
    height: '100vh',
    backgroundColor: 'white',
    border: '1px solid black',
    color: 'black',
    padding: '10px',
    zIndex: 1,
   
    opacity: isDropdownVisible ? 1 : 0, 
    transition: 'right 0.5s ease-in-out, opacity 0.5s ease-in-out',
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <div style={containerStyles}>
        <div style={div1Styles}>
          <span>Announcements</span>
          <CampaignTwoToneIcon style={micIconStyles} />
          <div style={triangleStyles}></div>
        </div>
        <div style={div2Styles}>
          <marquee style={marqueeStyles}> 
         <img src='https://i.imgur.com/ZhSihva.gifv' style={{height:'20px',width:'20px',marginRight:'10px',marginLeft:'10px'}}/>
            <a href="https://www.cbit.ac.in/wp-content/uploads/2021/04/Smart-India-Hackathon-SIH-2023-Circular.pdf" style={{ textDecoration: 'none', color: 'maroon' }}>
              Smart India Hackathon SIH 2023 Circular
            </a> |
            
            <img src='https://i.imgur.com/ZhSihva.gifv' style={{height:'20px',width:'20px',marginRight:'10px',marginLeft:'10px'}}/>
            
            <a href="https://www.cbit.ac.in/wp-content/uploads/2022/03/Library-2023-Circular.pdf" style={{ textDecoration: 'none', color: 'maroon' ,marginRight:'10px'}}>
              Library 2023 Circular
            </a>|
            <img src='https://i.imgur.com/ZhSihva.gifv' style={{height:'20px',width:'20px',marginRight:'10px',marginLeft:'10px'}}/>
            
            <a href="https://www.cbit.ac.in/wp-content/uploads/2021/04/Smart-India-Hackathon-SIH-2023-Circular.pdf" style={{ textDecoration: 'none', color: 'maroon',marginLeft:'10px' }}>
              Webinar on cloud computing
            </a>|
            <img src='https://i.imgur.com/ZhSihva.gifv' style={{height:'20px',width:'20px',marginRight:'10px',marginLeft:'10px'}}/>
            
            
            <a href="https://www.cbit.ac.in/wp-content/uploads/2022/03/Library-2023-Circular.pdf" style={{ textDecoration: 'none', color: 'maroon' }}>
              Circular on holidays
            </a>|
          </marquee>
        </div>
        <div style={div3Styles}>
          <div style={dropdownButtonStyles} onClick={toggleDropdown}>IMPORTANT LINKS
            <MenuIcon style={hamburgerStyles} /> 
          </div>
        </div>
      </div>
      {isDropdownVisible && (
        <>
          <div
            onClick={closeDropdown}
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              zIndex: 0,
              backdropFilter: 'blur(0.5px)',
            }}
          />
          <div id="dropdown-menu" style={dropdownStyles} ref={dropdownRef}>
            <ul>
              <li>Mandatory Disclosures </li>
              <li>Library</li>
              <li>Academics</li>
              <li>Admissions</li>
            </ul>
          </div>
        </>
      )}
    <div style={{display:'flex',marginTop:'10px'}}>
      
      <NavLink to ='/'><img src='https://i.imgur.com/IFiqJJa.png'  style={{height:'100px',width:'550px',marginTop:'5px',marginRight:'150px'}}/></NavLink>
      <div >
     <NavBar />
     <div style={{display:'flex'}}>
     <div>
     <img src='https://i.imgur.com/syYIR1v.jpg' style={{height:'60px',width:'60px',marginTop:'10px',marginLeft:'80px'}}/>
     <img src='https://i.imgur.com/9imRfWS.jpg' style={{height:'60px',width:'60px'}}/>
     <img src='https://i.imgur.com/rXYYQaC.jpg' style={{height:'60px',width:'60px'}}/>
     </div>
     <div>
     <SearchBar  />
     </div>
     </div>
     </div>
     
    </div>
    <AppbarCommon/>
    <div  style={{display:'flex'}}>
    {/* <div>
        <h1 style={{fontSize:'18px',fontWeight:'600',fontFamily:'Poppins,sans-serif'}}>DEPARTMENT OF MECHANICAL ENGINEERING</h1>
        <h1 style={{fontSize:'20px',fontWeight:'600'}}>WE’RE TALKING EDUCATION THAT BUILDS THE FUTURE</h1>
        <p>The mechanical engineering department at CBIT always strives to stay at the forefront of technological innovation. Our department lives and swears by technological developments that are shaking the very foundations of conventional wisdom. If there is an existing solution to a real life problem in the field of mechanical engineering, our students know of it. And if there doesn’t exist any, you can find them engrossed in finding one.</p>
    </div> */}
    <div>
       
    </div>
    </div>
    
    

    </div>
  );
};

export default Common;
