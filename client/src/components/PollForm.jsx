import React from 'react';
import axios from 'axios';

class PollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      options: [],
      newOption: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ newOption: event.target.value });
  }

  handleAddOption() {
    const { options, newOption } = this.state;
    const newOptions = options.concat(newOption);
    // options.push(newOption);

    this.setState({
      // options,
      options: newOptions,
    });
  }

  handleSave() {
    const { onSubmit } = this.props;
    const { name, options } = this.state;

    onSubmit(name, options);
  }

  render() {
    const { name, newOption, options } = this.state;
    return (
      <div>
        <div>
          <h1>Name:</h1>
          <input
            type="text"
            placeholder="poll name"
            value={name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <h1>Option:</h1>
          <input
            type="text"
            value={newOption}
            placeholder="poll option"
            onChange={this.handleOptionChange}
          />
          <button onClick={this.handleAddOption}>Add Option</button>
          <ul>
            {options.map((option) => {
              return (
                <li key={option}>{option}</li>
              );
            })}
          </ul>
        </div>
        <button onClick={this.handleSave}>Save!</button>
      </div>
    );
  }
}

export default PollForm;


// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }