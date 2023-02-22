'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  function download() {
    const URL = 'https://cklczqohgdctyqulkssz.supabase.co/storage/v1/object/public/updates/Distribution/launcher.exe?t=2023-02-22T15%3A33%3A57.025Z'
    if (typeof window !== "undefined"){
      window.location.href = URL
    }
  }
  
  return (
    <main >
      <div className="flex justify-center flex-col place-items-center">
        <div className='mt-16 flex'>
          <Image src="/Assets/app-icon.svg" alt='logo' width={91} height={127} />
          <div className='text-white text-6xl ml-8 mt-10'>Launcher</div>
        </div>
        <div className='flex flex-col mt-20 place-items-center'>
          <div className='text-white text-4xl py-8 px-16  bg-gradient-to-r from-[#2596FF] to-[#96FF25] text-center hover:cursor-pointer  hover:to-[#2596FF] duration-300 ease-in-out transition' onClick={download}>Download</div>
          <div className='text-white mt-2'>Only windows version available</div>
        </div>
      </div>


    </main>
  )
}
