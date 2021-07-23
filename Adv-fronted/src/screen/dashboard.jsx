import React, { Component } from 'react';
import {Adv_logo} from "../assets/images/index"

class dashboard extends Component {
	render() {
		return (
			<div className="c-dashboard">
				<div className="sidebar">
					<ul>
					 <li>Home</li>
					 <li>Home</li>
					 <li>Home</li>
					 <li>Home</li>
					 <li>Home</li>
					 </ul>
				</div>

				<div className="header">
			     	<img src={Adv_logo}/>
				</div>
				<div className="content">
dddddddddddddddddddd
				</div>
			</div>
		);
	}
}

export default dashboard;