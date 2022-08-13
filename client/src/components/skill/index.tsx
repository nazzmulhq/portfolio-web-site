type TSkill = {
	title: string;
	language: string[];
	libraryOrFramework: string[];
	other: string[];
};

export default function Skill<T extends TSkill>({ title, language, libraryOrFramework, other }: T) {
	return (
		<div
			className={` bg-white rounded-lg transform transition-opacity
                delay-150 duration-500 p-3`}>
			<p className='text-left text-lg font-semibold'>Language:</p>
			<div className='grid  md:grid-cols-2  lg:grid-cols-4 gap-2'>
				{language.map(item => (
					<span
						key={item}
						className='px-2 py-1 text-xs font-medium text-center border rounded-2xl bg-gray-100 cursor-pointer'>
						{item}
					</span>
				))}
			</div>
			<p className='text-left text-lg font-semibold'>Library/Framework:</p>
			<div className='grid  md:grid-cols-2  lg:grid-cols-4 gap-2'>
				{libraryOrFramework.map(item => (
					<span
						key={item}
						className='px-2 py-1 text-xs font-medium text-center border rounded-2xl bg-gray-100 cursor-pointer'>
						{item}
					</span>
				))}
			</div>
			<p className='text-left text-lg font-semibold'>Other:</p>
			<div className='grid  md:grid-cols-2  lg:grid-cols-4 gap-2'>
				{other.map(item => (
					<span
						key={item}
						className='px-2 py-1 text-xs font-medium text-center border rounded-2xl bg-gray-100 cursor-pointer'>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}
