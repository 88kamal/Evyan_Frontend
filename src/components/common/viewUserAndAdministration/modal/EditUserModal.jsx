/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
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
import myContext from "../../../../context/myContext";
import { useUpdateUserRoleMutation } from "../../../../redux/slices/authSlice";

export default function EditUserModal({ id, role: initialRole, refetch }) {
    const [open, setOpen] = useState(false);
    const [role, setRole] = useState(initialRole);

    const { showAlert } = useContext(myContext);

    const [updateUserRole, { isLoading, isError, isSuccess, data, error }] =
        useUpdateUserRoleMutation();

    const handleOpen = () => setOpen(!open);

    const handleRoleChange = (selectedRole) => {
        setRole(parseInt(selectedRole, 10)); // Ensure role is an integer
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserRole({ userId: id, role }).unwrap();
        } catch (err) {
            console.error("Failed to update user role:", err);
        }
    };

    useEffect(() => {
        if (isError) {
            showAlert(error?.data?.error || "Something went wrong", "error");
        }

        if (isSuccess) {
            showAlert(data?.message || "User role updated successfully", "success");
            handleOpen();
            refetch();
        }
    }, [isError, isSuccess, error, data]);

    return (
        <>
            <IconButton
                onClick={handleOpen}
                variant="text"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
            >
                <Edit className="h-4" />
            </IconButton>

            <Dialog
                open={open}
                size="sm"
                handler={handleOpen}
                className="rounded-lg bg-white shadow-md"
            >
                <div className="flex items-center justify-between px-4 py-2 border-b">
                    <Typography variant="h5" className="font-bold">
                        Edit User Role
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
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <Select
                                    label="Role"
                                    value={role?.toString()}
                                    onChange={handleRoleChange}
                                    color="purple"
                                    required
                                >
                                    <Option value="2">User</Option>
                                    <Option value="1">Admin</Option>
                                </Select>
                            </div>
                            <Button
                                type="submit"
                                color="purple"
                                fullWidth
                                disabled={isLoading}
                            >
                                {isLoading ? "Updating..." : "Update Role"}
                            </Button>
                        </form>
                    </Card>
                </DialogBody>
            </Dialog>
        </>
    );
}