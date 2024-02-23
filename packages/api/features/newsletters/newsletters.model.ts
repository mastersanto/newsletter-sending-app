import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Newsletters', NewsletterSchema);