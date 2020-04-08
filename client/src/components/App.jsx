import React from 'react';
import axios from 'axios';
import PollForm from './PollForm.jsx';
import PollList from './PollList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
    };
    this.setPoll = this.setPoll.bind(this);
    this.upvotePoll = this.upvotePoll.bind(this);
  }

  componentDidMount() {
    this.setPoll();
  }

  setPoll() {
    this.getPolls()
      .then((polls) => {
        this.setState({
          polls,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getPolls() {
    return axios.get('/api/polls')
      .then((response) => {
        return response.data;
      });
      // .then((polls) => {
      //   this.setState({
      //     polls: polls.data,
      //   });
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
  }

  savePoll(name, options) {
    return axios.post('/api/polls', {
      name,
      options,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  upvotePoll(pollId, optionId) {
    // debugger;
    return axios.patch(`/api/polls/${pollId}/options/${optionId}`)
      .then((response) => {
        console.log(response);
        this.setPoll();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const { polls } = this.state;
    return (
      <div>
        <h1>Polling App</h1>
        <PollForm onSubmit={this.savePoll} />
        <PollList onUpvote={this.upvotePoll} polls={polls} />
      </div>
    );
  }
}

export default App;
