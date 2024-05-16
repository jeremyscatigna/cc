import { LayoutGrid } from './ui/layout-grid';

export default function LifestyleSection() {
    return (
        <div className='h-sreen w-full flex flex-col bg-[#f7f6f4] py-24 justify-center items-center'>
            <h1 className='text-play font-semibold text-black uppercase text-4xl md:text-7xl text-center max-w-6xl px-4 md:px-0'>
                PAS UN SIMPLE EVENEMENT <br /> UNE EXPERIENCE
            </h1>

            <p className='text-lato text-black mt-12 max-w-4xl text-center text-lg leading-8 px-4 md:px-0'>
                Nous créons des événements en petit comité dans une démarche éco-responsable pour vous offrir un gain de temps et d&apos;énergie
                ainsi qu&apos;un moment inoubliable pour vous et vos proches. Vivez l&apos;expérience en toute saison, en extérieur comme en
                intérieur.
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
            <p className='font-bold text-4xl text-white'>Mariage</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
                Step into an era of grandeur and elegance with our exclusive collection of domains and castles. Each property exudes
                history, luxury, and timeless sophistication. From majestic estates with sprawling grounds to enchanting castles steeped in
                centuries of tradition, these properties offer a glimpse into a world of opulence and refinement.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className='font-bold text-4xl text-white'>EVJF</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
                Indulge in the ultimate luxury with our selection of dream homes, meticulously crafted to fulfill your every desire.
                Experience unparalleled comfort, style, and modern amenities in these architectural masterpieces. Whether you seek sleek
                contemporary designs or classic elegance, your dream home awaits.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className='font-bold text-4xl text-white'>Anniversaire</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
                Create cherished memories with your loved ones in our charming family cottages. Nestled amidst picturesque landscapes and
                serene surroundings, these cozy retreats offer a perfect blend of comfort and tranquility. Ideal for family getaways or
                peaceful weekends, our cottages provide a warm and inviting atmosphere where memories are made.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className='font-bold text-4xl text-white'>Date</p>
            <p className='font-normal text-base text-white'></p>
            <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
                Embrace contemporary living in our collection of modern residences, where sleek design meets functionality. These properties
                showcase cutting-edge architecture, innovative features, and state-of-the-art technology. From urban lofts to minimalist
                masterpieces, immerse yourself in the epitome of modern living and urban sophistication.
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
        title: 'Mariage',
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: 'col-span-1',
        thumbnail: '/picnic2.jpeg',
        title: 'EVJF',
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: 'col-span-1',
        thumbnail: '/picnic3.jpeg',
        title: 'Anniversaire',
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: 'md:col-span-2',
        thumbnail: '/picnic4.jpeg',
        title: 'Date',
    },
];
