import Icons from 'components/icon';

type TItem = {
	name: string;
	value: string;
};

export default function Item<T extends TItem>({ name, value }: T) {
	return (
		<div className='flex items-center'>
			<div className='flex items-center sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/6'>
				<Icons.RightArrow className='h-4' />
				<p className='sm:pl-1 md:pl-4 sm:text-xs md:text-base font-semibold capitalize'>{name}</p>
			</div>
			<div className='flex items-center sm:w-1/2 md:w-2/3 lg:w-3/4 2xl:w-5/6'>
				<p className='text-base font-semibold w-1/12'>:</p>
				<p className='md:pl-4 sm:text-xs md:text-base font-medium w-11/12'>{value}</p>
			</div>
		</div>
	);
}
