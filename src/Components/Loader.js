import React from 'react'
import './Loader.css'
const Loader = props => {
	return (
		<div className="loader_main">
			<div className="loader_all">
				<span className="dot" style={{ backgroundColor: props.color }}></span>
				<span className="dot" style={{ backgroundColor: props.color }}></span>
				<span className="dot" style={{ backgroundColor: props.color }}></span>
			</div>
		</div>
	)
}

export default Loader
