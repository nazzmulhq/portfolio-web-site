import Icons from 'components/icon';
import { useState } from 'react';

type TCollapse = {
	title: string;
	children: JSX.Element;
	isCollapse: boolean;
	icon?: React.SVGProps<SVGSVGElement>;
};

export default function Collapse<T extends TCollapse>({ title, children, isCollapse: collapse }: T) {
	const [isCollapse, setIsCollapse] = useState(collapse);
	const onClick = () => {
		setIsCollapse(!isCollapse);
	};

	return (
		<div className='lg:h-full'>
			<div onClick={onClick}>
				<div
					className={`title rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg ${
						isCollapse && 'rounded-bl-none rounded-br-none'
					}  shadow hover:shadow-md cursor-pointer`}>
					<div className='px-3 py-3 flex items-center justify-between '>
						<div className='flex items-center'>
							<Icons.Grid className='h-8 w-8 title-text ml-1' />
							<p className='title-text text-2xl font-semibold ml-4'>{title}</p>
						</div>

						<Icons.RightArrow
							className={`w-4 title-text transform delay-100 duration-300 ${isCollapse && 'rotate-90'} `}
						/>
					</div>
				</div>
			</div>

			<div
				className={`bg-gradient-custom rounded-br-lg rounded-bl-lg shadow-sm hover:shadow-md  transition-opacity delay-300 duration-500 ${
					isCollapse ? 'p-2 w-full opacity-100 h-auto' : 'h-0 w-0 opacity-0'
				}`}>
				<div className={`${!isCollapse && 'hidden'}`}>{children}</div>
			</div>
		</div>
	);
}
