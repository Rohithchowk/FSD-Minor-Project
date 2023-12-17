import * as React  from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useState ,useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignIn from './facultylogin';
import ABC from './Chatbox.js'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
import Chatbox from './Chatbox.js';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ChatBot from './Chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const events = [
  { date: '2023-10-13', eventName: 'Chaitanya Lasya (Dance Club of CBIT) VICTORY ON 04-04-2023 at VNR VJIET',
  date1: '2023-10-02', eventName1: 'One Day Online Workshop on Latex & Overleaf',
  date2:'2023-10-20', eventName2:' Guest Lecture Civil Department '},
  // Add more events as needed
];

export function CalendarContent() {
  return (<div>
    <div>
      {events.map((event, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '14px', color: 'maroon' }} />
          <p style={{ fontSize: '16px', color: 'black', marginLeft: '20px' }}>
            {event.date} - {event.eventName}
          </p>
        </div>
      ))}
    </div>
    <div>
    {events.map((event, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '14px', color: 'maroon' }} />
        <p style={{ fontSize: '16px', color: 'black', marginLeft: '20px' }}>
          {event.date1} - {event.eventName1}
        </p>
      </div>
    ))}
  </div>
  <div>
    {events.map((event, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '14px', color: 'maroon' }} />
        <p style={{ fontSize: '16px', color: 'black', marginLeft: '20px' }}>
          {event.date2} - {event.eventName2}
        </p>
      </div>
    ))}
  </div>
  </div>
  );
}



const VideoResumeIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    fontSize: '48px',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(0.8)' : 'scale(1)',
    color:'white',
    
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <a href ='https://youtu.be/RptoHi3UxGA?si=gofK3K2fzsq-r0NV'>
      <PlayCircleOutlinedIcon style={iconStyle} /></a>
      
    </div>
  );
};





