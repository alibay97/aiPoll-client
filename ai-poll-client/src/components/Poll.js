import React from 'react';

const Poll = ({ poll }) => {
  const { title, choiceA, choiceB, deadline, category } = poll;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <h3>Choice A</h3>
        <p>{choiceA.text}</p>
        <p>Votes: {choiceA.votes}</p>
        {choiceA.winner && <p>Winner</p>}
      </div>
      <div>
        <h3>Choice B</h3>
        <p>{choiceB.text}</p>
        <p>Votes: {choiceB.votes}</p>
        {choiceB.winner && <p>Winner</p>}
      </div>
      <p>Deadline: {deadline}</p>
      <p>Category: {category.join(', ')}</p>
    </div>
  );
};

export default Poll;
