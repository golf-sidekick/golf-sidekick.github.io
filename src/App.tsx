import { MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import apple from './apple.svg'
import background from './background.jpg'
import google from './google.png'
import logo from './logo.png'
import placeholder from './iphone.png'

const googleLink =
	'https://play.google.com/store/apps/details?id=com.golfsidekick'
const appleLink = 'https://testflight.apple.com/join/t6ys2guf'

function App() {
	return (
		<div
			className={'h-screen bg-fixed bg-center bg-cover'}
			style={{
				backgroundImage: `url(${background})`
			}}
		>
			<div className={'flex justify-end items-center w-full bg-white h-20'}>
				<div className={'flex-1 ml-9'}>
					<img
						src={logo}
						alt={'Golf Sidekick Logo'}
						className={'object-contain h-11'}
					/>
				</div>
				<ul className={'mr-9'}>
					<li className={'float-left m-1.5'}>
						<a href={'/'}>About</a>
					</li>
					<li className={'float-left m-1.5'}>
						<a href={'/'}>Contact</a>
					</li>
				</ul>
				<a className={'mr-9'} href={'/'}>
					<MenuIcon className={'h-8'} />
				</a>
			</div>
			<div className={'container mx-auto px-9 my-9 lg:w-8/12 text-white'}>
				<div className={'flex flex-row flex-wrap justify-center items-center'}>
					<div className={'flex flex-col items-start md:w-6/12'}>
						<h1 className={'text-5xl font-bold mb-6'}>Welcome Playa!</h1>
						<h2 className={'text-lg font-thin mb-12 drop-shadow-md'}>
							Plan golf games with like minded strangers to build a community of
							new friends.
						</h2>

						<div className={'flex flex-col'}>
							<p className={'text-lg font-thin divider divide-gray-100'}>
								Get the app
							</p>
							<div className={'flex flex-row justify-start items-end'}>
								<a href={googleLink}>
									<img
										className={'object-contain max-h-16'}
										src={google}
										alt={'Google Play Store'}
									/>
								</a>
								<a href={appleLink}>
									<img
										className={'object-contain max-h-16 p-3'}
										src={apple}
										alt={'Apple App Store'}
									/>
								</a>
							</div>
						</div>
					</div>
					<div className={'md:w-5/12'}>
						<img
							className={'object-fill'}
							src={placeholder}
							alt={'Placeholder'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
