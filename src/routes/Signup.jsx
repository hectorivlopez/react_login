import React from 'react'
import { Link } from 'react-router-dom'

import arrowLeft from '../img/arrow-left.svg'

import SignupForm from '../components/SignupForm'

const Signup = () => (
	<div className='container'>
		<div className="navigation">
			<Link to='/' className='arrow-link'>
				<img src={arrowLeft} alt="" />
			</Link>
		</div>
		<SignupForm />
	</div>
)

export default Signup