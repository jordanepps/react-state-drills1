import React, { Component } from 'react';

class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = { who: 'world' };
	}

	handleClick = e => {
		this.setState({ who: e.target.textContent });
	};

	render() {
		const buttons = ['friend', 'react', 'world'].map((word, index) => (
			<button onClick={this.handleClick} key={index}>
				{word}
			</button>
		));
		return (
			<div>
				<p>Hello, {this.state.who}!</p>
				{buttons}
			</div>
		);
	}
}

export default HelloWorld;
