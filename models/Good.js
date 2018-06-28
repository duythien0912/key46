import mongoose from 'mongoose';

const GoodSchema = new mongoose.Schema({
	Name: {type: String, required: true},
	Price: {type: Number},
	ImageUrl: {type: String}
});

const Good = mongoose.model('Good', GoodSchema);

export default Good;
