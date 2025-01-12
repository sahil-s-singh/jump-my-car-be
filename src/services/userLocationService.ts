import { UserLocation, IUserLocation } from '../models/UserLocation';

export const updateLocation = async (userId: string, data: Partial<IUserLocation>) => {
    const location = await UserLocation.findOneAndUpdate(
        { userId },
        data,
        { new: true, upsert: true }
    );
    return location;
};
