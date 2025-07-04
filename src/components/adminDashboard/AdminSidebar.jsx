import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    PowerIcon,
    HomeIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { BookText, NotebookPen, UsersIcon } from "lucide-react";
import authService from "../../service/authService";
import myContext from "../../context/myContext";


export default function AdminSidebar() {
    // const [logout] = useLogoutMutation();

    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //   await logout(); // Call the logout mutation to remove token
    //   navigate('/');  // Redirect to the home page after logout
    //   dispatch(apiSlice.util.resetApiState());
    // };

    // const dispatch = useDispatch();

  
    
   

  const { user, updateAuthState } = useContext(myContext);

    
        const navigate = useNavigate();
    
         const handleLogout = () => {
           authService.logout();
           updateAuthState();
           navigate('/'); // or your login route
         };


    return (
        <div className=" h-screen fixed w-full max-w-[16rem] p-4 
        rounded-none border-r border-r-purple-300 bg-purple-50">

            <div className="">
                <div className="mb-2 p-4 ">
                    <Link to={'/'}>
                        <div
                            className=" py-6"
                        >
                            <div className="flex justify-center mb-2">
                                <img className="w-24" src="https://cdn-icons-png.flaticon.com/128/8899/8899687.png" alt="img" />
                            </div>
                            <h1 className="text-center text-xl text-black font-bold app-font">Super Admin Dashboard</h1>
                        </div>
                    </Link>
                </div>
            </div>

            <List>
                <Link to={'admin-home-page'}>
                    <ListItem className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Home
                    </ListItem>

                </Link>

               

                

                
                <Link to={'admin-view-user-and-administration'}>
                    <ListItem
                        className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UsersIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Users
                    </ListItem>
                </Link>


                <Link to={'admin-view-blogs'}>
                    <ListItem
                        className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                         <ListItemPrefix>
                            <BookText  className="h-5 w-5" />
                        </ListItemPrefix>
                        View Blogs
                    </ListItem>
                </Link>


                <Link to={'admin-add-blog'}>
                    <ListItem
                       className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <NotebookPen  className="h-5 w-5" />
                        </ListItemPrefix>
                        Add Blog
                    </ListItem>
                </Link>





                {/* <Link >
                    <ListItem className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserGroupIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        All Employee
                    </ListItem>
                </Link> */}
                {/* <Link >
                    <ListItem className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserGroupIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        View Visitors
                    </ListItem>
                </Link> */}

                {/* <Link>
                    <ListItem className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <ClipboardPlus className="h-5 w-5" />
                        </ListItemPrefix>
                        Report
                    </ListItem>
                </Link> */}

                {/* <Link>
                    <ListItem className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <MapPinned className="h-5 w-5" />
                        </ListItemPrefix>
                        Track Employee
                    </ListItem>
                </Link> */}

                <Link to={'admin-profile-page'}>
                    <ListItem className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>

                <ListItem
                    onClick={handleLogout} className="hover:bg-purple-50 active:bg-purple-100 focus:bg-purple-100 transition-colors duration-300">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
                <Card className=" mb-5">
                </Card>
            </List>
        </div>
    );
}