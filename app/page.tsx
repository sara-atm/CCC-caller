'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const LOCAL = process.env.NEXT_PUBLIC_CCC_LOCAL_URL
const UAT = process.env.NEXT_PUBLIC_CCC_UAT_URL

export default function Home() {
	const [url, setUrl] = useState<string | null | undefined>(LOCAL)
	return (
		<main className='w-screen h-full min-h-screen bg-black flex flex-col gap-4 sm:flex-row'>
			<div className='w-full sm:w-1/2 ring-white  h-full flex flex-col p-4 sm:p-24 gap-12 text-white'>
				<h1 className='text-4xl '>
					Why not try an amazing College Costs Calculator?
				</h1>
				<div className='flex flex-col sm:flex-row h-fit gap-4 sm:gap-12 text-2xl'>
					<button
						className='border-2 p-4 rounded-lg hover:text-black hover:bg-white'
						style={{
							backgroundColor: url === LOCAL ? 'white' : 'inherit',
							color: url === LOCAL ? 'black' : 'inherit',
						}}
						onClick={() => setUrl(LOCAL)}
					>
						LOCALHOST
					</button>
					<button
						className='border-2 p-4 rounded-lg hover:text-black hover:bg-white'
						onClick={() => setUrl(UAT)}
						style={{
							backgroundColor: url === UAT ? 'white' : 'inherit',
							color: url === UAT ? 'black' : 'inherit',
						}}
					>
						UAT
					</button>
				</div>
			</div>
			{url && (
				<iframe
					className='flex w-full items-center justify-center px-4 sm:w-1/2 sm:mt-12'
					id='inlineIframeTest'
					title='Use the College Costs Calculator'
					height='880'
					src={url}
				/>
			)}
		</main>
	)
}
