/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  IconButton,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Edit, X } from "lucide-react";
import toast from "react-hot-toast";
import { useUpdateUserMutation } from "../../../../redux/slices/authSlice";

export default function EditUserModal({ user = {}, refetch }) {
  const [open, setOpen] = useState(false);

  // form state (strings so inputs show correctly)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    role: user?.role ?? 2,
  });

  const [updateUser, { isLoading, isError, isSuccess, data, error }] =
    useUpdateUserMutation();

  const handleOpen = () => setOpen((s) => !s);

  // Sync form when modal is opened OR user prop changes
  useEffect(() => {
    if (open) {
      setFormData({
        name: user?.name ?? "",
        email: user?.email ?? "",
        mobileNumber: user?.mobileNumber ?? "",
        role: user?.role ?? 2,
      });
    }
  }, [open, user]);

  // Also keep form synced while modal closed (optional)
  useEffect(() => {
    if (!open) {
      setFormData({
        name: user?.name ?? "",
        email: user?.email ?? "",
        mobileNumber: user?.mobileNumber ?? "",
        role: user?.role ?? 2,
      });
    }
  }, [user]); // eslint-disable-line

  const handleChange = (e) => {
    const { name, value } = e.target || {};
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (val) => {
    // Material Tailwind's Select gives a string value; convert to number
    const parsed = parseInt(val, 10);
    setFormData((p) => ({ ...p, role: Number.isNaN(parsed) ? p.role : parsed }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only allow Admin(1) or User(2)
    const validRoles = [1, 2];
    if (!validRoles.includes(Number(formData.role))) {
      toast.error("Please select a valid role (Admin or User).");
      return;
    }

    // basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.mobileNumber.trim()) {
      toast.error("Name, email and mobile number are required.");
      return;
    }

    try {
      await updateUser({
        userId: user._id,
        name: String(formData.name).trim(),
        email: String(formData.email).trim(),
        mobileNumber: String(formData.mobileNumber).trim(),
        role: Number(formData.role),
      }).unwrap();
    } catch (err) {
      console.error("Failed to update user:", err);
      // If mutation threw, the isError effect will handle notification
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.error || "Something went wrong");
    }
    if (isSuccess) {
      toast.success(data?.message || "User updated successfully");
      setOpen(false);
      if (typeof refetch === "function") refetch();
    }
  }, [isError, isSuccess, error, data]); // eslint-disable-line

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
        title="Edit"
      >
        <Edit className="h-4" />
      </IconButton>

      <Dialog open={open} size="sm" handler={handleOpen} className="rounded-lg bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <Typography variant="h5" className="font-bold">
            Edit User
          </Typography>
          <IconButton
            variant="text"
            onClick={handleOpen}
            className="hover:bg-gray-100 focus:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </IconButton>
        </div>

        <DialogBody>
          <Card className="w-full p-6 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Mobile Number"
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />

              <Select
                label="Role"
                value={(formData.role ?? 2).toString()}
                onChange={handleRoleChange}
                color="purple"
                required
              >
                <Option value="1">Admin</Option>
                <Option value="2">User</Option>
              </Select>

              <Button type="submit" color="purple" fullWidth disabled={isLoading}>
                {isLoading ? "Updating..." : "Update User"}
              </Button>
            </form>
          </Card>
        </DialogBody>
      </Dialog>
    </>
  );
}
