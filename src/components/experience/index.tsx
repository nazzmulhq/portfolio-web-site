import Collapse from 'components/collapse';
import Icons from 'components/icon';

type TExperience = {
	experience: {
		companyName: string;
		designation: string;
		companyLocation: string;
		period: string;
	}[];
};

export default function Experience<T extends TExperience>({ experience }: T) {
	return (
		<div>
			<Collapse title='Experience'>
				<div className='space-y-8 p-4'>
					{experience.map(item => (
						<div className='space-x-12'>
							<div className='flex'>
								<Icons.Star className='h-8' />
								<p className='pl-4 text-xl font-semibold'>{item.period}</p>
							</div>
							<div className='flex items-center'>
								<Icons.RightArrow className='h-4' />
								<p className='pl-4 text-xl font-semibold'>Designation:</p>
								<p className='pl-4 text-lg font-medium'>{item.designation}</p>
							</div>
							<div className='flex items-center'>
								<Icons.RightArrow className='h-4' />
								<p className='pl-4 text-base font-semibold'>Company Name:</p>
								<p className='pl-4 text-base font-medium'>{item.companyName}</p>
							</div>
							<div className='flex items-center'>
								<Icons.RightArrow className='h-4' />
								<p className='pl-4 text-base font-semibold'>Company Location:</p>
								<p className='pl-4 text-base font-medium'>{item.companyLocation}</p>
							</div>
						</div>
					))}
				</div>
			</Collapse>
		</div>
	);
}
