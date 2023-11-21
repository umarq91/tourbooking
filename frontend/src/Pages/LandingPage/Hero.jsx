import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="relative  h-[300px] sm:h-[400px] lg:h-[90vh] ">
        <img
          className=" object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
          alt="Background"
        />

        <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm font-bold text-black sm:text-lg">
            Want to review a property? Perfect.
          </p>
          <Link to={'/places'} className="bg-pink-600 text-white px-4 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            Properties
          </Link>
          <button className="bg-white text-purple-500 px-4 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            Add Place
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
