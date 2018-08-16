import mongoose, { Schema } from 'mongoose';

export const PROVIDER_ENUM = ['FACEBOOK', 'GOOGLE'];

const CustomerSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    provider: [
      {
        uid: { required: true, type: String },
        type: { required: true, type: String, enum: PROVIDER_ENUM },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model('Customer', CustomerSchema);
