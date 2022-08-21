type TSkill = {
	title: string;
	language: string[];
	libraryOrFramework: string[];
	other: string[];
};

export default function Skill<T extends TSkill>({ language, libraryOrFramework, other }: T) {
	return (
		<div
			className={` bg-white rounded-lg transform transition-opacity
                delay-150 duration-500 p-4`}>
			<p className='text-left text-lg font-semibold mb-1'>Language:</p>
			<div className='grid sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-2 xl:grid-cols-4 gap-2 justify-center'>
				{language.map(item => (
					<span
						key={item}
						className='px-2 py-1 text-xs font-medium text-center border rounded-2xl bg-gray-100 cursor-pointer'>
						{item}
					</span>
				))}
			</div>
			<p className='text-left text-lg font-semibold mb-1 mt-3'>Library/Framework:</p>
			<div className='grid  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-2 xl:grid-cols-4 gap-2'>
				{libraryOrFramework.map(item => (
					<span
						key={item}
						className='px-2 py-1 text-xs font-medium text-center border rounded-2xl bg-gray-100 cursor-pointer'>
						{item}
					</span>
				))}
			</div>
			<p className='text-left text-lg font-semibold mb-1 mt-3'>Other:</p>
			<div className='grid   sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-2 xl:grid-cols-4 gap-2'>
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
