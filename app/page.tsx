import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='w-screen h-full pb-60 bg-black'>
			<h1 className='p-24 text-4xl text-white'>
				Why not try an amazing College Costs Calculator?
			</h1>
			<iframe
				className='flex w-1/2 mx-24 mb-32'
				id='inlineIframeTest'
				title='Use the College Costs Calculator'
				height='800'
				src='http://localhost:3000/college-costs-calculator'
			/>
		</main>
	)
}
