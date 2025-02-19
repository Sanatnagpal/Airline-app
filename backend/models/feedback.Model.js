const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    passenger: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    flightDetails: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"TravelHistory"
    },
    feedback: {
        rating: { type: Number, min: 1, max: 5, required: true },
        comments: { type: String, required: true }
    }
    
},{timestamps:true});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
