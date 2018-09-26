import Address from './address.model';

export const createAddress = async data => {
  try {
    const address = await Address.create({
      ...data,
      geo: {
        type: 'Point',
        coords: [data.geo.lng, data.geo.lat],
      },
    });

    return address;
  } catch (error) {
    throw error;
  }
};

export const getUserAddresses = async userId => {
  try {
    const addresses = await Address.find({ user: userId });

    return addresses;
  } catch (error) {
    throw error;
  }
};

export const updateAddress = async (addressId, newAddressValues, userId) => {
  try {
    const address = await Address.findById(addressId);

    if (!address) {
      throw new Error('Address not exist');
    }

    if (address.user.toString() !== userId.toString()) {
      throw new Error('Unauthorized');
    }

    Object.keys(newAddressValues).forEach(key => {
      if (key === 'geo') {
        address.geo.coords = [
          newAddressValues[key].lng,
          newAddressValues[key].lat,
        ];
      } else if (key === 'postalCode') {
        address.postalCode = newAddressValues[key].replace(/\s/g, '');
      } else {
        address[key] = newAddressValues[key];
      }
    });

    await address.save();

    return address;
  } catch (error) {
    throw error;
  }
};

export const deleteAddress = async (addressId, userId) => {
  try {
    const address = await Address.findById(addressId);

    if (!address) {
      throw new Error('Address not exist');
    }

    if (address.user.toString() !== userId.toString()) {
      throw new Error('Unauthorized');
    }

    return address.remove();
  } catch (error) {
    throw error;
  }
};
