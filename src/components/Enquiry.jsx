// src/components/Enquiry.jsx
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
import { useSubmitProductQueryMutation } from "../redux/slices/productQuerySlice";

const productOptions = [
  { value: 'EVYAN JANTA', label: 'EVYAN JANTA' },
  { value: 'EVYAN (MS)', label: 'EVYAN (MS)' },
  { value: 'EVYAN (SS)', label: 'EVYAN (SS)' },
  { value: 'EVYAN LI (MS)', label: 'EVYAN LI (MS)' },
  { value: 'EVYAN LI (SS)', label: 'EVYAN LI (SS)' },
  { value: 'EVYAN GOLD (Auto Facia)', label: 'EVYAN GOLD (Auto Facia)' },
  { value: 'EVYAN GOLD LI (Auto Facia)', label: 'EVYAN GOLD LI (Auto Facia)' },
  { value: 'EVYAN GOLD Premium li', label: 'EVYAN GOLD Premium li' },
  { value: 'EVYAN LOADKRO (OPEN)', label: 'EVYAN LOADKRO (OPEN)' },
  { value: 'EVYAN LOADKRO (CLOSED)', label: 'EVYAN LOADKRO (CLOSED)' },
  { value: 'EVYAN LOADKRO LI', label: 'EVYAN LOADKRO LI' },
  { value: 'EVYAN GARBAGE (Semi-Hydraulic)', label: 'EVYAN GARBAGE (Semi-Hydraulic)' },
  { value: 'EVYAN GARBAGE (Hydraulic)', label: 'EVYAN GARBAGE (Hydraulic)' },
  { value: 'L5M', label: 'L5M' },
  { value: 'L5N - CLOSED', label: 'L5N - CLOSED' },
  { value: 'L5N - OPEN', label: 'L5N - OPEN' }
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

  const [submitProductQuery, { isLoading }] = useSubmitProductQueryMutation();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitProductQuery({
        name: formData.name,
        mobile: formData.mobile,
        state: formData.state?.label,
        city: formData.city?.label,
        product: formData.product?.label,
      }).unwrap();

      alert("✅ Enquiry submitted successfully!");
      setOpen(false);
      setFormData({ name: '', mobile: '', state: null, city: null, product: null });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit enquiry");
    }
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
        <Button color="blue" onClick={handleSubmit} className="w-full" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Enquiry;
