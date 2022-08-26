type TTag = {
	children: string;
};

export default function Tag<T extends TTag>({ children }: T) {
	return (
		<span className='px-2 py-1 text-gray-700 text-xs font-medium text-center  border rounded-2xl bg-indigo-50  cursor-pointer'>
			{children}
		</span>
	);
}
