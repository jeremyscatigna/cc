import FormulesSections from '@/components/formules-section';
import Nav from '@/components/nav';

export default function Formules() {
    return (
        <main className='flex flex-col bg-black'>
            <Nav />

            <FormulesSections />
        </main>
    );
}
