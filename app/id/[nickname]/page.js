'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';


export default function id({ params }) {
    const [nickname, setNickname] = useState('');
    const [avatarID, setAvatarID] = useState('https://cklczqohgdctyqulkssz.supabase.co/storage/v1/object/public/avatars/default.svg');
    const [status, setStatus] = useState('');
    const [uID, setUID] = useState('');

    useEffect(() => {
        getData();
        /*console.log(nickname);
        console.log(avatarID);
        console.log(status);
        console.log(uID);*/
    }, [nickname, avatarID, status,uID])


    async function getData() {
        const { data, error } = await supabase.from('users').select('nickname, avatarID,status,id').eq('nickname', params.nickname);
        //console.log(data[0], error);
        setNickname(data[0].nickname);
        setAvatarID("https://cklczqohgdctyqulkssz.supabase.co/storage/v1/object/public/avatars/" + data[0].avatarID);
        setStatus(data[0].status);
        setUID(data[0].id);

    }

    return (

        <main>
            {nickname && avatarID && status ?
                <div className="flex justify-center place-items-center">
                    <div className='flex  bg-[#131727] w-2/3 place-items-center'>
                        <div className='text-white flex flex-row text-3xl h-screen ml-32 mt-20'>
                            <Image src={avatarID} alt='avatar' width={128} height={128} className="w-32 h-32"/>
                            <div className='mt-10 text-4xl ml-10'>{nickname}
                            {status[0]==="0"&&
                            <div className='text-lg opacity-40 flex flex-row text-white'><div className='w-3 h-3 mr-2 mt-2 rounded-full bg-white'></div>Offline</div>
                            }
                            {status[0]==="1"&&
                            <div className='text-lg flex flex-row text-[#1689F3]'><div className='w-3 h-3 mr-2 mt-2 rounded-full bg-[#1689F3]'></div>Online</div>
                            }
                            {status[0]==="2"&&
                            <div className='text-lg flex flex-row text-[#095F17]'><div className='w-3 h-3 mr-2 mt-2 rounded-full bg-[#095F17]'></div>In game</div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="flex justify-center place-items-center">
                    <div className='flex bg-[#131727] w-2/3 place-items-center'>
                        <div className='text-white text-3xl mt-auto h-screen place-items-center'>
                            <div className='mt-10'>User not found</div>
                        </div>
                    </div>
                </div>
            }
        </main>


    );
}