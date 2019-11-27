import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export const APP_SECRET = 'MY-APP-SECRET'
const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={React.lazy(() => import('./Pages/Login'))} />
				<Route path="/home" component={React.lazy(() => import('./Pages/Home'))} />
			</Switch>
		</BrowserRouter>
	)
}
export default Routes
