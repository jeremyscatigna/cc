'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './button';

export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ['start start', 'end start'], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div className={cn('h-[50rem] items-start overflow-y-auto w-full', className)} ref={gridRef}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10' ref={gridRef}>
                <div className='grid gap-10'>
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={'grid-1' + idx}
                            className='w-full p-4 rounded-lg bg-white shadow-lg'
                        >
                            <Image
                                src={el}
                                className='h-60 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
                                height='400'
                                width='400'
                                alt='thumbnail'
                            />

                            <div className='pt-2'>
                                <h1 className='text-xl font-bold'>Title</h1>
                                <p className='text-lg text-gray-500'>Description</p>

                                <div className='w-full flex items-center justify-between'>
                                    <p>12euros</p>
                                    <Button>Réserver</Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='grid gap-10'>
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={'grid-2' + idx}
                            className='w-full p-4 rounded-lg bg-white shadow-lg'
                        >
                            <Image
                                src={el}
                                className='h-60 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
                                height='400'
                                width='400'
                                alt='thumbnail'
                            />

                            <div className='pt-2'>
                                <h1 className='text-xl font-bold'>Title</h1>
                                <p className='text-lg text-gray-500'>Description</p>
                            </div>

                            <div className='w-full flex items-center justify-between'>
                                <p>12euros</p>
                                <Button>Réserver</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='grid gap-10'>
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={'grid-3' + idx} className='w-full p-4 rounded-lg bg-white shadow-lg'>
                            <Image
                                src={el}
                                className='h-60 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0'
                                height='400'
                                width='400'
                                alt='thumbnail'
                            />

                            <div className='pt-2'>
                                <h1 className='text-xl font-bold'>Title</h1>
                                <p className='text-lg text-gray-500'>Description</p>
                            </div>

                            <div className='w-full flex items-center justify-between'>
                                <p>12euros</p>
                                <Button>Réserver</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
