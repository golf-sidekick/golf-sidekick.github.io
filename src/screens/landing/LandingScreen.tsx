import React, { CSSProperties } from 'react'

import { ScreenShot } from 'components/screen-shot'
import { TopMenu } from 'components/top-menu'
import apple from 'assets/apple.svg'
import background from 'assets/background-2.jpg'
import classNames from 'classnames'
import google from 'assets/google.png'
import screenshot1 from 'assets/screenshot-1.png'

const googleLink =
	'https://play.google.com/store/apps/details?id=com.golfsidekick'
const appleLink = 'https://testflight.apple.com/join/t6ys2guf'

const Body = ({
	children,
	style = {}
}: {
	children: React.ReactNode | React.ReactNodeArray
	style?: CSSProperties
}) => {
	return (
		<div
			className={'h-screen overflow-x-auto bg-fixed bg-center bg-cover'}
			style={style}
		>
			{children}
		</div>
	)
}

const Section = ({
	children,
	className
}: {
	children: React.ReactNode | React.ReactNodeArray
	className?: string
}) => {
	return (
		<div
			className={classNames(
				'flex',
				'flex-col',
				'md:flex-row',
				'flex-wrap',
				'justify-center',
				'items-center',
				'pt-9',
				className
			)}
		>
			{children}
		</div>
	)
}

const Break = ({ inverse = false }: { inverse?: boolean }) => {
	return (
		<svg className={'fill-current text-white'} viewBox={'0 0 100 5'}>
			{inverse ? (
				<polygon points="100,0 0,0 0,5" />
			) : (
				<polygon points="100,0 100,5 0,5" />
			)}
		</svg>
	)
}

const LandingScreen = () => {
	return (
		<Body
			style={{
				background: `linear-gradient(150deg, rgba(0,80,151,0.6825105042016807) 0%, rgba(0,80,151,1) 35%, rgba(0,80,151,0.6993172268907564) 100%)`
			}}
		>
			<TopMenu />
			<Section>
				<div className={'flex flex-col items-center text-white'}>
					<div className={'w-7/12 text-center'}>
						<h1 className={'text-6xl font-bold mb-6 text-shadow'}>
							Welcome Playa!
						</h1>
						<h2 className={'text-lg font-normal mb-12 text-shadow'}>
							Plan golf games with like minded strangers to build a community of
							new friends.
						</h2>
						<div
							className={
								'flex flex-col bg-white bg-opacity-30 p-1 rounded-md text-center'
							}
						>
							<p className={'text-lg font-thin'}>Get the app</p>
							<div className={'flex flex-row justify-center items-end'}>
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
				</div>
				<div className={'pt-9 lg:pt-0 flex items-center justify-center'}>
					<div className={'max-w-xs'}>
						<ScreenShot src={screenshot1} />
					</div>
				</div>
			</Section>
			<Break />
			<Section className={'bg-white'}>
				<div className={'flex items-center justify-center'}>
					<div className={'max-w-xs'}>
						<ScreenShot src={screenshot1} />
					</div>
				</div>
				<div className={'pt-9 lg:pt-0 flex flex-col items-center text-black'}>
					<div className={'w-7/12 text-center'}>
						<h1 className={'text-6xl font-bold mb-6'}>Welcome Playa!</h1>
						<h2 className={'text-lg font-normal mb-12'}>
							Plan golf games with like minded strangers to build a community of
							new friends.
						</h2>
					</div>
				</div>
			</Section>
			<Break inverse />
			<Section>
				<div className={'flex flex-col items-center text-white'}>
					<div className={'w-7/12 text-center'}>
						<h1 className={'text-6xl font-bold mb-6 text-shadow'}>
							Welcome Playa!
						</h1>
						<h2 className={'text-lg font-normal mb-12 text-shadow'}>
							Plan golf games with like minded strangers to build a community of
							new friends.
						</h2>
					</div>
				</div>
				<div className={'pt-9 lg:pt-0 flex items-center justify-center'}>
					<div className={'max-w-xs'}>
						<ScreenShot src={screenshot1} />
					</div>
				</div>
			</Section>
		</Body>
	)
}

export default LandingScreen
