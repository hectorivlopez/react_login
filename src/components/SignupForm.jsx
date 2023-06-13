import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SignupForm = () => {
	/* Form variables */
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [color, setColor] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confPassword, setConfPassword] = useState('')

	/* Alert control */
	const [infoCorrect, setInfoCorrect] = useState(true)
	const [alertText, setAlertText] = useState('')

	/* User registered state */
	const [user, setUser] = useState(null)

	function handleSubmit(e) {
		e.preventDefault()
		console.log(email)

		if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0 || confPassword.length === 0) {
			setAlertText('Todos los campos son obligatorios')
			setInfoCorrect(false)
		}
		else {
			if (password !== confPassword) {
				setAlertText('Las contraseñas deben ser iguales')
				setInfoCorrect(false)
			}
			else {
				setInfoCorrect(true)

				const url = 'http://localhost:3000/signup.php'

				let loginData = new FormData()
				loginData.append('firstName', firstName)
				loginData.append('lastName', lastName)
				loginData.append('color', color)
				loginData.append('email', email)
				loginData.append('password', password)

				axios.post(url, loginData)
					.then(response => {
						if (response.data) {
							setInfoCorrect(true)
							setUser(response.data)
						}
						else {
							setAlertText('Usuario ya registrado')
							setInfoCorrect(false)
						}
					})
			}
		}
	}

	if (user !== null) {
		return (
			<div className="signup-card">
				<h1>Usuario registrado correctamente</h1>

				<Link to='/' state={{ user: user }} className='home-button'>Continuar</Link>
			</div>
		)
	}
	else {
		return (
			<form className='form' onSubmit={(e) => handleSubmit(e)}>
				<h1>Crear cuenta</h1>

				<h4 className={`alert ${infoCorrect ? 'hidden' : ''}`}>{alertText}</h4>

				<div className="field">
					<label htmlFor="firstName">Nombre</label>
					<input type="text" name='firstName' id='firstName' onChange={(e) => { setFirstName(e.target.value) }} />
				</div>

				<div className="field">
					<label htmlFor="lastName">Apellido</label>
					<input type="text" name='lastName' id='lastName' onChange={(e) => { setLastName(e.target.value) }} />
				</div>

				<div className="field">
					<label htmlFor="lastName">Apellido</label>
					<select name="color" id="color" defaultValue={'default'} onChange={e => { setColor(e.target.value) }}>
						<option value="default" id='default' disabled>Seleccionar color</option>
						<option value="green">Verde</option>
						<option value="red">Rojo</option>
						<option value="yellow">Amarillo</option>
					</select>
				</div>

				<div className="field">
					<label htmlFor="email">Correo</label>
					<input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
				</div>

				<div className="field">
					<label htmlFor="password">Contraseña</label>
					<input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
				</div>

				<div className="field">
					<label htmlFor="confPass">Confirmar Contraseña</label>
					<input type="password" name='confPass' id='confPass' onChange={(e) => { setConfPassword(e.target.value) }} />
				</div>

				<button type='submit' className='button'>Registrarse</button>
			</form>
		)
	}
}

export default SignupForm