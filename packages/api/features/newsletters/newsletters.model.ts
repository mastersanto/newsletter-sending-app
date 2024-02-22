import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.model('newsletters', NewsletterSchema);