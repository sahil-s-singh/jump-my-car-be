import { UserLocation, IUserLocation } from '../models/UserLocation';

export const createUser = async (data: Partial<IUserLocation>) => {
  const userLocation = new UserLocation(data);
  return await userLocation.save();
};

export const getAllUsers = async () => {
  return await UserLocation.find();
};

export const getUserById = async (id: string) => {
  return await UserLocation.findById(id);
};

export const updateUserById = async (id: string, data: Partial<IUserLocation>) => {
  return await UserLocation.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUserById = async (id: string) => {
  return await UserLocation.findByIdAndDelete(id);
};
