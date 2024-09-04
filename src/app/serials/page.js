'use client'

import Link from "next/link"

export default function Serials(){
    
    return(
        <>
        <Link href={'/'}>
         <p className="flex-grow pt-2 pl-2 text-blue-400 cursor-pointer hover:text-violet-400 transition">Home</p></Link>
        <div className="flex" /> </>
    )
}