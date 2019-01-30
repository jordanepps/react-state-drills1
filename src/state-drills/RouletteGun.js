import React, { Component } from 'react';

class RouletteGun extends Component {
	static defaultProps = { loadedChamber: 8 };
	constructor(props) {
		super(props);
		this.state = { chamber: null, spinningTheChamber: false };
	}

	componentWillUnmount() {
		clearTimeout(this.timeOut);
	}

	handleClick = () => {
		this.setState({ spinningTheChamber: true });
		this.timeOut = setTimeout(() => {
			this.setState({
				chamber: Math.ceil(Math.random() * 8),
				spinningTheChamber: false
			});
		}, 2000);
	};

	printRouletteMsg() {
		const bulletInChamber = this.state.chamber === this.props.loadedChamber;
		if (this.state.spinningTheChamber) {
			return 'spinning the chamber and pulling the trigger! ...';
		} else if (bulletInChamber) {
			return 'BANG!!!!';
		} else {
			return "you're safe!";
		}
	}
	render() {
		return (
			<div>
				<p>{this.printRouletteMsg()}</p>
				<button onClick={this.handleClick}>Pull the trigger!</button>
			</div>
		);
	}
}

export default RouletteGun;
