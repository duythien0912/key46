import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
	Name: {type: String, required: true},
	FavoriteQuote: {type: String},
	BirthYear: {type: Number},
	BloodType: {type: String},
	TrainingExp: {type: String},
	Height: {type: Number},
	Weight: {type: Number},
	Hobby: {type: String},
	Specialty: {type: String},
	Comment: {type: String},
	Ranking: {type: String},
    ImagePreview: {type: Array},
	ImageAvatar: {type: String},
	ImageGallery: {type: Array}
});

const Member = mongoose.model('Member', MemberSchema);

export {MemberSchema,Member};