const divWithBackgroundStyle = {
  backgroundImage: `url('https://w0.peakpx.com/wallpaper/161/315/HD-wallpaper-electric-fire-light-bulb-hot-hand-power-electricity-heat.jpg')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  width: '100%',
  height: '400px', 
  marginBottom:'5px',
  marginTop:'-10px'
  
};


function Videooo(){
  return(
    <div style={divWithBackgroundStyle}>
      <p style={{color:'whitesmoke',fontFamily:'sans-serif',fontWeight:'300',fontSize:'34px',paddingTop:'38px'}}>Let’s build the future with innovation
</p> 
<p style={{color:'whitesmoke',fontFamily:'sans-serif',fontWeight:'300',fontSize:'20px',paddingTop:'38px'}}>Chaitanya Bharathi Institute of Technology, established in the Year 1979, esteemed as the premier engineering institute in the states of Telangana and Andhra Pradesh.</p>
<VideoResumeIcon/>

    </div>
  )
}

const divStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '1px',
  width: '100%',
  margin: '0 auto',
  marginBottom: '40px',
};

const innerDivStyle = {
  backgroundColor: 'lightblue',
  padding: '0px',
  border: '2px solid #333333',
  borderRadius: '5px',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'green',
  transition: 'transform 0.3s',
  cursor: 'pointer', 
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit:'cover'
};

function GalleryDivs() {
  return (
    <div style={divStyles}>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_1770-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 1"
        />
      </div>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2023/09/G-Krishna-garu-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 2"
        />
      </div>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_1893-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 3"
        />
      </div>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_1924-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 4"
        />
      </div>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_1973-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 5"
        />
      </div>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_2032-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 6"
        />
      </div>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2023/02/IMG00322-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 7"
        />
      </div>
      <div
        style={innerDivStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src='https://www.cbit.ac.in/wp-content/uploads/2022/12/DSC01335-1024x683-640x480.jpg'
          style={imgStyle}
          alt="Image 8"
        />
      </div>
    </div>
  );
}




const slideshowData = [
  {
    id: 1,
    text: 'https://i.imgur.com/Oiw5uRO.jpg',
  },
  {
    id: 2,
    text: 'https://i.imgur.com/f34yGnl.jpg',
  },
  {
    id: 3,
    text: 'https://i.imgur.com/oeZjZJD.jpg',
  },
  {
    id: 4,
    text: 'https://i.imgur.com/l3lHtht.jpg',
  },
  {
    id: 5,
    text: 'https://i.imgur.com/uD6mguf.jpg',
  },
  {
    id: 5,
    text: 'https://i.imgur.com/8mfHIod.png',
  },
  {
    id: 5,
    text: 'https://i.imgur.com/pTPjSIM.png',
  },{
    id: 5,
    text: 'https://i.imgur.com/jjVoERR.jpg',
  },{
    id: 5,
    text: 'https://i.imgur.com/d0KBohC.png',
  },
  {
    id: 5,
    text: 'https://i.imgur.com/47u9rnl.png',
  },
  {
    id: 5,
    text: 'https://i.imgur.com/bH2uK3e.jpg',
  },
  
];

const slideStyle = {
  padding:'25px',
  width: 'auto',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius:'0.375px',
  margin: '10px',
  transition: 'transform 1s ease',
  border: '4px solid green',
  borderRadius: '5px',
};

const activeSlideStyle = {
  transform: 'translateX(0)',
};

const ComapanySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTransformValue(-currentSlide * 300);
  }, [currentSlide]);

  const duplicatedSlides = [...slideshowData, ...slideshowData, ...slideshowData];

  return (
    <div className="slideshow-container" style={{ textAlign: 'center', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          width: `${duplicatedSlides.length * 300}px`,
          transition: 'transform 1s ease',
          transform: `translateX(${transformValue}px)`,
        }}
      >
        {duplicatedSlides.map((slide) => (
          <div
            key={slide.id}
            className={`slide`}
            style={currentSlide === slide.id - 1 ? { ...slideStyle, ...activeSlideStyle } : slideStyle}
          >
            <img src={slide.text} alt={`company-logo-${slide.id}`} style={{ height: '100px', width: '280px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};
  



function CbitNumbers() {
  const targetData = [
    { number: 44, content: 'Years Of Academic Excellence' },
    { number: 22, content: 'Programmes' },
    { number: 333, content: 'Highly Dedicated Faculty' },
    { number: 143, content: 'Faculty With Ph.D And 102 Pursuing Ph.D' },
    { number: 68, content: 'Research Projects From AICTE, DRDO, And State Government' },
    { number: 140, content: 'Recruiters' },
    { number: 56, content: 'MoUs With Industry' },
    { number: 5, content: 'Students (in K)' },
  ];
  const imageHeight = '350px';

  const [increments, setIncrements] = useState(targetData.map(() => 0));

  useEffect(() => {
    const incrementIntervals = targetData.map((target, index) => {
      if (increments[index] < target.number) {
        return setInterval(() => {
          setIncrements((prevIncrements) => {
            const newIncrements = [...prevIncrements];
            newIncrements[index] += 1;
            return newIncrements;
          });
        }, 50);
      }
      return null;
    });

    return () => {
      incrementIntervals.forEach((intervalId) => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      });
    };
  }, [increments, targetData]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'maroon', fontWeight: '600', fontSize: '29px' }}>CBIT BY NUMBERS</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="https://i.imgur.com/7AVVFoa.png"
          style={{ height: '348px', width: '350px', border: '2px solid green' }}
          alt="CBIT Numbers Logo"
        />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 'flex',
            height: imageHeight,
            border: '1px solid black',
          }}
        >
          {targetData.map((data, index) => (
            <div
              key={index}
              style={{
                width: '227px',
                height: '175px',
                border: '1px solid black',
                boxSizing: 'border-box',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: index % 2 === 0 ? '#991E20E6' : '#991E20',
                padding: '10px',
                borderRadius: '2px',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '30px', display: 'flex', alignItems: 'center' }}>
                <div>{increments[index]}</div>
                <button
                  style={{
                    marginLeft: '5px',
                    color: 'yellow',
                    border: 'none',
                    padding: '0',
                    fontSize: '32px', // Increased font size
                    background: 'none',
                  }}
                  onClick={() => {
                    setIncrements((prevIncrements) => {
                      const newIncrements = [...prevIncrements];
                      newIncrements[index] += data.number; // Increment by the specified number
                      return newIncrements;
                    });
                  }}
                >
                  +
                </button>
              </div>
              <div style={{ marginTop: '6px' }}>{data.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}







  
  

function ClipBoard() {
  const [showContent1, setShowContent1] = useState(true);

  const toggleContent = () => {
    setShowContent1((prev) => !prev);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <button
        onClick={toggleContent}
        style={{
          background: showContent1 ? 'teal' : 'gray',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '2px',
          cursor: 'pointer',
          marginTop: '30px',
          marginRight: '20px',
        }}
      >
        EVENTS
      </button>
      <button
        onClick={toggleContent}
        style={{
          background: showContent1 ? 'gray' : 'teal',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '2px',
          cursor: 'pointer',
          marginTop: '30px',
        }}
      >
        NEWS
      </button>


      {showContent1 ? (
        <div style={{height:'400px',width:'800px',backgroundColor:'#ececec'}}><div style={{ display: 'flex',border:'0.5px solid green',borderRadius:'9px' }}><div>
          <CalendarContent/>
          </div>
      </div>
      
      
        
      </div>
        
       
      ) : (
        <div style={{ backgroundColor: '#ececec', height: '450px', width: '800px', borderRadius: '9px' }}>
          <div style={{ display: 'flex',border:'0.5px solid green',borderRadius:'9px' }}>
            <img
              src="https://www.cbit.ac.in/wp-content/uploads/2022/03/2.jpg"
              alt="Image 1"
              style={{ height: '80px', width: '140px', margin: '20px' }}
            />
            <div>
              <h3 style={{ fontSize: '14px', color: 'maroon' }}>
                13th Oct 2023
              </h3>
              <p style={{ fontSize: '16px', color: 'black', marginLeft: '20px' }}>
                Chaitanya Lasya (Dance Club of CBIT) VICTORY ON O4-04-2023 at VNR VJIET
              </p>
            </div>
          </div>
          <div style={{ display: 'flex',border:'0.5px solid green' ,borderRadius:'9px'}}>
            <img
              src="https://www.cbit.ac.in/wp-content/uploads/2022/03/ariia-final.jpg"
              alt="Image 2"
              style={{ height: '80px', width: '140px', margin: '20px' }}
            />
            <div>
              <h3 style={{ fontSize: '14px', color: 'maroon' }}>
                2nd Oct 2023
              </h3>
              <p style={{ fontSize: '16px', color: 'black', marginLeft: '20px' }}>
                One Day Online Workshop on Latex & Overleaf
              </p>
            </div>
          </div>
          <div style={{ display: 'flex' ,border:'0.5px solid green' ,borderRadius:'9px'}}>
            <img
              src="https://www.cbit.ac.in/wp-content/uploads/2022/03/2.jpg"
              alt="Image 3"
              style={{ height: '80px', width: '140px', margin: '20px' }}
            />
            <div>
              <h3 style={{ fontSize: '14px', color: 'maroon' }}>
                9th Sep 2023
              </h3>
              <p style={{ fontSize: '16px', color: 'black', marginLeft: '20px' }}>
                Chaitanya Lasya (Dance Club of CBIT) VICTORY ON O4-04-2023 at VNR VJIET
              </p>
            </div>
            
          </div>
          <Button style={{backgroundColor:'green' ,marginLeft:'1065px',marginTop:'80px',color:'White',width:'160px',height:'40px'}}>View all<ArrowForwardIosOutlinedIcon/></Button>
          
        </div>
      )}
    </div>
  );
}




function EventsNews(){
    return(
        <div style={{display:'flex'}}>
            <div>
                <ClipBoard/>

            </div>
            <div>

            </div>

        </div>
    )
}


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
            <img src={props.item.name} alt="cbit-logo" height="520" width="100%" style={{paddingTop: '10px', paddingBottom: '40px'}}></img>
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


function Ex(props)
{
    var items = [
        {
            name: "https://i.imgur.com/Cu8maHU.png",
            name1:"https://i.imgur.com/YuQezRk.jpg",
            title1:"  Chaitanya Bharathi Institute of Technology, established in the Year 1979, esteemed as the premier en...",

            
            title:'ET Campus Stars 6.0 (2023) – India’s largest hunt for the brightest engineering talent.',
            
            
            
        },
      
        {
            name: "https://i.imgur.com/qMOSGQK.jpg",
            title:' Congratulations Asritha, Vasuki, Sahithi &amp; Gayatri  who interned at Salesforce with Rs. 1.25 LPM w...',
            name1:"https://i.imgur.com/SaItP64.jpg",
            title1:"Congratulations CBIT Students secure third place in Smart Manufacturing and  Artificial Intelligence(SMAI) Hackathon.",
           
            
        }]
    
    
        return (
        
            <Carousel  interval={2500}>
            {items.map((item, i) => <It key={i} item={item} />)}
        </Carousel>
      
)}

function It(props) {
    return (
        <div>
        <Paper style={{ display: 'flex' }}>
        <div style={{ flex: '1', border:'1px solid black',borderRadius:'5px',marginRight:'10px',marginLeft:'20px'}}>
            <img src={props.item.name} alt="cbit-logo" height="280" width="600" style={{ paddingTop: '10px', paddingBottom: '40px' }} />
            <p>{props.item.title}</p>
        </div>
        <div style={{ flex:'1',border:'1px solid black',borderRadius:'5px',marginLeft:'20px' }}>
            <img src={props.item.name1} alt="cbit-logo" height="280" width="600" style={{ paddingTop: '10px', paddingBottom: '40px' }} />
            <p>{props.item.title1}</p>
        </div>

        
        
    </Paper>
    <Button style={{backgroundColor:'green' ,marginLeft:'1100px',marginTop:'10px',color:'White',width:'160px',height:'40px'}}>View all <ArrowForwardIosOutlinedIcon/></Button>
    </div>
    );
}



function Alumnnicarousel(props)
{
    var items = [
        {   
            year:'1991',
            name: "https://i.imgur.com/GSiYp9z.jpg",
            title1:"Mr. Komatireddy Venkat Reddy",
            year1:'2005',
            title:'Mr. K.C Navneeth Kumar',
            year2:'2007',
            name2: "https://i.imgur.com/K9Bnp68.jpg",
            title2:"Mr. E Sai Charan Tejaswi",
            name1:'https://i.imgur.com/HHVIbRy.jpg',
            year3:'1992',
            name3:"https://i.imgur.com/cBWhcSV.jpg",
            title3:"Mr. Ravinder Gupta",
            
        },
      
        
       
        {
            name: "https://i.imgur.com/8XXBbHo.jpg",
            title:'Mr. Shekar Kamala',
            year:'2005',
            name1:"https://i.imgur.com/VIac27f.jpg",
            title1:"Mr. Ravi kumar",
            year1:'2010',
            name2: "https://i.imgur.com/1LMx9pF.jpg",
            year2:'1983',
            title2:'Mr. C Shekar Reddy',
            year3:'1984',
            name3:"https://i.imgur.com/u4Vnd1d.jpg",
            title3:"Mr. Y Satyanarayana",
        },
       

    ]


   
    return (
        <>
                 <Carousel  interval={2500}>
                 {items.map((item, i) => <Itemalumni key={i} item={item} />)}
             </Carousel>

             <Button style={{backgroundColor:'green' ,marginLeft:'1100px',marginTop:'10px',color:'White',width:'160px',height:'40px',marginBottom:'20px'}}>View all <ArrowForwardIosOutlinedIcon/></Button>
             </>
           
    )
}

function Itemalumni(props) {
    return (
        <Paper style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
            <img src={props.item.name} alt="cbit-logo" height="240" width="200" style={{ paddingTop: '1px', paddingBottom: '0px' ,border:'1px solid black ',borderRadius:'4px'}} />
            <p style={{marginLeft:'0px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.title}</p>
            <p style={{marginLeft:'0px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.year}</p>
        </div>
        <div style={{ flex: 1 }}>
            <img src={props.item.name1} alt="cbit-logo" height="240" width="200" style={{ paddingTop: '1px', paddingBottom: '0px' ,border:'2px solid black ',borderRadius:'4px'}} />
            <p style={{marginLeft:'12px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.title1}</p>
            <p style={{marginLeft:'12px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.year1}</p>
        </div>
        <div style={{ flex: 1 }}>
            <img src={props.item.name2} alt="cbit-logo" height="240" width="200" style={{ paddingTop: '1px', paddingBottom: '0px',border:'2px solid black ',borderRadius:'4px' }} />
            <p style={{marginLeft:'12px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.title2}</p>
            <p style={{marginLeft:'12px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.year2}</p>
        </div>
        <div style={{ flex: 1 }}>
            <img src={props.item.name3} alt="cbit-logo" height="240" width="200" style={{ paddingTop: '1px', paddingBottom: '0px' ,border:'2px solid black ',borderRadius:'4px' }} />
            <p style={{marginLeft:'12px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.title3}</p>
            <p style={{marginLeft:'12px',textAlign:'center',color:'black',marginTop:'6px',marginRight:'100px',textTransform:'capitalize',fontWeight:'600'}}>{props.item.year3}</p>
        </div>
    </Paper>
    );
}





function Faciliti(props)
{
    var items = [
        {
            name: "data:image/jpeg;base64,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",
            name1:"data:image/jpeg;base64,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",
            title1:"DATA CENTER",
            title:'FITNESS CENTER',
            name2: "data:image/jpeg;base64,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",
            title2:'CANTEEN',
            name3:"data:image/jpeg;base64,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",
            title3:"HOSTEL",
            
            
        },
      
        
       
        {
            name: "data:image/jpeg;base64,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",
            title:'SPORTS',
            name1:"data:image/jpeg;base64,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",
            title1:"PARKING",
            name2: "data:image/jpeg;base64,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",
            
            title2:'HEALTH CENTER',
            name3:"data:image/jpeg;base64,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",
            title3:"LIBRARY",
        },
       

    ]


   
    return (
        <>
                 <Carousel  interval={2500}>
                 {items.map((item, i) => <Itemss key={i} item={item} />)}
             </Carousel>

             <Button style={{backgroundColor:'green' ,marginLeft:'1100px',marginTop:'10px',color:'White',width:'160px',height:'40px',marginBottom:'20px'}}>View all<ArrowForwardIosOutlinedIcon/></Button></>
           
    )
}


function Itemss(props) {
  const divStyle = {
    flex: 1,
    padding: '10px', 
    transition: 'transform 0.3s ease',
  };

  return (
    <Paper style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div
        style={divStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src={props.item.name}
          alt="cbit-logo"
          height="160"
          width="280"
          style={{
            paddingTop: '1px',
            paddingBottom: '1px',
            border: '2px solid maroon',
            borderRadius: '5px',
          }}
        />
        <p style={{ marginLeft: '8px', textAlign: 'center', color: 'black', marginTop: '10px' }}>
          {props.item.title}
        </p>
      </div>
      <div
        style={divStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src={props.item.name1}
          alt="cbit-logo"
          height="160"
          width="280"
          style={{
            paddingTop: '1px',
            paddingBottom: '1px',
            border: '2px solid maroon',
            borderRadius: '5px',
          }}
        />
        <p style={{ marginLeft: '8px', textAlign: 'center', color: 'black', marginTop: '10px' }}>
          {props.item.title1}
        </p>
      </div>
      <div
        style={divStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src={props.item.name2}
          alt="cbit-logo"
          height="160"
          width="280"
          style={{
            paddingTop: '1px',
            paddingBottom: '1px',
            border: '2px solid maroon',
            borderRadius: '5px',
          }}
        />
        <p style={{ marginLeft: '8px', textAlign: 'center', color: 'black', marginTop: '10px' }}>
          {props.item.title2}
        </p>
      </div>
      <div
        style={divStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img
          src={props.item.name3}
          alt="cbit-logo"
          height="160"
          width="280"
          style={{
            paddingTop: '1px',
            paddingBottom: '1px',
            border: '2px solid maroon',
            borderRadius: '5px',
          }}
        />
        <p style={{ marginLeft: '8px', textAlign: 'center', color: 'black', marginTop: '10px' }}>
          {props.item.title3}
        </p>
      </div>
    </Paper>
  );
}
function Paper1({ image, title }) {
  return (
    <div className="paper-container">
      <img className="paper-image" src={image} alt={title} />
      <h3 className="paper-title">{title}</h3>
    </div>
  );
}



function Exa(props)
{
    var items = [
        {
            name: "https://i.imgur.com/1yKQlhj.jpg",
            name1:"https://i.imgur.com/x01dFrj.jpg",
            title1:"MATHEMATICS",
            title:'CHEMISTRY',
            name2: "https://i.imgur.com/sPPiLoC.jpg",
            title2:'ENGLISH',
            name3:"https://i.imgur.com/tjC5tnm.jpg",
            title3:"COMPUTER SCIENCE",
            
            
        },
      
        {
            name: "https://i.imgur.com/GxfZ951.jpg",
            title:'INFORMATION TECHNOLOGY',
            name1:"https://i.imgur.com/0xPDhS9.jpg",
            title1:"EEE",
            name2: "https://i.imgur.com/kmPN4j6.jpg",
            title2:'ECE',
            name3:"https://i.imgur.com/8D2P8JX.jpg",
            title3:"MECHANICAL",
            
            // ELECTRICAL AND COMMMUNICATION ENGINEERING
            // ELECTRICAL AND ELECTRONICS ENGINEERING
            
        },
       
        {
            name: "https://i.imgur.com/sNQQnN4.jpg",
            title:'AI&ML',
            name1:"https://i.imgur.com/s6JWEoj.jpg",
            title1:"CIVIL ENGINEERING",
            name2: "https://i.imgur.com/vHSBurC.jpg",
            
            title2:'PHYSICS',
            name3:"https://i.imgur.com/w6jWQi3.jpg",
            title3:"AI&DS",
        },
        {
            name: "https://i.imgur.com/4Ts9H1f.jpg",
            
            title:'PHYSICAL EDUCATION',
            name1:"https://i.imgur.com/TjQrllr.jpg",
            title1:"BIO TECHNOLOGY",
            name2: "https://i.imgur.com/x01dFrj.jpg",
            
            title2:'MASTER OF COMPUTER APPL.',
            name3:"https://i.imgur.com/gN6UI27.jpg",
            title3:"INFORMATION TECHNOLOGY",
        },
        {
            name: "https://i.imgur.com/tjC5tnm.jpg",
            title:'COMPUTER SCIENCE',
            name1:"https://i.imgur.com/l43gdIk.jpg",
            title1:"CHEMICAL ENGINEERING",
            name2: "https://i.imgur.com/Rwrnswl.jpg",
            title2:'MBA',
            name3:"https://i.imgur.com/4Ts9H1f.jpg",
            title3:"FIT",
            
        }

    ]

    function Exa(props) {
  var items = [
    // Your subject data here
    // ...

    // Example:
    {
      name: "",
      title: "MATHEMATICS",
    },
    {
      name: "http://45.114.246.81/~adroitprojects/projects/cbit/v3/caticn/simg64f59d4331145.jpg",
      title: "CHEMISTRY",
    },
    // ... add more subjects
  ];

  return (
    <Carousel interval={2500} nextIcon={<span className="carousel-arrow">&#8594;</span>}>
      {items.map((item, i) => (
        <Paper key={i} image={item.name} title={item.title} />
      ))}
    </Carousel>
  );
}



   
    return (
        
                 <Carousel  interval={2500}>
                 {items.map((item, i) => <Ite key={i} item={item} />)}
             </Carousel>
           
    )
}


function Ite(props) {
    return (
        <Paper style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
            <img src={props.item.name} alt="cbit-logo" height="180" width="300" style={{ paddingTop: '0px', paddingBottom: '0px' , border:'2px solid green',borderRadius:'5px',boxShadow: '4px 4px 6px Lightgrey' }} />
            <p style={{fontWeight:'630',fontSize:'16px' , fontFamily:'sans-serif'}}>{props.item.title }</p>
            <a href='#' style={{paddingLeft:'200px',color:'maroon',textDecoration:'none'}}>Read more</a><ArrowRightAltIcon style={{color:'maroon'}}/>
        </div>
        <div style={{ flex: 1 }}>
            <img src={props.item.name1} alt="cbit-logo" height="180" width="300" style={{ paddingTop: '0px', paddingBottom: '0px' , border:'2px solid green',borderRadius:'5px' ,boxShadow: '14px 4px 6px rgba(0, 0, 0, 0.1)',}} />
            <p style={{fontWeight:'630' ,fontSize:'16px' , fontFamily:'sans-serif'}}>{props.item.title1}</p>
            <a href='#' style={{paddingLeft:'200px',color:'maroon',textDecoration:'none'}}>Read more</a><ArrowRightAltIcon style={{color:'maroon', paddingLeft:'5px'}}/>
        </div>
        <div style={{ flex: 1 }}>
            <img src={props.item.name2} alt="cbit-logo" height="180" width="300" style={{ paddingTop: '00px', paddingBottom: '0px', border:'2px solid green',borderRadius:'5px' ,boxShadow: '14px 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{fontWeight:'630',fontSize:'16px' , fontFamily:'sans-serif'}}>{props.item.title2}</p>
            <a href='#' style={{paddingLeft:'200px',color:'maroon',textDecoration:'none'}}>Read more</a><ArrowRightAltIcon style={{color:'maroon'}}/>
        </div>
        <div style={{ flex: 1 }}>
            <img src={props.item.name3} alt="cbit-logo" height="180" width="300" style={{ paddingTop: '0px', paddingBottom: '0px', border:'2px solid green',borderRadius:'5px',boxShadow: '14px 4px 6px rgba(0, 0, 0, 0.1)' }} />
            <p style={{fontWeight:'630',fontSize:'16px' , fontFamily:'sans-serif'}}>{props.item.title3}</p>
            <a href='#' style={{paddingLeft:'200px',color:'maroon',textDecoration:'none'}}>Read more</a><ArrowRightAltIcon style={{color:'maroon'}}/>
        </div>
    </Paper>
    );
}


function Footer(){
  return(
  <>
  
  <div style={{display:'flex', backgroundColor:'#38572833',marginTop:'60px',height:'400px',letterSpacing:'1px',lineHeight:'1'}}>
      <div style={{width:'400px',marginLeft:'40px',marginTop:'40px'}}>
      <h1 style={{textAlign:'left',color :'black',fontWeight:'600',fontSize:'18px'}}>CBIT</h1>
      <hr color='green'></hr>
      <p style={{width:'400px'}}>Chaitanya Bharathi Institute of Technology,<br></br><br></br> Gandipet, Hyderabad, Telangana - 500075<br></br><br></br>
Phone: 040-24193276<br></br><br></br>
Mobile: 8466997201<br></br><br></br>
For Admissions Enquiry: 8466997216<br></br><br></br>
Email: principal@cbit.ac.in<br></br><br></br>
Old Website: https://www.cbit.ac.in/
</p>

        

      </div>
      <div style={{width:'400px',marginLeft:'40px',marginTop:'40px',letterSpacing:'1px',lineHeight:'1'}}>
      <h1 style={{textAlign:'left',color :'black',fontWeight:'600',fontSize:'18px'}}>Student Corner</h1>
      <hr color='green'></hr>
      <p>Academic and Examination Cell<br></br><br></br>
AICTE Feedback Portal (Student)<br></br><br></br>
Anti-Sexual Harassment Committee<br></br><br></br>
CAMU Portal for Student<br></br><br></br>
CBIT Course Repository<br></br><br></br>
Grievance Redressal Committee<br></br><br></br>
Osmania University<br></br><br></br>
Swayam Education Portal</p>

      


      </div>
      <div style={{width:'400px',marginLeft:'40px',marginTop:'40px',letterSpacing:'1px',lineHeight:'1'}}>
      <h1 style={{textAlign:'left',color :'black',fontWeight:'600',fontSize:'18px'}}>Faculty Corner</h1>
      <hr color='green'></hr>
      <p>AICTE Feedback Portal (Faculty)<br></br><br></br>
AICTE Recommended Books for Engg<br></br><br></br>
CAMU Portal for Faculty<br></br><br></br>
CBIT Faculty Webmail<br></br><br></br>
Grievance Redressal Committee for Staff<br></br><br></br>
HR App Portal for Faculty<br></br><br></br>
HR Policy Manual<br></br><br></br>
ICT Initiatives of MoE</p>

      </div>

  </div>
  <div style={{width:'100%',backgroundColor:'#006400',height:'20px',marginTop:'-25px'}}><p style={{marginLeft:'450px',color:'white',fontSize:'16px'}}>©2023 V-SEM MINOR PROJECT TEAM1 All rights reserved.</p></div>


  
  </>);
}


export default function NavB() {
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
    
    <div style={{flexWrap: 'wrap' ,width:'100%'}}>
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
    <div >
        <h1 style={{textAlign:'center'}}>DEPARTMENTS</h1>
        <Exa/>
    </div>
    <div style={{display:'flex'}}>
    <EventsNews/>
    <div id='event' style={{height:'450px',width:'580px', margin:'40px',  boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)'}}>
   <center> <p style={{color:'black', fontSize:'28px',marginBottom:'-30px'}}>NOTIFICATIONS<NotificationsOutlinedIcon fontSize='large' style={{marginLeft:'6px'}}/></p></center>
   <div style={{height:'320px',width:'300px',  margin:'40px', border:'0.2px  solid black'}} >
   <marquee onmouseover="this.stop();" width="77%" onmouseout="this.start();" direction="up" height="100%" style={{marginLeft:"15px"}}>
    <a href='https://www.cbit.ac.in/wp-content/uploads/2021/04/Guest-Lecture-Molecular-Mechanism.pdf' style={{textDecoration:'none' , display: 'inline-block',textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, color 0.3s', color:'orange',marginBottom:"35px"}}>** Circular - Guest Lecture on "Highlighting the molecular mechanism underlying pancreatic cancer development-a tip for using artificial intelligence tool" on 19.09.2023</a>
    <a href='https://www.cbit.ac.in/wp-content/uploads/2021/04/Guest-Lecture-Molecular-Mechanism.pdf' style={{textDecoration:'none' , display: 'inline-block',textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, color 0.3s', color:'orange',marginBottom:"35px"}}>** Circular - Guest Lecture on "Highlighting the molecular mechanism underlying pancreatic cancer development-a tip for using artificial intelligence tool" on 19.09.2023</a>
    <a href='https://www.cbit.ac.in/wp-content/uploads/2021/04/Guest-Lecture-Molecular-Mechanism.pdf' style={{textDecoration:'none' , display: 'inline-block',textAlign: 'center', cursor: 'pointer', transition: 'background-color 0.3s, color 0.3s', color:'orange',marginBottom:"35px"}}>** Circular - Guest Lecture on "Highlighting the molecular mechanism underlying pancreatic cancer development-a tip for using artificial intelligence tool" on 19.09.2023</a>

    </marquee>
    

   </div>
</div>
    </div>
    <CbitNumbers />
    <div>
    <h1 style={{textAlign:'center',color :'green',fontWeight:'600',fontSize:'29px'}}>ACHIEVEMENTS</h1>
    <Ex/>
    </div>
    <div style={{width:'100%',height:'450px',border:'1px solid green',  backgroundImage: 'url("")',
  backgroundSize: 'cover',  
  backgroundPosition: 'center center',  
  backgroundRepeat: 'no-repeat',
  }}>

<center><h1 style={{color :'black',fontWeight:'600',fontSize:'22px'}}>2022-23 PLACEMENT HIGHLIGHTS</h1></center>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div>
    <ApartmentOutlinedIcon style={{ height: '70px', width: '70px', marginLeft: '110px' }} />
    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '60px' }}>140</h1>

    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '80px' }}>COMPANIES</h1>
  </div>
  <div>

    <RedeemOutlinedIcon style={{ height: '70px', width: '70px', marginLeft: '150px' }} />
    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '80px' }}>1736</h1>
    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '50px' }}>PLACEMENT OFFERS</h1>
  </div>
  <div>

    <MonetizationOnOutlinedIcon style={{ height: '70px', width: '70px', marginLeft: '150px' }} />
    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '80px' }}>54</h1>
    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '80px' }}>HIGHEST PACKAGE</h1>
  </div>
  <div>

    <Man2OutlinedIcon style={{ height: '70px', width: '70px', marginLeft: '130px' }} />
    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '80px' }}>83.68</h1>
    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '22px', marginLeft: '80px' }}>OF PLACEMENTS</h1>
  </div>
</div>
    <ComapanySlideshow/>
    </div>    
    <div style={{backgroundColor:'#E2CED8'}}>
    <h1 style={{textAlign:'center',color :'black',fontWeight:'600',fontSize:'29px'}}>FACILITIES</h1>
        <Faciliti/>
    </div>
    <div>
    <h1 style={{textAlign:'center',color :'black',fontWeight:'600',fontSize:'29px'}}>DISTINGUISHED ALUMNI</h1>
     <Alumnnicarousel/>
    </div>
    <GalleryDivs  />
    <Videooo />
    <h1 style={{marginTop:'-55px'}}></h1>
    
    
    <Footer/>
    

    
    

    </>
  );
}


