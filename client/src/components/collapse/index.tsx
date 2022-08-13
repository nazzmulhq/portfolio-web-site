import Icons from 'components/icon';
import { useState } from 'react';

type TCollapse = {
	title: string;
	children: JSX.Element;
};

export default function Collapse<T extends TCollapse>({ title, children }: T) {
	const [isCollapse, setIsCollapse] = useState(false);
	const onClick = () => {
		setIsCollapse(!isCollapse);
	};

	return (
		<div className='mb-6'>
			<div onClick={onClick}>
				<div className='bg-white rounded-lg shadow-sm cursor-pointer'>
					<div className='px-3 py-3 flex items-center justify-between '>
						<p className='text-xl font-semibold'>{title}</p>
						<Icons.RightArrow
							className={`w-4 transform delay-100 duration-300 ${isCollapse && 'rotate-90'} `}
						/>
					</div>
				</div>
			</div>

			<div
				className={`bg-white rounded-lg shadow-sm transition-opacity delay-300 duration-500 ${
					isCollapse ? 'mt-2 p-2 w-full opacity-100 h-auto' : 'h-0 w-0 opacity-0'
				}`}>
				<div className={`${!isCollapse && 'hidden'}`}>{children}</div>
			</div>
		</div>
	);
}
