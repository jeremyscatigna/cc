import Details from '@/components/details-section';
import FooterSection from '@/components/footer-section';
import { HeroSection } from '@/components/hero-section';
import LifestyleSection from '@/components/lifestyle-section';
import Nav from '@/components/nav';
import { ParallaxList } from '@/components/parallax-list';

export default function Home() {
    return (
        <main className='flex flex-col bg-black'>
            <Nav />
            <HeroSection />

            <LifestyleSection />
            <Details />

            <ParallaxList />

            <FooterSection />
        </main>
    );
}
