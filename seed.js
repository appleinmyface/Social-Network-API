const mongoose = require('mongoose');
const { User, Thought } = require('./models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork', {
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const seedUsers = [
  {
    username: 'johnDoe',
    email: 'john.doe@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'janeDoe',
    email: 'jane.doe@example.com',
    thoughts: [],
    friends: [],
  },
];

const seedThoughts = [
  {
    thoughtText: 'This is a cool thought!',
    username: 'johnDoe',
    reactions: [
      {
        reactionBody: 'I agree!',
        username: 'janeDoe',
      },
    ],
  },
  {
    thoughtText: 'Loving this API!',
    username: 'janeDoe',
    reactions: [
      {
        reactionBody: 'Me too!',
        username: 'johnDoe',
      },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(seedUsers);

    for (let i = 0; i < seedThoughts.length; i++) {
      const thought = seedThoughts[i];
      const user = createdUsers.find(u => u.username === thought.username);

      if (user) {
        const createdThought = await Thought.create(thought);
        user.thoughts.push(createdThought._id);
        await user.save();
      }
    }

    console.log('Database seeded successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedDatabase();
