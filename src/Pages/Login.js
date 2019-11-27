import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SIGNIN } from '../Apollo/gql'
import Loader from 'Components/Loader'
import { useHistory } from 'react-router-dom'
import { setRefreshToken } from '../utils'
const Login = () => {
	let history = useHistory()
	const [email, setEmail] = useState('ss@mail.com')
	const [password, setPassword] = useState('123456')
	const [error, setError] = useState()
	const [login, { loading }] = useMutation(SIGNIN, {
		onCompleted(data) {
			console.log(data)
			const {
				login: { accessToken, refreshToken }
			} = data
			localStorage.setItem('accessToken', accessToken)
			// document.cookie = `refreshToken=${refreshToken}; `
			setRefreshToken(refreshToken)
			// history.push('/home')
		},
		onError(error) {
			console.log(error.graphQLErrors)
			setError(error.graphQLErrors[0].message)
		}
	})

	const formSubmit = async e => {
		setError(null)
		login({ variables: { input: { email, password } } })
	}

	return (
		<>
			<div className="main_form_container">
				<span className="form_header">Login</span>
				<input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="email" />
				<input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="password" />
				{!loading ? <button onClick={formSubmit}>>>></button> : <Loader color="#54888a" />}
				{error ? <h4 style={{ color: 'red', margin: '4px auto' }}>{error}</h4> : undefined}
			</div>
		</>
	)
}

export default Login
