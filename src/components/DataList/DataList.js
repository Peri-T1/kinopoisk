





export default async function DataList({data, title}) {
   

    return (
        <div className="p-4">
            <h1 className='font-bold text-2xl pb-[20px] text-center'>{title}</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {data.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded-lg
                     overflow-hidden shadow-lg 
                     hover:shadow-2xl transition-shadow 
                     duration-300 ease-in-out max-w-xs w-[240px] h-[300px] cursor-pointer">
                       <Link href={"/movie"}> <img
                            src={`https://baktyiar.pythonanywhere.com/${item.poster}`}
                            alt={item.title}
                            // className="w-full h-56 object-cover"
                            className="w-full h-56 object-cover"
                        /></Link>
                        <div className="p-4">
                        <Link href={"/movie"}><p className="text-white text-lg font-semibold truncate cursor-pointer">{item.title}</p></Link>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}