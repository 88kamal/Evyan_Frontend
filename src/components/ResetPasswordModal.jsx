import React, { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';
import authService from '../service/authService';
import myContext from '../context/myContext';
import { useNavigate } from 'react-router-dom';

// 🔒 Separated password field to prevent remounting
const PasswordInput = ({ name, label, value, onChange, show, toggle }) => (
  <div className="relative">
    <input
      type={show ? 'text' : 'password'}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
      required
      minLength="6"
    />
    <button
      type="button"
      onClick={toggle}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
    >
      {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
);

const ResetPasswordModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [loading, setLoading] = useState(false);
  const { updateAuthState } = useContext(myContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleShow = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setShowPassword({ old: false, new: false, confirm: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = formData;

    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill all fields.');
      return;
    }

    if (newPassword.length < 6) {
      toast.error('Password should be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem('token'));
      if (!token) {
        toast.error('Authentication token missing. Please login again.');
        return;
      }

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/api/v1/user/change-password`,
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.data?.message) {
        toast.success(res.data.message);
        closeModal();
        authService.logout();
        updateAuthState();
        navigate('/');
      } else {
        throw new Error('Unexpected response');
      }
    } catch (err) {
      const message =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        'Something went wrong';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      >
        Change Password
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Change Password
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <PasswordInput
                name="oldPassword"
                label="Old Password"
                value={formData.oldPassword}
                onChange={handleChange}
                show={showPassword.old}
                toggle={() => toggleShow('old')}
              />
              <PasswordInput
                name="newPassword"
                label="New Password (min 6 characters)"
                value={formData.newPassword}
                onChange={handleChange}
                show={showPassword.new}
                toggle={() => toggleShow('new')}
              />
              <PasswordInput
                name="confirmPassword"
                label="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                show={showPassword.confirm}
                toggle={() => toggleShow('confirm')}
              />

              <div className="flex justify-between items-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 disabled:opacity-60"
                >
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={loading}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPasswordModal;