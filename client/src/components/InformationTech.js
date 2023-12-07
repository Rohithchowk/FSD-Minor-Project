import Common from "./Common";
import {React,useState} from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Button, autocompleteClasses } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { NavLink, Navigate } from "react-router-dom";
import { act } from "react-dom/test-utils";
import IFrame360Viewer from "./view";
import Chatbox from "./corschatbot";

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

function ClipBoard2() {
  const [activeButton, setActiveButton] = useState(0);

  const buttons = [
    { label: 'About',
    Heading:'DEPARTMENT OF INFORMATION TECHNOLOGY',
    heading1:'We’re talking game-changing IT education',
    content: 'The IT department at CBIT does not need any lucky stars to thank, since we have stars among us who are always willing to go that extra mile. When excellence is the permanent goal, obstacles appear as temporary. That is the spirit with which our departmental teachers, students and research scholars work in order to retain the prestigious position it holds in this field of engineering.',
    heading2:'Department Vision',
    content2:'To be a center of excellence in the field of information technology that yields pioneers and research experts who can contribute for the socio-­economic development of the nation.',
    heading3:'Department Mission',
    l1:'1. To impart state-of-the-art value based education in the field of Information Technology.',
    l2:'2. To collaborate with industries and research organizations and excel in the emerging areas of research.',
    l3:'3. To imbibe social responsibility in students.',
    l4:'4. To motivate students to be trend setters and technopreneurs.'
  },
    
     { label: 'Organization Structure',
    content: 'Will Update Soon' },

    { label: 'Programmes'},

    { label: 'Admissions', content: 'Content for Button 4' },

    { label: 'Syllabus', Heading:'INFORMATION TECHNOLOGY',subhead:'Syllabus',
    r22:'Model Curriculum R22',
    r221:'https://www.cbit.ac.in/wp-content/uploads/2023/03/NEW-IT-R22-SYLLABUS.pdf',
    r222:'https://www.cbit.ac.in/wp-content/uploads/2023/08/IT-Final-R22-Syllabus-III-_-IV-Sem-on-30-08-2023-Updated-at-3PM.pdf'
    ,r20:'Model Curriculum R20'
    ,r201:'https://www.cbit.ac.in/wp-content/uploads/2023/02/CBIT-IT-R20-I-and-II-Semesters-Syllabus-2020-21.pdf',
    r202:'https://www.cbit.ac.in/wp-content/uploads/2023/02/BE-IT-R-20-III-IV-SemScheme-and-Syllabus-2022-04-28.pdf',
    r203:'https://www.cbit.ac.in/wp-content/uploads/2023/02/BE-IT-R-20-V-VI-Sem-syllabus_compressed.pdf',
    r204:'https://www.cbit.ac.in/wp-content/uploads/2023/02/BE-IT-R-20-VII-VIII-Sem-syllabus_compressed.pdf'
    },

   
{ label: 'Faculty', content: <NavLink to='/login'>Faculty Login</NavLink> },

    { label: 'Board of studies',
    Heading:'Board of Studies – Information Technology',
    },
    
    { label: 'Department Commitee', content: 'Content for Button 8' },
    { label: 'Publications', content: 'Content for Button 9' },

    { label: 'Research' },
    
    { label: 'Achievement', content: 'Content for Button 11' },
    { label: 'Class Timetables', content: 'Content for Button 12' },
    { label: 'Mous', content: 'Content for Button 13' },
    { label: 'Departmental Events', content: 'Content for Button 6' },
    { label: 'Infrastructure' },
    { label: 'Workshops', content: 'Content for Button 6' },
    { label: 'Student', content: 'Content for Button 6' },
  ];

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const left={
    backgroundColor:'#ddd',
    width:'800px',
    textAlign:'left',
    color:'brown',
    
  }

  return (
    <div>
      <div style={{ display: 'flex' ,flexDirection:'column' ,marginLeft:'960px'}}>
        <h style={{color:'black',padding:'20px'}}>INFORMATION TECHNOLOGY</h>
        <div style={{boxShadow: '0px 3px 5px 0px',borderRadius:'5px'}}>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => setActiveButton(index)}
            style={{
              background: index === activeButton ? 'DarkGreen' : '#ececec',
              color: index === activeButton ? 'white' : 'Black',
              border: 'none',
              width:'300px',
              height:"40px",
              borderRadius:'3px',
              cursor: 'pointer',
              textAlign:'start',
              
            }}
          >
            <ArrowForwardIosOutlinedIcon style={{height:'15px'}}/>
            {button.label}
           
          </button>
        ))}
        </div>
      </div>

      <div
        style={{
          display:'flex',
          width: '920px',
          height: '680px',
          backgroundColor: '#ececec',
          border:'10px',
          overflow: 'hidden',
          marginTop:'-680px',
          marginLeft:'10px',
          borderRadius:'5px',
          textAlign:'justify',
          letterSpacing:'0.5px',
          boxShadow: '0px 3px 5px 0px',
          border:'1px solid maroon'
          
        }}
      >



        {activeButton === 0 ? (
          <div style={{ border:'10px'}}>
            <h3>{buttons[activeButton].Heading}</h3>
            <h2>{buttons[activeButton].heading1}</h2>
            <p>{buttons[activeButton].content}</p>
            <h3>{buttons[activeButton].heading2}</h3>
            <p>{buttons[activeButton].content2}</p>
            <h3>{buttons[activeButton].heading3}</h3>
            <p>{buttons[activeButton].l1}</p>
            <p>{buttons[activeButton].l2}</p>
            <p>{buttons[activeButton].l3}</p>
            <p>{buttons[activeButton].l4}</p>

          </div>
        ) : <p></p>}

      

      {activeButton ===2  ? (
          <div style={{ border:'10px'}}>
            <h3>INFORMATION TECHNOLOGY</h3>
            <h2>Programs Offered</h2>
            <p>The Department offers Under Graduate program in B.E. (Information Technology) with an intake of 180 students.</p>
            <ul>
              <li>
              <a style={{color:'brown'}} href="https://www.cbit.ac.in//admission_post/be-it/">BE (IT)</a>
              </li>
            </ul>

            <h2>B.E Program Outcomes (PO’s)</h2>
            <h3>Engineering Knowledge:</h3>
            <p>Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization for the solution of complex engineering problems</p>
            <h3>Problem analysis:</h3>
            <p>Identify, formulate, review, research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
           <h3>Design/development of solutions:</h3>
           <p>Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and cultural, societal, and environmental considerations.</p>
</p>
          </div>
        ) : (
          <p></p>
        )}

    

    {activeButton ===4 ? (
      <div style={{width:'900px'}}>
            <h2 style={{textAlign:'center',width:'900px'}}>{buttons[activeButton].Heading}</h2>
            <h3 style={{marginLeft:'50px'}}>{buttons[activeButton].subhead}</h3>
            <h4 style={{marginLeft:'100px'}}>{buttons[activeButton].r22}</h4>
            <h5><a style={{color:'brown',marginLeft:'120px'}} href={buttons[activeButton].r221}> SEM I & II Syllabus</a></h5>
            <h5>< a style={{color:'brown',marginLeft:'120px'}} href={buttons[activeButton].r222}>SEM III & IV Syllabus</a></h5>
            <h4 style={{marginLeft:'100px'}}>{buttons[activeButton].r20}</h4>
            <h5>< a style={{color:'brown',marginLeft:'120px'}} href={buttons[activeButton].r201}>SEM I &II Syllabus</a></h5>
            <h5>< a style={{color:'brown',marginLeft:'120px'}} href={buttons[activeButton].r202}>SEM III & IV Syllabus</a></h5>
            <h5>< a style={{color:'brown',marginLeft:'120px'}} href={buttons[activeButton].r203}>SEM V & VI Syllabus</a></h5>
            <h5>< a style={{color:'brown',marginLeft:'120px'}} href={buttons[activeButton].r204}>SEM VII & VIII Syllabus</a></h5>
      </div>
    ):(
      <p></p>
    )}

