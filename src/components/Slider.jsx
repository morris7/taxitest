import React, { Component } from "react";
import PropTypes from 'prop-types';

class Slider extends Component {

    constructor(props){
        super(props);

        this.state = {
            sliderValue: 10
        }

        this.updateValue = this.updateValue.bind(this);
        this.search = this.search.bind(this);
    }

    render() {
        const mapStyles = {
          position: 'absolute',
          top: '600px'
        }
        const {min, max} = this.props;
        return (
            <form style={mapStyles}>
                <input type="range" min={min} max={max} value={this.state.sliderValue} className="slider" id="carcount"
                    onChange={this.updateValue}/>
                <span>{this.state.sliderValue}</span>
                <button onClick={this.search}>Update search...</button>
            </form>
        );
    }

    updateValue(event, value){
        let { target } = event;

        this.setState({ sliderValue: target.value });
    }

    search(e){
      e.preventDefault();
      this.props.callback(this.state.sliderValue);
    }
}

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  callback: PropTypes.func
}

export default Slider;
