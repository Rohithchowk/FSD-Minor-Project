import EmailForm from "./Mailer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} >
        <h1>Login Success Page</h1>
        <Link to='/login' >Logout</Link>
       <EmailForm/>
    </div>
  )
}

export default Dashboard