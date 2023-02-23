import Image from 'next/image'


export default function SignUp() {
    return (
        <main >
            <div className="flex justify-center flex-col place-items-center">
                <div className='mt-16 flex'>
                    <Image src="/Assets/app-icon.svg" alt='logo' width={22} height={34} className='grayscale' />
                    <div className='text-white text-2xl ml-4 mt-1 text-opacity-60'>Launcher</div>
                </div>
                <div className='flex flex-col mt-2 mr-80'>
                    <div className='text-white text-3xl mt-2 '>Sign up</div>
                </div>
                <form className='flex flex-col mt-8 appearance-none'>
                    <label className='mr-60 text-white text-xl flex group-focus/email:text-[#2596FF]' for='nickname'>Nickname</label>
                    <input type='text' id='nickname' name='nickname' className='bg-[#242B48] rounded flex focus:outline-none text-white focus:ring-[#1f80db] focus:ring focus:border-[#1f80db] focus:bg-[#3D4874]' />
                    <label className='mr-60 mt-8 text-white text-xl flex group-focus/email:text-[#2596FF]' for='email'>Email</label>
                    <input type='text' id='email' name='email' className='bg-[#242B48] rounded flex focus:outline-none text-white focus:ring-[#1f80db] focus:ring focus:border-[#1f80db] focus:bg-[#3D4874]' />
                    <label className='mr-60 mt-8 text-white text-xl flex ' for='password'>Password</label>
                    <input type='password' id='password' name='password' className=' bg-[#242B48] rounded flex focus:outline-none text-whit focus:ring-[#1f80db] focus:ring focus:border-[#1f80db] focus:bg-[#3D4874]' />

                    <button type="submit" className=' flex py-6 bg-[#2596FF] text-white text-xl w-40 h-9 mt-20 place-items-center rounded mx-auto justify-center hover:bg-[#1f80db]'><p>Sign up</p></button>

                </form>
            </div>


        </main>
    );
}