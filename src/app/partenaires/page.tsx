import Nav from '@/components/nav';
import PartenairesSections from '@/components/partenaires-section';

export default function Partenaires() {
    return (
        <main className='flex flex-col bg-black'>
            <Nav />
        
            <PartenairesSections />
        </main>
    );
}
