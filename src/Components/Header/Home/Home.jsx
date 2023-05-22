import logo from '../../../assets/shomirProfilePicture.jpg'

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 items-center">
            <div className='mb-10'>
                <p className="text-white text-[13px]">HELLOW THERE, WELCOME TO MY SITE</p>
                <p className="text-white text-[40px] font-bold">I'm Shomir Kumar</p>
                <p className="text-red-500 text-[40px] font-bold">I'm Full Stack Developer</p>
                <p className="text-white text-[40px] font-bold">& UI/UX Designer</p>
                <div className="mt-4 flex gap-4">
                    <button className="text-white text-[12px] px-3 py-2 bg-red-500 rounded-full hover:border-[2px] hover:border-white">SEE PORTFOLIO</button>
                    <button className="text-white text-[12px] px-3 py-2 bg-red-500 rounded-full hover:border-[2px] hover:border-white">CONTACT ME</button>
                </div>
            </div>
            <div className=''>
                <div className='h-[350px] w-[450px] bg-gradient-to-b from-[#ff004D] to-[#2A26B8] p-2 rounded-[20px] object-cover'>
                    <img src={logo} className="h-full w-[450px]   rounded-[20px] object-cover" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;