{activeButton ===5 ? (
      <div style={{width:'900px'}}>
            <h2 style={{textAlign:'center',width:'900px'}}>{buttons[activeButton].Heading}</h2>
            <h3 style={{marginLeft:'50px'}}>{buttons[activeButton].subhead}</h3>
            <h4 style={{marginLeft:'100px'}}>{buttons[activeButton].r22}</h4>
            <NavLink to='/login'>Faculty Login</NavLink>
           </div>
    ):(
      <p></p>
    )}


        {activeButton ===6  ? (
          <div style={{textAlign:'center'}}>
            <h3>{buttons[activeButton].Heading}</h3>
            <table style={{backgroundColor:'green',width:'800px',marginLeft:'50px',height:'40px',color:'white',textAlign:'center'}}>
              <tr>
              <td >Commitee</td>
              <td>Meeting Minutes</td>
              </tr>
            </table>
            <table style={{width:'800px',textAlign:'left',marginLeft:'50px',height:'120px',color:'brown',borderCollapse:'collapse'}}>
              <tr >
                <td >4th BoS Committee dated 24-03-2021</td>
                <td >11th Minutes of BoS Meeting dated 03-06-2022</td>
              </tr>
              <tr  style={{backgroundColor:'#ddd'}}>
                <td>3rd BoS Committee dated 05-01-2018</td>
                <td>10th Minutes of BoS Meeting dated 17-04-2021</td>
              </tr>
              <tr>
                <td>2nd BoS Committee dated 29-12-2017</td>
                <td>9th Minutes of BoS Meeting dated 25-07-2020</td>
              </tr>
              <tr style={{backgroundColor:'#ddd'}}>
                <td>1st BoS Committee dated 16-09-2013</td>
                <td>8th Minutes of BoS Meeting dated 16-03-2019</td>
              </tr>
            </table>
          </div>
        ) : (
          <p></p>
        )}

    


    {activeButton ===7 ?(
      <div ><h3 style={{textAlign:'center'}}>IT Departmental Committees</h3>
        

<table style={{width:'800px',height:'120px',marginLeft:'50px',textAlign:'left',color:'brown',borderCollapse:'collapse',backgroundColor:'#ddd'}}>
              <tr >
                <td >BoS Committee</td>
                <td >view Details</td>
              </tr>
              <tr >
                <td>Department Advisory Board(DAB)</td>
                <td>view Details</td>
              </tr>
              <tr>
                <td>Programme Assessment Quality Improvement Committee (PAQIC)</td>
                <td>view Details</td>
              </tr>
              
            </table>

        </div>
    ):
    ( <p></p>) }

    {activeButton ===9?(
      <div>
        <h1>{buttons[activeButton].label}</h1>
        <ul >
          <li >
           <h3> <a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/ITD_List-of-Research-Coordinators.pdf" style={{color:'brown'}} >List of Research Coordinators</a>
           </h3>
          </li>
          <li>
            <h3>
            <a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/ITD_Research-Domains-Faculty-Involved.pdf" style={{color:'brown'}} >Research Domains and Faculty Involved</a>
            </h3>
          </li>
          <li>
            <h3>
            <a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/ITD-List-of-Sponsored-projects.pdf" style={{color:'brown'}} >List of Sponsored Projects</a>
            </h3>
          </li>
          <li>
            <h3>
            <a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/ITD_List-of-Publications-with-index_compressed.pdf" style={{color:'brown'}} >List of Journal/Conference publications</a>
          </h3>
          </li>
          <li>
            <h3>
            <a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/ITD_List-of-Patent-Details.pdf" style={{color:'brown'}} >Patent Details</a>
            </h3>
          </li>
          <li>
            <h3>
            <a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/Research-Coordinator-Responsibilities.pdf" style={{color:'brown'}} >Roles and Responsibilities of Research Coordinators</a>
            </h3>
          </li>
          <li>
            <h3>
            <a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/ITD_Progress-of-Research-Coordinators.pdf" style={{color:'brown'}} >Progress of Research Coordinators</a>
            </h3>
          </li>
        </ul>
      </div>
    )
    :(<p></p>)}

      {activeButton ===11 ?(<div style={{textAlign:'center'}}>
        <h2>{buttons[activeButton].label}</h2>
        <table style={{backgroundColor:'green',color:'white',width:'800px',height:'40px',textAlign:'left',marginLeft:"50px",marginTop:"50px"}}>
          <tr >
            <td>SL.NO</td>
            <td>Name</td>
            <td>Course</td>
            <td>Semester</td>
            <td>Link</td>
          </tr>
        </table>
        <table style={{backgroundColor:'#ddd',color:'brown',width:'800px',height:'120px',textAlign:'center',marginLeft:"50px"}}>
          <tr>
            <td>1</td>
            <td>IT SEM VII</td>
            <td>B.E/B.Tech</td>
            <td>SEM VII</td>
            <td><a style={{color:'brown'}} href="https://www.cbit.ac.in/wp-content/uploads/2023/07/REVISED-IT-VII-SEM-2023-24-17.08.2023_IT.pdf">SEM VII</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>IT SEM V</td>
            <td>B.E/B.Tech</td>
            <td>SEM V</td>
            <td><a style={{color:'brown'}} href="https://www.cbit.ac.in/wp-content/uploads/2023/07/IT_BE-III-Sem-25.10.2023.pdf">SEM V</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>IT SEM III</td>
            <td>B.E/B.Tech</td>
            <td>SEM III</td>
            <td><a style={{color:'brown'}} href="https://www.cbit.ac.in/wp-content/uploads/2023/07/IT_BE-III-Sem-25.10.2023.pdf">SEM III</a></td>
          </tr>
        </table>
      </div>):
      (<div></div>)}

