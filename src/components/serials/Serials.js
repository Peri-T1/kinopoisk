
import Link from "next/link";

export default async function Serials() {
    const kinoData = await fetch('https://baktyiar.pythonanywhere.com/api/index/');
    const kino = await kinoData.json();
    const serials = kino.serials;

    return (
        
        <div className="p-4" >
        <h1 className='font-bold text-2xl pb-[20px] text-center'>Сериалы</h1>
        <div className="flex flex-wrap justify-center gap-4">
                {serials.map((serial) => (
                    <div key={serial.id} className="bg-gray-800 rounded-lg
                    overflow-hidden shadow-lg 
                    hover:shadow-2xl transition-shadow 
                    duration-300 ease-in-out max-w-xs w-[240px] h-[300px] cursor-pointer">
 <Link href={"/serial"}>
                        <img
                            src={`https://baktyiar.pythonanywhere.com/${serial.poster}`}
                            alt={serial.title}
                            className="w-full h-56 object-cover"
                        />
                        </Link>
                        <div className="p-4">
                        <Link href={"/serial"}><p className="text-white text-lg font-semibold truncate cursor-pointer">{serial.title}</p></Link>

                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}