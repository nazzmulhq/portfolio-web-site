type TProfile = {
	pic: string;
	name: string;
	address: string;
	email: string;
	phone: string;
	position: string;
};

const Profile = <T extends TProfile>({ pic, name, address, email, phone, position }: T) => {
	return (
		<div className='bg-gray-700 shadow-md rounded-lg relative'>
			<img
				src={pic}
				alt='Nazmul Pic'
				className='w-40 absolute right-0 left-0 -top-1/3 rounded-full mx-auto ring-8 ring-gray-100 border-8 border-gray-700'
			/>
			<div className='p-4 space-y-2 mt-28'>
				<div className='text-center space-y-1 mt-20'>
					<p className='text-3xl text-gray-100 font-bold'>{name}</p>
					<p className='text-xl text-gray-300 font-bold'>{position}</p>
					<p className='text-sm text-gray-300 font-bold'>{address}</p>
					<p className='text-xs text-gray-300 font-bold'>{email}</p>
					<p className='text-xs text-gray-300 font-bold'>{phone}</p>
					<div>
						<a
							href='https://drive.google.com/file/d/197Ex2HTQ5y0M-KJLavcJtYmcvewHhKR9/view?usp=sharing'
							target='_blank'
							className='my-2 px-4 py-1 text-xs text-center font-bold text-gray-300  border border-gray-400 rounded-full cursor-pointer hover:bg-indigo-100 hover:text-gray-700'>
							Download CV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export const ProfileLg = <T extends TProfile>({ pic, name, address, email, phone, position }: T) => {
	return (
		<div className='bg-gray-700 shadow-md rounded-xl p-4'>
			<img
				src={pic}
				alt='Nazmul Pic'
				className='w-40 rounded-xl mx-auto border-4 border-transparent ring-2 ring-gray-100'
			/>
			<div className='px-4 py-1'>
				<div className='text-center space-y-1'>
					<p className='text-3xl text-gray-100 font-bold'>{name}</p>
					<p className='text-xl text-gray-300 font-bold'>{position}</p>
					<p className='text-sm text-gray-300 font-bold'>{address}</p>
					<p className='text-xs text-gray-300 font-bold'>{email}</p>
					<p className='text-xs text-gray-300 font-bold'>{phone}</p>
					<div>
						<a
							href='https://drive.google.com/file/d/1BbYVpVDnFBz7aET4P14RQZO1OaB4Xyjt/view?usp=sharing'
							target='_blank'
							className='my-2 px-4 py-1 text-xs text-center font-bold text-gray-300  border border-gray-400 rounded-full cursor-pointer hover:bg-indigo-100 hover:text-gray-700'>
							Download CV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
