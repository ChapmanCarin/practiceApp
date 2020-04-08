const express = require('express');
const { savePoll, getPolls, upvotePollOption } = require('../server/db/index');

const apiRouter = express.Router();

apiRouter.post('/polls', (req, res) => {
  debugger;
  const { name, options } = req.body;
  savePoll(name, options)
    .then(() => {
      console.log('new poll saved');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('new poll did not save', err);
      res.sendStatus(500);
    });
});

apiRouter.get('/polls', (req, res) => {
  getPolls()
    .then((polls) => {
      res.status(201).send(polls);
    })
    .catch((err) => {
      console.log('failed to retrieve polls', err);
      res.sendStatus(500);
    });
});

apiRouter.patch('/polls/:pollId/options/:optionId', (req, res) => {
  // debugger;
  const { pollId, optionId } = req.params;

  upvotePollOption(pollId, optionId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log('Failed to upvote poll option', error);
      res.sendStatus(500);
    });
});

module.exports = {
  apiRouter,
};
