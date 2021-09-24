import { CSSProperties } from 'react'
import classNames from 'classnames'

const Body = ({
	children,
	className,
	style = {}
}: {
	children: React.ReactNode | React.ReactNodeArray
	className?: string
	style?: CSSProperties
}) => {
	return (
		<div
			className={classNames(
				'h-screen',
				'overflow-x-auto',
				'bg-center',
				'bg-cover',
				'bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300',
				className
			)}
			style={style}
		>
			{children}
		</div>
	)
}

export default Body
