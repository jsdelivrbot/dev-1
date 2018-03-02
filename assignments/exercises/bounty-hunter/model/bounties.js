const mongoose = require('mongoose');

const BountySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: Number,
    downvotes: Number,
    totalVotes: Number,
    comments: [String]
});

module.exports = mongoose.model("Bounty", BountySchema);