'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ImagesSlider } from './images-slider';

export function HeroSection() {
    const images = ['/spring.jpeg', '/fresco.jpeg'];
    return (
        <ImagesSlider className='h-screen' images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className='z-50 h-screen w-full flex flex-col justify-between items-start'
            >
                <motion.div>
                    <motion.p className='text-2xl md:text-7xl text-start text-white pl-4 md:pl-24 pt-48 font-semibold text-play'>
                        Plus qu&apos;un événement <br /> une expérience
                    </motion.p>
                </motion.div>

                <motion.div className='w-full flex items-center justify-center p-8'>
                    <ArrowDown size={32} className='text-white' />
                </motion.div>
            </motion.div>
        </ImagesSlider>
    );
}
