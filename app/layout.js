'use client';
import './globals.css'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const [user, setUser] =useState('')
  const [avatar, setAvatar] =useState('https://cklczqohgdctyqulkssz.supabase.co/storage/v1/object/public/avatars/default.svg')
  
  useEffect(()=>{
    getSupa()
  },[])


  async function getSupa(){
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  }

  
  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-[#0E111D] font-imprima max-h-screen h-screen justify-between flex flex-col'>
        <div className='bg-[#0C0E18] w-full h-24 flex content-center flex-row'>
          <Link href='/'>
          <div className='h-16 w-52 flex mt-4 ml-2 hover:cursor-pointer '>
            <Image src="/Assets/app-icon.svg" alt='logo' width={47} height={65} />
            <div className='text-white text-4xl mt-3 ml-2'>Launcher</div>
          </div>
          </Link>
          <div className='h-16 flex mt-8 ml-20 hover:cursor-pointer '>
            <div className='text-white text-2xl'>Games</div>
          </div>
          {!user ?
            <div className='flex mt-8 ml-auto mr-6  hover:cursor-pointer '>
              <Link href='/sign-in'>
              <div className='text-white text-2xl mt-1 mr-4'>Sign In</div>
              </Link>
            </div>
            :
            <div className='flex mt-8 ml-auto mr-6  hover:cursor-pointer '>
              <div className='text-white text-2xl mt-1 mr-4'>{user.user_metadata.nickname}</div>
              <Image src={avatar} alt='avatar' width={43} height={43} className="w-11 h-11 rounded-3xl" />
            </div>
          }

        </div>
        <div className='mb-auto'>{children}</div>
        <div className='bg-[#0C0E18] w-full h-24 flex flex-row justify-end'>
          <div className='text-white text-2xl mt-8 mr-auto ml-10 hover:cursor-pointer'>Add your game</div>
          <div className='text-white text-2xl mt-8 mr-10 text-opacity-40'>Launcher &copy; 2023</div>
        </div>
      </body>
    </html>
  )
}
