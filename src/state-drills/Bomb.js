import React, { Component } from 'react';

class Bomb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			});
			if (this.state.count >= 8) clearInterval(this.interval);
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	printBombMsg() {
		let msg = this.state.count % 2 === 0 ? 'tick' : 'tock';
		if (this.state.count === 8) msg = 'BOOM!!!';
		return msg;
	}

	render() {
		return (
			<div>
				<p>{this.printBombMsg()}</p>
			</div>
		);
	}
}

export default Bomb;
