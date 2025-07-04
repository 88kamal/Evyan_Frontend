import { useContext } from 'react';

import myContext from '../context/myContext';
import authService from '../service/authService';
import { useNavigate } from 'react-router-dom';
import ResetPasswordModal from './ResetPasswordModal';
import Layout from './layout/Layout';


const UserProfile = () => {
  const { user, updateAuthState } = useContext(myContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    updateAuthState();
    navigate('/');
  };

  const getInitial = (name) => {
    return name?.charAt(0).toUpperCase() || '';
  };

  return (
    <Layout>

          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      {/* Profile Header */}
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-center">
                          <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-6xl font-bold text-white">
                              {getInitial(user?.name)}
                          </div>
                          <h2 className="mt-6 text-3xl font-bold text-white">{user?.name}</h2>
                          <p className="mt-2 text-blue-100">{user?.email}</p>
                      </div>

                      {/* Profile Details */}
                      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                              <div className="space-y-3">
                                  <div>
                                      <p className="text-sm font-medium text-gray-500">Email</p>
                                      <p className="text-gray-800">{user?.email}</p>
                                  </div>
                                  {user?.mobileNumber && (
                                      <div>
                                          <p className="text-sm font-medium text-gray-500">Phone</p>
                                          <p className="text-gray-800">{user?.mobileNumber}</p>
                                      </div>
                                  )}
                              </div>
                          </div>

                          <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="text-lg font-medium text-gray-900 mb-4">Account Actions</h3>
                              <div className="space-y-4">
                                  <ResetPasswordModal />
                                  <button
                                      onClick={handleLogout}
                                      className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02]"
                                  >
                                      Logout
                                  </button>
                              </div>
                          </div>
                      </div>

                      {/* Additional Info Section */}
                      {user?.bio && (
                          <div className="px-8 pb-8">
                              <div className="bg-gray-50 p-6 rounded-lg">
                                  <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
                                  <p className="text-gray-700">{user.bio}</p>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
    </Layout>
   
  );
};

export default UserProfile;