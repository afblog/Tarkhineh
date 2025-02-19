import { useNavigate } from 'react-router-dom'

export default function Soon() {

    const navigate = useNavigate()

    return (
        <div className='site_loader flex flex-col items-center justify-center w-screen h-dvh bg-Primary'>
            <span className='text-white text-2xl sm:text-4xl font-bold mb-5'>Coming Soon</span>
            <button onClick={() => navigate('/')} className="bg-Tint-1 text-Primary px-3 sm:px-6 py-3 rounded-md sm:rounded-xl text-lg sm:text-xl font-EstedadMedium
                   active:shadow-[inset_5px_5px_10px_#b8b8b8,inset_-5px_-5px_10px_#ffffff]
                   transition-all cursor-pointer">صفحه اصلی</button>
        </div>
    )
}
