/* eslint-disable react/prop-types */
import  { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import { useDeleteQueryMutation } from "../../../../redux/slices/querySlice";


export default function DeleteQueryModal({ id,refetch}) {
  const [open, setOpen2] = useState(false);
  const [verificationText, setVerificationText] = useState(""); // State to track user input
  const requiredText = "DELETE"; // The text user needs to enter to confirm deletion

  const handleOpen = () => setOpen2(!open);

  const [deleteLocality] = useDeleteQueryMutation()

    
  

  const handleDelete = async () => {
    try {
      await deleteLocality(id).unwrap();
    //   handleOpen(); // Close the modal after deletion
      refetch()
      setOpen2(false);
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <>
      
      <Button
        onClick={handleOpen}
        variant="text"
        className="flex items-center space-x-2 hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Trash2 className="h-5 w-5" /> {/* Icon */}
      
      </Button>

      <Dialog open={open} className="shadow-none hover:shadow-none rounded-md bg-white">
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody>
          <p className="app-font text-black">
            Do you really want to delete this Query? This process cannot be undone.
          </p>
          

          

          <p className="mt-2 mb-5 text-black">Please type <span className=" font-bold text-red-500">{requiredText}</span> to confirm.</p>
          <Input
            type="text"
            label="Enter DELETE to confirm"
            value={verificationText}
            onChange={(e) => setVerificationText(e.target.value)}
            className=""
            color="purple"
          />
         
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="purple"
            onClick={handleDelete}
            disabled={verificationText !== requiredText} // Disable the button if text doesn't match
            
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}