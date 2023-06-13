import React from 'react'
import logo from '../img/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const user = location.state === null ? null : location.state.user

	function logout() {
		navigate('/', { state: null })
	}

	return (
		<div className="App-header">
			<img src={logo} className={`App-logo ${user !== null ? user.color : ''}`} alt="logo" />

			<h1>{user !== null ? `Bienvenido ${user.firstName} ${user.lastName}` : 'React'}</h1>

			<div className="home-buttons">
				<Link to='/signup' className={`home-button ${location.state !== null ? 'hidden' : ''}`}>Registrarse</Link>

				<Link to='/login' className={`home-button ${location.state !== null ? 'hidden' : ''}`}>Iniciar sesión</Link>

				<button className={`home-button ${location.state === null ? 'hidden' : ''}`} onClick={logout}>Cerrar sesión</button>
			</div>
		</div>
	)
}

export default Home