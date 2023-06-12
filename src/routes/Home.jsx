import React from 'react'
import logo from '../img/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Home = ({user}) => {
	const navigate = useNavigate()
	const location = useLocation()

	function logout() {
		navigate('/', {state: null})
	}

	return (
		<div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>{location.state !== null ? 'Bienvenido ' + location.state.user.firstName : 'React'}</h1>
				<div className="home-buttons">
					<Link to='/signup' className={`home-button ${location.state !== null ? 'hidden' : ''}`}>Registrarse</Link>
					<Link to='/login' className={`home-button ${location.state !== null ? 'hidden' : ''}`}>Iniciar sesión</Link>
					<button className={`home-button ${location.state === null ? 'hidden' : ''}`} onClick={logout}>Cerrar sesión</button>

				</div>
			</header>
		</div>
	)
}

export default Home