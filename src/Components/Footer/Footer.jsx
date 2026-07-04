import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='w-full h-full py-5 flex justify-center items-center flex-col bg-slate-950 text-slate-500 text-[10px]'>
            <div className='flex justify-between items-center w-full px-3'>
                <div className='flex justify-center items-center gap-10'>
                    <div className='flex justify-center items-center gap-1 flex-col'>
                        <h1 className='text-lg tracking-tighter'>Information</h1>
                        <span className='flex justify-center items-center'>
                            <CiLocationOn size={15} />
                            <p>TOLIARA</p>
                        </span>
                        <span className='flex justify-center items-center'>
                            <MdEmail size={15} />
                            <p>ranaivomananafrancky@gmail.com</p>
                        </span>
                        <span className='flex justify-center items-center'>
                            <BiPhone size={15} />
                            <p>+261385382860</p>
                        </span>
                    </div>
                </div>
                <span className='flex flex-col'>
                    <h1 className="font-bold text-red-600 tracking-tighter">
                        <span className='text-white'>C.rm</span>Francky
                    </h1>
                    <p>Design by Francky RM</p>
                    <p>2025-2026</p>
                </span>
            </div>
        </div>
    )
}

export default Footer
