import Details from '@/components/details-section';
import { HeroSection } from '@/components/hero-section';
import LifestyleSection from '@/components/lifestyle-section';
import Nav from '@/components/nav';

export default function Home() {
    return (
        <main className='flex flex-col bg-black'>
            <Nav />
            <HeroSection />

            <Details />
            <LifestyleSection />
        </main>
    );
}
