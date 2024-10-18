
export default async function  about(){
  await new Promise((resolve) =>
    { setTimeout(resolve ,5000) });

  
  return(
      <div>
        
       <h1 className="text-7xl text-center mt-40  text-gray-600   hover:text-gray-400  underline decoration-gray-500 font-bold ">about page</h1>
      </div>
  )
     
}





