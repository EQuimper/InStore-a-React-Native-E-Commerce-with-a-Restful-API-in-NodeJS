export const buildAddress = address =>
  address.address_components.reduce((acc, current) => {
    const value = current.long_name;

    if (current.types.includes('street_number')) {
      acc.street = value;
    }

    if (current.types.includes('route')) {
      if (acc.street) {
        acc.street += ' ' + value;
      } else {
        acc.street = value;
      }
    }

    if (current.types.includes('administrative_area_level_1')) {
      acc.province = value;
    }

    if (current.types.includes('country')) {
      acc.country = value;
    }

    if (current.types.includes('postal_code')) {
      acc.postalCode = value;
    }

    if (current.types.includes('locality')) {
      acc.city = value;
    }

    acc.geo = address.geometry.location;

    return acc;
  }, {});
