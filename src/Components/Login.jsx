import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import pictarka from '../Images/ark-white1.png';
import pictcenter from '../Images/imageleftlogin.png';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css';
import axios from 'axios';

class Login extends Component {
constructor(){
    super()
    this.state = {
        username: '',
        password: '',
        role: '',
        token: '',
        message: '' 
    }
}

    login = e => {

        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        }
        // const header = {

        // }
        axios.post('http://localhost:8000/auth/login', data)
        .then( res=>{
            console.log(res);
            if(res.status === 200){
                this.setState({
                  message: 'Login Success',
                  token: res.data.token
              })
                // console.log(this.state)
                alert('Login Success')
            }
            else if (res.status === 'error'){
                  this.setState({
                    message: 'Login Failed!'
                })
                // console.log(this.state)
                  alert('Login Failed!')
            }
        })
        .catch(err=>{
            // console.log(this.state)
            this.setState({
                message: 'Login Failed!'
            })
        })
    }

    componentDidUpdate = () => {
        //dijalankan setelah ada data (state dan/atau props) yang berubah
        if (this.state.message === "Login Success"){
            localStorage.setItem('username :', this.state.username);
            localStorage.setItem('token :', this.state.token);
            localStorage.setItem('role :', this.state.role);

          this.props.history.push ('/home')
        }
        // else if (this.state.message === "Login Failed!"){
        //   this.props.history.push ('/login')
        // }
    };

    render() {
        return (
            <Grid container>
            <Grid item xs={12} sm={7}>
                <div className= 'left'>
                    <img className='pictarka' src={pictarka} alt='pictarka'/>
                    <img className='pictcenter' src={pictcenter} alt='pictcenter'/>
                    <div className="description">
                        <p className="description-header">
                        Hire expert freelancers for any job, online
                        </p>
                        <p className="description-footer">
                            Million of small businesses use Freelencer to turn their ideas into reality.
                        </p>
                    </div>
                </div>
            </Grid>
          
            <Grid item xs={12} sm={5}>
                <div className='right'>
                    <p className='textlogin'>
                        LOGIN
                    </p>
                    <div className='form'>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label className='inputUsername'>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username"
                            onChange = { e => this.setState({username:e.target.value})}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                            <Form.Label className='inputPassword'>Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter password"
                            onChange = { e => this.setState({password:e.target.value})}/>
                            </Form.Group> 
                            <Form.Group>
                            <Form.Label className='label-role'>Role</Form.Label>
                            <Form.Control as="select"
                            onChange = { e => this.setState({role:e.target.value})} >
                                <option></option>
                                <option>engineer</option>
                                <option>company</option>
                            </Form.Control>
                            </Form.Group> 
                            <p className="forget">
                                Forgot Password ?
                            </p>
                            <button className='button-login' size="lg"
                                onClick = { e => {
                                    this.login(e);
                                }}>
                            LOGIN
                            </button>
                            <button className='button-register-form-login' size="lg"
                            onClick = {e => {
                                this.props.history.push ('/register');
                            }}>
                            REGISTER
                            </button>
                        </Form>
                        </div>
                    </div>
                </Grid>
                </Grid>
                );
        }

}

export default Login;