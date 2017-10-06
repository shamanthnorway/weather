import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state ={term:''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({term:event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    className="form-control"
                    onChange={this.onInputChange}
                    placeholder="Get a five day forcast in your favorite city"
                    value={this.state.term}
                />
                <span className="input-group-btn" >
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);