import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { State, City } from 'country-state-city';

const productOptions = [
  { value: 'laptop', label: 'Laptop' },
  { value: 'smartphone', label: 'Smartphone' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'camera', label: 'Camera' },
];

const Enquiry = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptionsList, setCityOptionsList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    state: null,
    city: null,
    product: null,
  });

  useEffect(() => {
    const indiaStates = State.getStatesOfCountry('IN');
    const formattedStates = indiaStates.map(state => ({
      value: state.isoCode,
      label: state.name,
    }));
    setStateOptions(formattedStates);
  }, []);

  useEffect(() => {
    if (formData.state) {
      const cities = City.getCitiesOfState('IN', formData.state.value);
      const formattedCities = cities.map(city => ({
        value: city.name,
        label: city.name,
      }));
      setCityOptionsList(formattedCities);
      setFormData(prev => ({ ...prev, city: null }));
    } else {
      setCityOptionsList([]);
    }
  }, [formData.state]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I would like to enquire about the following product:\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nState: ${formData.state?.label}\nCity: ${formData.city?.label}\nProduct: ${formData.product?.label}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+918292417430&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setFormData({
      name: '',
      mobile: '',
      state: null,
      city: null,
      product: null,
    });
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 relative">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-semibold text-gray-800">Enquiry Form</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-600 transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleChange('mobile', e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <Select
                  options={stateOptions}
                  value={formData.state}
                  onChange={(option) => handleChange('state', option)}
                  isSearchable
                  placeholder="Select State"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <Select
                  options={cityOptionsList}
                  value={formData.city}
                  onChange={(option) => handleChange('city', option)}
                  isSearchable
                  isDisabled={!formData.state}
                  placeholder={!formData.state ? "Select State First" : "Select City"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                <Select
                  options={productOptions}
                  value={formData.product}
                  onChange={(option) => handleChange('product', option)}
                  isSearchable
                  placeholder="Select Product"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md hover:opacity-90 transition shadow-lg"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
