import React from 'react'
import { TopMenuProps } from './TopMenuProps'

const TopMenu = ({}: TopMenuProps) => {
	return (
		<div className={'flex w-full h-20 items-center text-white'}>
			<div className={'container mx-auto flex justify-end items-center'}>
				<ul className={'mr-9 divide-x'}>
					<li className={'float-left px-4'}>
						<a href={'/'}>About</a>
					</li>
					<li className={'float-left px-4'}>
						<a href={'/'}>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default TopMenu
