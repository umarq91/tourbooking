const MediumCard = ({img,country}) => {
    return ( <div className=" relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
       
       <div className="relative h-70 w-80">
        <img className="rounded-xl" src={img} />
       </div>
       <h3 className="text-xl mt-3"> {country}</h3>
    </div> );
}
 
export default MediumCard;