{activeButton===12?(<div>
        <h2>MoU signed with Academics/Industry/Government</h2>
        <table style={{backgroundColor:'green',color:'white',width:'800px',height:'40px'}}>
          <tr>
            <td>Name of Organization/Industry</td>
            <td>Document</td>
          </tr>
        </table>
        <table style={{backgroundColor:'#ddd',width:'800px',height:'400px',textAlign:'center'}}>
          <tr>
            <td>AWS Amazon</td>
            <td><a href="https://cbit.ac.in/wp-content/uploads/2021/07/L4G-AWS.pdf">view Details</a></td>
          </tr>
          
          <tr>
            <td>Panace.AI</td>
            <td><a href="https://www.cbit.ac.in/wp-content/uploads/2021/06/MoU-with-Panace.AI-Sept.-2022.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>Bioworld Research Technologies</td>
            <td><a href="https://www.cbit.ac.in/wp-content/uploads/2023/06/MoU-with-Bioworld-Research-Technologies-16.06.2023.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>ExcelR Solutions</td>
            <td><a href="https://www.cbit.ac.in/wp-content/uploads/2023/05/MoU-with-Excelr-25.03.2023.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>Code Sprint</td>
            <td><a href="https://www.cbit.ac.in/wp-content/uploads/2023/10/MoU-with-Code-Sprint-12.10.2023.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>Coincent.AI</td>
            <td><a href="https://www.cbit.ac.in/wp-content/uploads/2023/06/MoU-with-Coincent-AI-20.06.2023.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>Berkadia Services India Private Limited</td>
            <td><a href="https://www.cbit.ac.in/wp-content/uploads/2023/02/2023-02-22-MoU-with-Berkadia-Services-India-Private-Limited.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>Sri Yuva Biotech Pvt.Ltd</td>
            <td><a href="https://www.cbit.ac.in/wp-content/uploads/2022/09/Sri-Yuva-Biotech-MoU-Scanned-documents.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>Coursera</td>
            <td><a href="https://cbit.ac.in/wp-content/uploads/2021/07/Coursera-Agreement-for-CBIT-Documents.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>Atlas</td>
            <td><a href="https://cbit.ac.in/wp-content/uploads/2020/03/Atlas-MOU.pdf">view Details</a></td>
          </tr>
          <tr>
            <td>DSCI (Centre of Excellence)</td>
            <td><a href="https://cbit.ac.in/wp-content/uploads/2020/03/DSCI-MOU.pdf">view Details</a></td>
          </tr>
        </table>
      </div>)
      :(<div></div>)}


      {activeButton ===14?(<div>
        <h2>Department of IT Infrastructure</h2>

        <div >
         <div style={{marginLeft:"50px"}}> 
          <h3>Class Room </h3>
          <img style={{width:'300px',height:"200px",borderRadius:'5px'}} src="https://modelteaching.com/wp-content/uploads/2019/04/Classroom-Procedures-min.jpg"></img>
        </div>
        <div style={{marginLeft:"50px"}}> 
          <h3>Campus</h3>
          <img style={{width:'400px',height:'200px',borderRadius:'5px'}} src="https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-scaled.jpeg"></img>
        </div>
        </div>

      </div>):
      (<div></div>)}



      </div>
    </div>
  );
}


  

  
const InformationTech=()=>{
    return(
        <div>
           <Common/>
           <ClipBoard2/>
           {/* <div style={{backgroundColor:'green',width:'80px', borderRadius:'50%',marginRight:'30px'}}>
            <img style={{position:'relative',marginLeft:'10px', width:'60px'}} src="https://cdn-icons-png.flaticon.com/512/2040/2040946.png" alt="chatbot"></img>
           </div> */}


           <Footer/>

           <Chatbox/>
           <IFrame360Viewer
        src="https://www.google.com/maps/embed?pb=!4v1701941071638!6m8!1m7!1s-dJQtvZ5mmeiJr11Ix1WnQ!2m2!1d17.39120513009094!2d78.31908238845386!3f286.5636117244157!4f37.10192918949332!5f0.4000000000000002" style={{marginRight:'800px'}}
      />
          
        </div>
    )
}

export default InformationTech;


// style={{height:'10px',width:'20px',marginLeft:'90px',marginBottom:'30px'}}