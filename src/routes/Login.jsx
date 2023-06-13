import React from 'react'
import { Link } from 'react-router-dom'

import arrowLeft from '../img/arrow-left.svg'

import LoginForm from '../components/LoginForm'

const Login = () => (
	<div className='container'>
		<div className="navigation">
			<Link to='/' className='arrow-link'>
				<img src={arrowLeft} alt="" />
			</Link>

			<Link to='/signup' className='signup-link home-button'>
				Registrarse
			</Link>
		</div>

		<LoginForm />
	</div>
)

export default Login