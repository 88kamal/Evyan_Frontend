import Footer from "../Footer"
import Navbar from "../Navbar"

function Layout({ children }) {
    return (
        <div className=''>
            <Navbar />
            <div className=" min-h-screen  ">
                {children}
            </div>
            <Footer />
        </div >
    )
}

export default Layout