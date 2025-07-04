import React, { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Eye, EyeOff, X } from 'lucide-react';
import myContext from '../context/myContext';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Button,
  IconButton,
  Typography
} from '@material-tailwind/react';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { updateAuthState } = useContext(myContext);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Processing...');
    try {
      const baseURL = import.meta.env.VITE_BACKEND_HOST_URL;
      const url = isSignup
        ? `${baseURL}/api/v1/user/signup`
        : `${baseURL}/api/v1/user/login`;

      const payload = isSignup ? formData : { email: formData.email, password: formData.password };
      const res = await axios.post(url, payload);

      if (!isSignup && typeof res.data === 'string') {
        localStorage.setItem('token', JSON.stringify(res.data));
        toast.success('Login Successful!', { id: toastId });
        updateAuthState();
        setIsOpen(false);
      } else {
        toast.success(res.data.message || 'Signup Successful', { id: toastId });
        setIsSignup(false);
      }
    } catch (error) {
      const msg = error.response?.data?.error || 'Something went wrong';
      setIsOpen(false);
      toast.error(msg, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        color="blue"
        size="sm"
        className="font-medium"
      >
        {isSignup ? 'Signup' : 'Login'}
      </Button>

      <Dialog open={isOpen} handler={() => setIsOpen(false)}>
        <DialogHeader className="flex justify-between items-center">
          <Typography variant="h4" color="blue-gray">
            {isSignup ? 'Signup' : 'Login'}
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </IconButton>
        </DialogHeader>

        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <>
                <Input
                  type="text"
                  name="name"
                  label="Full Name"
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="mobileNumber"
                  label="Mobile Number"
                  onChange={handleInputChange}
                  required
                  maxLength={10}
                />
              </>
            )}

            <Input
              type="email"
              name="email"
              label="Email"
              onChange={handleInputChange}
              required
            />

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                onChange={handleInputChange}
                required
                icon={
                  <IconButton
                    variant="text"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </IconButton>
                }
              />
            </div>

            <Button
              type="submit"
              color="blue"
              fullWidth
              disabled={loading}
            >
              {loading ? 'Processing...' : isSignup ? 'Signup' : 'Login'}
            </Button>
          </form>
        </DialogBody>

        <DialogFooter className="justify-center">
          <Typography variant="small" className="text-center">
            {isSignup ? 'Already have an account?' : 'Don’t have an account?'}{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline font-medium"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Login' : 'Signup'}
            </button>
          </Typography>
        </DialogFooter>
      </Dialog>
    </>
  );
}