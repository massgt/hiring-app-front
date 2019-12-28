import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import pictarka from '../Images/ark-white1.png';
import pictcenter from '../Images/imageleftlogin.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import  '../Styles/Register.css'
import axios from 'axios';

class Register extends Component {
constructor() {
  super()
  this.state={
    name: '',
    username: '',
    password: '',
    role: '',
    message: '',
  }
}
register = e => {
  e.preventDefault();
  const data = {
    name: this.state.name,
    username: this.state.username,
    password: this.state.password,
    role: this.state.role
  }

  axios.post('http://localhost:8000/auth/register', data)
  .then(res => {
    if(res.status === 200){
      this.setState({
        message: 'Register Success'
    })
      console.log(this.state)
      alert('Register Success')
    }
    else if (res.status === 'error'){
          this.setState({
            message: 'Register Failed!'
        })
        console.log(this.state)
          alert('Register Failed!')
    }
  })
  .catch(err => {
    console.log(this.state)
    this.setState({
      message: 'Registerd Failed!'
    })
  })
}
  componentDidUpdate = () => {
    if (this.state.message === "Register Success") {
      this.props.history.push ('/login')
    }
  };


    render() {   // const {username, password, role, name} = this.state
        return (
          <Grid container>
            <Grid item xs={12} sm={7}>
                <div className='left'>
                    <img className='pictarka' src={pictarka} alt='pictarka'/>
                    <img className='pictcenter' src={pictcenter} alt='pictcenter'/>
                  <div className="description">
                    <p className="description-header">
                      Hire expert freelancers for any job, online
                    </p>
                    <p className="description-footer">
                      Millions of small businesses use Freelancer to turn their ideas into reality.
                    </p>
                  </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={5}>
          <div className='right'>
            <p className='textregister'>
                REGISTER
            </p>
              <div className='form'>
                <Form>
                  <Form.Group> 
                    <Form.Label className='label-username'>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" 
                    onChange={ (e) => {this.setState({username:e.target.value})
                                            console.log(e.target.value)}}/>
                        <br/>
                    <Form.Label className='label-name'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                    onChange={ (e) => {this.setState({name:e.target.value})
                    console.log(e.target.value)}} />
                        <br/>
                    <Form.Label className='label-password'>Password</Form.Label>
                    <Form.Control type="text" placeholder="Enter password"
                    onChange={ (e) => {this.setState({password:e.target.value})
                    console.log(e.target.value)}} />
                        <br/>
                    <Form.Label className='label-role'>Role</Form.Label>
                    <Form.Control as="select"
                    onChange ={ (e) => {this.setState({role:e.target.value})
                    console.log(e.target.value)}} >
                        <option></option>
                        <option>engineer</option>
                        <option>company</option>
                    </Form.Control>

                  </Form.Group> 
                  <br/>
                  <button className='button-register' size="lg" type='button'
                  onClick = { e => {
                    this.register(e)}}>
                    REGISTER
                  </button>
                  <br/>
                  <Link to = '/login'>
                  <p className="already">Already Have an Account ?
                    </p>
                    </Link>
                </Form>
              </div>
            </div>
            </Grid>
        </Grid>
        );
    }
}

export default Register;