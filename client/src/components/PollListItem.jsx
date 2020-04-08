import React from 'react';

const PollListItem = ({ poll, onUpvote }) => {
  return (
      <li>
        {poll.name}
        {/* i am hardcoded polllistitem */}
        <ol>
          {poll.options.map((option) => (
          <li>
            {option.name} : {option.votes}
            <button onClick={() => (onUpvote(poll._id, option._id))}>Upvote!</button>
          </li>
          ))}
        </ol>
      </li>
  );
};

export default PollListItem;
