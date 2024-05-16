import Image from 'next/image';
import { Listings } from './ui/listings';

export default function Details() {
    return (
        <div className='h-sreen w-full flex flex-col bg-sage py-24 justify-center items-center'>
            <h1 className='font-semibold text-white uppercase text-4xl md:text-7xl text-center px-4 md:px-0'>
                {"BIEN PLUS QU'UN EVENEMENT"} <br /> UNE EXPERIENCE
            </h1>
            <p className='text-inter text-white mt-8 max-w-4xl text-center text-lg leading-8 px-4 md:px-0'>
                Peu importe l’occasion que vous célébrez, qu’il s’agisse d’un anniversaire, d’une demande en mariage, d’un EVJF, d’une
                babyshower, d’un rendez-vous amoureux ou simplement parce que vous avez besoin d’un peu de temps entre amies… Nous sommes là
                pour vous aider à créer l’expérience la plus élégante et unique qui soit !
            </p>

            <Listings />
        </div>
    );
}
