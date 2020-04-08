const mongoose = require('mongoose');


const MONGO_URI = 'mongodb://localhost/pollItUp';

mongoose.connect(MONGO_URI, { useNewUrlParser: true });


const Poll = mongoose.model('Poll', {
  name: String,
  options: [
    {
      name: String,
      votes: Number,
    },
  ],
});

const savePoll = (name, options) => {
  const formattedOptions = options.map((option) => {
    return {
      name: option,
      votes: 0,
    };
  });
  const newPoll = new Poll({
    name,
    options: formattedOptions,
  });

  return newPoll.save();
};

const getPolls = () => {
  // MyModel.find({ name: 'john', age: { $gte: 18 }});
  return Poll.find({}).exec();
};

const upvotePollOption = (pollId, optionId) => {
  return Poll.findById(pollId).exec()
    .then((poll) => {
      const { options } = poll;
      const optionIndex = options.findIndex((option) => {
        return option._id.equals(optionId);
      });

      return Poll.updateOne(
        { _id: pollId },
        {
          $inc: {
            [`options.${optionIndex}.votes`]: 1,
          },
        },
      ).exec();
    });
};

module.exports = {
  savePoll,
  getPolls,
  upvotePollOption,
};
