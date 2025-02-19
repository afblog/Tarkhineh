import BeatLoader from 'react-spinners/BeatLoader'

export default function SiteLoader() {
    return (
        <div className='site_loader fixed flex items-center justify-center inset-0 z-[999] bg-Primary'>
            <img src="/Img/svg/site-logo-loader.svg" alt="" />
            <div className='absolute bottom-10'>
                <BeatLoader color='#fff' />
            </div>
        </div>
    )
}
