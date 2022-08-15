import Icons from 'components/icon';

type TItem = {
	name: string;
	value: string;
};

export default function Item<T extends TItem>({ name, value }: T) {
	return (
		<div className='flex items-center'>
			<div className='flex items-center'>
				<Icons.RightArrow className='h-4' />
				<p className='pl-4 text-base font-semibold capitalize'>{name}</p>
			</div>
			<div className='flex items-center'>
				<p className='pl-24 text-base font-semibold'>:</p>
				<p className='pl-4 text-base font-medium'>{value}</p>
			</div>
		</div>
	);
}
