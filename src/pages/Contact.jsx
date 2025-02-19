import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderPages from '../components/HeaderPages'
import BranchBoxPage from '../components/BranchBoxPage'

export default function Contact() {
    return (
        <>
            <Header />
            <HeaderPages title="با ترخینه در تماس باشید." bgimg="bg-[url(/img/png/contact-header.jpeg)]" />
            <main className='container my-12 flex flex-col gap-y-6'>
                <BranchBoxPage title="شعبه اکباتان" src="/Img/png/branch-img-2.jpeg" address="آدرس: شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم" phone="۰۲۱-۵۴۸۹۱۲۵۰-۵۱" />
                <BranchBoxPage title="شعبه چالوس" src="/img/png/branch-img-4.jpeg" address="آدرس: چالوس، خیابان ۱۷ شهریور، جنب داروخانه دکتر میلانی" phone="۰۲۱-۵۴۸۹۱۲۵۲-۵۳" />
                <BranchBoxPage title="شعبه اقدسیه" src="/img/png/branch-img-1.jpeg" address="آدرس: خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸" phone="۰۲۱-۵۴۸۹۱۲۵۴-۵۵" />
                <BranchBoxPage title="شعبه ونک" src="/img/png/branch-img-3.png" address="آدرس: میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶" phone="۰۲۱-۵۴۸۹۱۲۵۶-۵۷" />
            </main>
            <Footer />
        </>
    )
}
