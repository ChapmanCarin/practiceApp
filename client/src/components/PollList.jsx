import React from 'react';
import PollListItem from './PollListItem.jsx';

const PollList = ({ polls, onUpvote }) => {
  return (
    <ul>
      {polls.map((poll) => {
        return <PollListItem onUpvote={onUpvote} key={poll._id} poll={poll} />;
      })}
      {/* <PollListItem />
      <PollListItem />
      <PollListItem />
      <PollListItem />
      <PollListItem /> */}
    </ul>
  );
};

export default PollList;
