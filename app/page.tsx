'use client'

import { Badge, Button } from '@/lib/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='w-screen h-full min-h-screen bg-black flex flex-col gap-4 sm:flex-row'>
			<div className='w-full ring-white  h-full flex flex-col p-4 sm:p-24 gap-12 text-white'>
				<h1 className='text-4xl '>
					Learning how to publish and embed a component from using npm?
				</h1>
				<section className='p-23 ring-2 w-full h-fit min-h-[500px] grid grid-cols-2 items-center justify-center text-center text-5xl'>
					<Badge />
					<Button />
				</section>
			</div>
		</main>
	)
}
