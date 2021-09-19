import React from 'react'
import { TopMenu } from 'components/top-menu'
import apple from 'assets/apple.svg'
import background from 'assets/background.jpg'
import google from 'assets/google.png'
import placeholder from 'assets/iphone.png'

const googleLink =
	'https://play.google.com/store/apps/details?id=com.golfsidekick'
const appleLink = 'https://testflight.apple.com/join/t6ys2guf'

const LandingScreen = () => {
	return (
		<div
			className={'h-screen bg-fixed bg-center bg-cover'}
			style={{
				backgroundImage: `url(${background})`
			}}
		>
			<TopMenu />
			<div className={'container mx-auto px-9 my-9 lg:w-8/12 text-white'}>
				<div className={'flex flex-row flex-wrap justify-center items-center'}>
					<div className={'flex flex-col items-start md:w-6/12'}>
						<h1 className={'text-6xl font-bold mb-6 text-shadow'}>
							Welcome Playa!
						</h1>
						<h2 className={'text-lg font-normal mb-12 text-shadow'}>
							Plan golf games with like minded strangers to build a community of
							new friends.
						</h2>

						<div className={'flex flex-col'}>
							<p
								className={
									'text-lg font-thin divider divide-gray-100 text-shadow'
								}
							>
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

export default LandingScreen
