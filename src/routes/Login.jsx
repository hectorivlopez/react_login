import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className='container login'>
			<LoginForm/>
			<Link to="/signup">Sign up</Link>
		</div>
	)
}

export default Login