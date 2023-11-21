function SmallCard({pic,type,description}){
    return(
        <div className="flex items-center m-2 mt-3 text-black space-x-4 
        rounded-xl cursor-pointer hover:bg-gray-120 hover:scale-105 transition transform
         duration-200 ease-out ">
{/* Left  */}
<div className="relative h-16 w-16">
    <img className="rounded-lg h-16 w-16" src={pic}/>
</div>

{/* Rifht  */}
<div>
    <h2>{type}</h2>
    <h3 className="text-gray-500 text-sm">{description}</h3>

</div>

        </div>
    )
}
export default SmallCard