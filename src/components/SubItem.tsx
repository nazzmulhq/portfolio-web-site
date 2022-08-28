import Icons from 'components/icon';

type TSubItem = {
	name: string;
	value: string;
};

export default function SubItem<T extends TSubItem>({ name, value }: T) {
	let showValue;
	if (name === 'link') {
		showValue = (
			<a
				href={value}
				target='_blank'
				className='md:pl-4 sm:text-xs md:text-base font-medium w-11/12 text-justify text-blue-600 cursor-pointer'>
				Live Project Link
			</a>
		);
	} else if (value.split('.').length > 2) {
		showValue = (
			<p className='md:pl-4 sm:text-xs md:text-base font-medium w-11/12 lg:text-justify'>
				{window.innerWidth >= 1000
					? value
					: window.innerWidth > 700
					? value.split('.').slice(0, 2).join('.')
					: window.innerWidth > 300
					? value.split('.').slice(0, 1).join('.')
					: ''}
			</p>
		);
	} else {
		showValue = <p className='md:pl-4 sm:text-xs md:text-base font-medium w-11/12 text-justify '>{value}</p>;
	}
	return (
		<div className='flex  sm:pl-4 md:pl-0'>
			<div className='flex sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/6'>
				<Icons.RightArrow className='sm:h-2 md:h-4 mt-1' />
				<p className='sm:pl-1 md:pl-4 sm:text-xs md:text-base font-semibold capitalize'>{name}</p>
			</div>
			<div className='flex sm:w-3/4 md:w-2/3 lg:w-3/4 2xl:w-5/6'>
				<p className='text-base font-semibold w-1/12'>:</p>
				{showValue}
			</div>
		</div>
	);
}
