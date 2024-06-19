import ContactSection from '@/components/contact-section';
import Nav from '@/components/nav';

export default function Contact() {
    return (
        <main className='flex flex-col bg-black'>
            <Nav />
    
            <ContactSection />
        </main>
    );
}
