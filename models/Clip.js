import mongoose from 'mongoose';

const ClipSchema = new mongoose.Schema({
	Name: {type: String, required: true},
	VideoUrl: {type: String},
	ImageUrl: {type: String},
});

const Clip = mongoose.model('Clip', ClipSchema);

export default Clip;
