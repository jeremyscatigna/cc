import Nav from '@/components/nav';
import OptionsSections from '@/components/options-section';

export default function Options() {
    return (
        <main className='flex flex-col bg-black'>
            <Nav />
            
            <OptionsSections />
        </main>
    );
}
