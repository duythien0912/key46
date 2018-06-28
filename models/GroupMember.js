import mongoose from 'mongoose';
import { MemberSchema } from './Member';

var Schema = mongoose.Schema;

const GroupMemberSchema = new Schema({
	Name: {type: String, required: true},
	ImageUrl: {type: String},
	Member: {
    	type: [MemberSchema],
    	required: true
    },
});

const GroupMember = mongoose.model('GroupMember', GroupMemberSchema);

export default GroupMember;
