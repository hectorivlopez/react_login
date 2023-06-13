import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const LoginForm = () => {
	const navigate = useNavigate()

	/* Form variables */
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	/* Alert control */
	const [infoCorrect, setInfoCorrect] = useState(true)

	function handleSubmit(e) {
		e.preventDefault()

		const url = 'http://localhost:3000/login.php'

		let loginData = new FormData()
		loginData.append('email', email)
		loginData.append('password', password)

		axios.post(url, loginData)
			.then(response => {
				if (response.data) {
					setInfoCorrect(true)
					navigate('/', { state: { user: response.data } })
				}
				else {
					setInfoCorrect(false)
				}
			})
	}


	return (
		<form className='form' onSubmit={(e) => handleSubmit(e)}>
			<h1>Iniciar Sesión</h1>

			<h4 className={`alert ${infoCorrect ? 'hidden' : ''}`}>Correo o contraseña incorrectos</h4>

			<div className="field">
				<label htmlFor="email">Correo</label>
				<input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
			</div>

			<div className="field">
				<label htmlFor="password">Contraseña</label>
				<input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
			</div>

			<button type='submit' className='button'>Iniciar Sesión</button>
		</form>
	)
}

export default LoginForm