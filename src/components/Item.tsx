import Icons from 'components/icon';

type TItem = {
	name: string;
	value: string;
};

export default function Item<T extends TItem>({ name, value }: T) {
	return (
		<div className='flex items-center'>
			<div className='flex items-center w-1/4'>
				<Icons.RightArrow className='h-4' />
				<p className='pl-4 text-base font-semibold capitalize'>{name}</p>
			</div>
			<div className='flex items-center w-3/4'>
				<p className='text-base font-semibold w-1/12'>:</p>
				<p className='pl-4 text-base font-medium w-11/12'>{value}</p>
			</div>
		</div>
	);
}
