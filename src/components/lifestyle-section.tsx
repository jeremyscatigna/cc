import { LayoutGrid } from './ui/layout-grid';

export default function LifestyleSection() {
    return (
        <div className='h-sreen w-full flex flex-col bg-[#f7f6f4] py-24 justify-center items-center'>
            <h1 className='text-play font-semibold text-black uppercase text-4xl md:text-7xl text-center max-w-6xl px-4 md:px-0'>
                PAS UN SIMPLE EVENEMENT <br /> UNE EXPERIENCE
            </h1>

            <p className='text-lato text-black mt-12 max-w-4xl text-center text-lg leading-8 px-4 md:px-0'>
                Nous créons des événements en petit comité dans une démarche éco-responsable pour vous offrir un gain de temps et
                d&apos;énergie ainsi qu&apos;un moment inoubliable pour vous et vos proches. Vivez l&apos;expérience en toute saison, en
                extérieur comme en intérieur.
            </p>

            <div className='h-screen py-20 w-full relative'>
                <LayoutGrid cards={cards} />
            </div>
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className='font-bold text-4xl text-white'>Location</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>Art de la table, éléments de décoration, mobilier.</p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className='font-bold text-4xl text-white'>Personnalisation</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>Signalétique, papeterie, cadeaux personnalisés.</p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className='font-bold text-4xl text-white'>Installation</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
                Installation de décoration sur place et sur mesure (mariage, anniversaire, evjf, baptême...)
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className='font-bold text-4xl text-white'>Organisation</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
                &quot;Les picnic chic&quot;, les demandes en mariage, les dates amoureux, les evjf.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: 'md:col-span-2',
        thumbnail: '/picnic1.jpeg',
        title: 'Location',
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: 'col-span-1',
        thumbnail: '/picnic2.jpeg',
        title: 'Personnalisation',
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: 'col-span-1',
        thumbnail: '/picnic3.jpeg',
        title: 'Installation',
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: 'md:col-span-2',
        thumbnail: '/picnic4.jpeg',
        title: 'Organisation',
    },
];
