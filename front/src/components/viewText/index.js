import React, { useState } from 'react';
import './viewText.css';

class viewText extends React.Component {
    constructor() {
      super();
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
      this.title = {
        value : "First Text"
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className = "viewText_main">
          <form className = "viewText_form" onSubmit={this.handleSubmit}>
            <p>
              <label> 제목: 
                <input className = "viewText_text" type = "text" name="title" value = {this.title.value}></input>
              </label>
            </p>
            <p>
              <textarea value={this.state.value} />
            </p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

  export default viewText;