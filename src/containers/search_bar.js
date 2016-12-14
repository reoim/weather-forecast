import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// When we have a callback that we pass to JSX element or
		// DOM element. it makes a reference to 'this' we need to bind the context
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// all event handler function like on change, on click, on hover come along with event object
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event){
		event.preventDefault();

		// fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in you favorite cities"
					className="form-control"
					value={this.state.term}
					onChange ={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);