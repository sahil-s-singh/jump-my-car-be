import mongoose, { Schema, Document } from 'mongoose';

export interface IUserLocation extends Document {
  userId: string; // The user identifier
  location: {
    latitude: number;
    longitude: number;
  };
}

const UserLocationSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
}, {
  timestamps: true,
});

export const UserLocation = mongoose.model<IUserLocation>('UserLocation', UserLocationSchema);
