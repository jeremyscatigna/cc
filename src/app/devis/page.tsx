import DevisSections from '@/components/devis-sections';
import Nav from '@/components/nav';

export default function Devis() {
    return (
        <main className='flex flex-col bg-black'>
            <Nav />

            <DevisSections />
        </main>
    );
}
