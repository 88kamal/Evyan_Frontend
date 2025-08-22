import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { State, City } from 'country-state-city';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";

const productOptions = [
  { value: 'L5N - OPEN', label: 'L5N - OPEN' },
  { value: 'EVYAN GARBAGE-Semi-Hydraulic', label: 'EVYAN GARBAGE-Semi-Hydraulic' },
  { value: 'EVYAN GARBAGE-Hydraulic', label: 'EVYAN GARBAGE-Hydraulic' },
  { value: 'Evyan Passenger E-Rickshaw', label: 'Evyan Passenger E-Rickshaw' },
  { value: 'Evyan Cargo E-Rickshaw', label: 'Evyan Cargo E-Rickshaw' },
  { value: 'Evyan School E-Rickshaw', label: 'Evyan School E-Rickshaw' },
  { value: 'Evyan Premium Passenger Model', label: 'Evyan Premium Passenger Model' },
  { value: 'Evyan Heavy-Duty Cargo Carrier', label: 'Evyan Heavy-Duty Cargo Carrier' },
  { value: 'Evyan Smart School Van', label: 'Evyan Smart School Van' },
  { value: 'Evyan Metro Shuttle', label: 'Evyan Metro Shuttle' },
  { value: 'Evyan Solar Hybrid Rickshaw', label: 'Evyan Solar Hybrid Rickshaw' },
  { value: 'Evyan Cold Storage Carrier', label: 'Evyan Cold Storage Carrier' },
  { value: 'Evyan Mini Delivery EV', label: 'Evyan Mini Delivery EV' },
  { value: 'Evyan Tourist Ride Model', label: 'Evyan Tourist Ride Model' },
  { value: 'Evyan Smart City Passenger', label: 'Evyan Smart City Passenger' },
  { value: 'Evyan Water Bottle Carrier', label: 'Evyan Water Bottle Carrier' },
  { value: 'Evyan MetroFeeder XL', label: 'Evyan MetroFeeder XL' },
  { value: 'Evyan Ambulance E-Rickshaw', label: 'Evyan Ambulance E-Rickshaw' },
  { value: 'Evyan Waste Collection Rickshaw', label: 'Evyan Waste Collection Rickshaw' },
  { value: 'Evyan Battery Swap Variant', label: 'Evyan Battery Swap Variant' },
  { value: 'Evyan Compact EcoRide', label: 'Evyan Compact EcoRide' },
];

const Enquiry = () => {
  const [open, setOpen] = useState(true);
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
    const states = State.getStatesOfCountry('IN');
    setStateOptions(states.map((state) => ({
      value: state.isoCode,
      label: state.name
    })));
  }, []);

  useEffect(() => {
    if (formData.state) {
      const cities = City.getCitiesOfState('IN', formData.state.value);
      setCityOptionsList(cities.map((city) => ({
        value: city.name,
        label: city.name,
      })));
      setFormData((prev) => ({ ...prev, city: null }));
    } else {
      setCityOptionsList([]);
    }
  }, [formData.state]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I would like to enquire about the following product:\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nState: ${formData.state?.label}\nCity: ${formData.city?.label}\nProduct: ${formData.product?.label}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919311859995&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setOpen(false);
    setFormData({
      name: '',
      mobile: '',
      state: null,
      city: null,
      product: null,
    });
  };

  return (
    <Dialog open={open} handler={setOpen} size="sm">
      <DialogHeader className="justify-between">
        <Typography variant="h5">Enquiry Form</Typography>
        <IconButton variant="text" color="blue-gray" onClick={() => setOpen(false)}>✕</IconButton>
      </DialogHeader>

      <DialogBody className="space-y-4">
        <Input
          label="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />
        <Input
          label="Mobile"
          value={formData.mobile}
          type="tel"
          pattern="[0-9]{10}"
          onChange={(e) => handleChange("mobile", e.target.value)}
          required
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <Select
            options={stateOptions}
            value={formData.state}
            onChange={(opt) => handleChange("state", opt)}
            placeholder="Select State"
            isSearchable
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <Select
            options={cityOptionsList}
            value={formData.city}
            onChange={(opt) => handleChange("city", opt)}
            placeholder={!formData.state ? "Select State First" : "Select City"}
            isSearchable
            isDisabled={!formData.state}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
          <Select
            options={productOptions}
            value={formData.product}
            onChange={(opt) => handleChange("product", opt)}
            placeholder="Select Product"
            isSearchable
          />
        </div>
      </DialogBody>

      <DialogFooter>
        <Button
          color="blue"
          onClick={handleSubmit}
          className="w-full"
        >
          Submit Enquiry
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Enquiry;
