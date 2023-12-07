import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://13.232.90.49:8001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          alert('Login successful!')
          navigate('/sendmail');
        } else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh', backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
      <div style={{ background: '#fff', padding: '1rem', width: '40%', borderRadius: '0.25rem' }}>
        <h2 style={{ marginBottom: '1rem', color: '#007bff' }}>Faculty Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label htmlFor="exampleInputEmail1" style={{ fontWeight: 'bold' }}>Email Id</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(event) => setEmail(event.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label htmlFor="exampleInputPassword1" style={{ fontWeight: 'bold' }}>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) => setPassword(event.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ cursor: 'pointer' }}>Login</button>
        </form>
        <p style={{ margin: '0.5rem 0' }}>Don't have an account?</p>
        <Link to='/register' className="btn btn-secondary" style={{ cursor: 'pointer' }}>Register</Link>
      </div>
    </div>
  );
}

export default Login;
