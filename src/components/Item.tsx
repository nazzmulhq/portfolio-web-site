import Collapse from './collapse';
import Icons from './icon';
import SubItem from './SubItem';

type TItem = {
	title: string;
	items: {
		[key: string]: string | undefined;
	}[];
};

export default function Item<T extends TItem>({ title, items }: T) {
	return (
		<div>
			<Collapse isCollapse={false} title={title}>
				<div className='sm:space-y-2 md:space-y-4 md:p-4'>
					{items.map(item => (
						<div className='md:space-x-10'>
							<div className='flex items-center'>
								<Icons.Star className='sm:h-4 md:h-6' />
								<p className='sm:pl-2 md:pl-4 sm:text-base md:text-lg font-semibold'>{item.title}</p>
							</div>
							<>
								{Object.keys(item).map(key => {
									// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
									if (key !== 'title') return <SubItem name={key} value={item[key]!} />;
								})}
							</>
						</div>
					))}
				</div>
			</Collapse>
		</div>
	);
}
