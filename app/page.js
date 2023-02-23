'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { supabase } from '@/lib/supabaseClient';
import { use, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [version, setVersion] = useState('0.0.0');
  const [url, setUrl] = useState('https://cklczqohgdctyqulkssz.supabase.co/storage/v1/object/public/updates/Distribution/launcher.exe');

  useEffect(() => {
    getVersion()
    setUrl(process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/updates/' + version + '/launcher.exe')
    //console.log(process.env.NEXT_PUBLIC_SUPABASE_URL+'/storage/v1/object/public/updates/'+version+'/launcher.exe')
  }, [version])

  function download() {
    if (typeof window !== "undefined") {
      window.location.href = url
    }
  }
  async function getVersion() {
    const { data, error } = await supabase.from('updates').select('version');
    //console.log(data[0].version);
    setVersion(data[0].version);
    //console.log(error);

  }
  
  return (
    <main >
      <div className="flex justify-center flex-col place-items-center">
        <div className='mt-16 flex'>
          <Image src="/Assets/app-icon.svg" alt='logo' width={91} height={127} />
          <div className='text-white text-6xl ml-8 mt-10'>Launcher</div>
        </div>
        <div className='flex flex-col mt-20 place-items-center'>
          <div className='text-white text-4xl py-8 px-16  bg-gradient-to-r from-[#2596FF] to-[#96FF25] text-center hover:cursor-pointer  hover:to-[#2596FF] duration-300 ease-in-out transition' onClick={download}><div>Download</div><div className='text-lg'>Current version: {version}</div></div>
          <div className='text-white mt-2'>Only windows version available</div>
        </div>
      </div>


    </main>
  );
}
//https://cklczqohgdctyqulkssz.supabase.co/storage/v1/object/public/updates/0.1.1/launcher.exe?t=2023-02-23T10%3A16%3A58.039Z