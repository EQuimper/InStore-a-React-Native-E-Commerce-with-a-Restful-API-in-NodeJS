import mongoose, { Schema } from 'mongoose';

export const PROVIDER_ENUM = ['FACEBOOK', 'GOOGLE'];

const CustomerSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
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

CustomerSchema.index({ email: 1 });

export default mongoose.model('Customer', CustomerSchema);
