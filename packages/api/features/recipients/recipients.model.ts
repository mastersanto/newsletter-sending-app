import mongoose from 'mongoose';

const RecipientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Recipients', RecipientsSchema);