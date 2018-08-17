import Customer from './customer.model';
import { buildCustomerInfo } from './buildCustomerInfo';

export const getOrCreateCustomer = async (info, providerName) => {
  const customerInfo = buildCustomerInfo(info, providerName);

  try {
    const _customer = await Customer.findOne({ email: customerInfo.email });

    const { provider, ...userInfo } = customerInfo;

    if (!_customer) {
      const customer = await Customer.create({
        ...userInfo,
        provider: [provider],
      });

      return customer;
    }

    const providerExist = _customer.provider.find(
      el =>
        el.uid === customerInfo.provider.uid &&
        el.type === customerInfo.provider.type,
    );

    if (providerExist) {
      return _customer;
    }

    _customer.provider.push(customerInfo.provider);

    await _customer.save();

    return _customer;
  } catch (error) {
    throw error;
  }
};
