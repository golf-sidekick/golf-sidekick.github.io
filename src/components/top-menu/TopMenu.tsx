import { MenuIcon } from '@heroicons/react/solid'
import React from 'react'
import { TopMenuProps } from './TopMenuProps'
import logo from 'assets/logo.png'

const TopMenu = ({}: TopMenuProps) => {
	return (
		<div className={'flex w-full h-20 bg-white bg-opacity-30 items-center'}>
			<div className={'container mx-auto flex justify-end items-center'}>
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
		</div>
	)
}

export default TopMenu
