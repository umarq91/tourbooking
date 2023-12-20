import { useContext } from "react";
import { Link,useLocation } from "react-router-dom"
import { UserContext } from "../../Context/UserContext";

const AccountNav = () => {
    const {user} = useContext(UserContext)
    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2];
    if(subpage=== undefined){
        subpage = 'profile'
    }

    function linkClasses(type = null) {
        let classes = 'inline-flex gap-1 py-2 px-6  rounded-full'
        if (type ===subpage) {
            classes += ' bg-blue-500 text-white'
        }else{
            classes += ' bg-gray-300'
        }
        return classes;
    }



    return ( 
        <>
        {user.role==='admin' ? (
            <nav className="w-full flex justify-center mt-8  mb-8 gap-2">
            <Link className={linkClasses('profile')} to={'/account/profile'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                My Profile
            </Link>

            <Link className={linkClasses('myuploads')} to={'/account/myuploads'}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

           
            My Uploads
            </Link>
         {/* <Link className={linkClasses('bookings')} to={'/account/bookings'}>Bookings</Link> */}
            <Link className={linkClasses('tourform')} to={'/account/tourform/add'}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
</svg>


           
            Tour Form
            </Link>
 
        </nav>
        ):
        <div>
            <h1 className="text-center text-4xl first-letter font-poppins mb-20 medium"> My Profile </h1>
        </div>
        }
          
        </>
     );
}
 
export default AccountNav;