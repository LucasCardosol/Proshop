import React , {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails } from '../actions/userActions'

function ProfileScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    let location = useLocation()
    let navigate = useNavigate()
    
      
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const {error, loading , user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
      
    useEffect(() => {
      if(!userInfo){
        navigate('/login')
      }else{
        if(!user || !user.name){
            dispatch(getUserDetails('profile'))
        }else{
            setName(user.name)
            setEmail(user.email)
        }
      }
    }, [dispatch, userInfo, navigate, user])
      
    const submitHandler = (e) => {
        e.preventDefault()

        if(password != confirmPassword){
            setMessage('Passwords do not match')
        }else{
            console.log('updating...')
        } 
    }

  return (
    <Row>
        <Col md={3}>
        <h1>Sign In</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control 
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
        </Col>

        <Col md={3}>
            <h2>My Orders</h2>
        </Col>

        <Col md={3}>
            <h2>User Profile</h2>
        </Col>
    </Row>
  )
}

export default ProfileScreen