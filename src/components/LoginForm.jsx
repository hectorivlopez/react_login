import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom'


const LoginForm = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [infoCorrect, setInfoCorrect] = useState(true)

	function handleSubmit(e) {
		e.preventDefault()
		

		const url = 'http://localhost:3000/login.php'

		let loginData = new FormData()
		loginData.append('email', email)
		loginData.append('password', password)
		
		axios.post(url, loginData)
			.then(response => {
				if(response.data) {
					setInfoCorrect(true)
					navigate('/', {state: {user: response.data}})
				}
				else {
					setInfoCorrect(false)

				}
			})
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<h1>Log in</h1>

			<h4 className={`alert ${infoCorrect ? 'hidden' : ''}`}>Correo o contraseña incorrectos</h4>
			
			<div className="field">
				<label htmlFor="email">Email</label>
				<input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
			</div>

			<div className="field">
				<label htmlFor="password">Password</label>
				<input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
			</div>

			<button type='submit' className='button'>LOGIN</button>
		</form>
	)
}

export default LoginForm