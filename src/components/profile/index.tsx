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
		<div className='pt-5 bg-gray-700 shadow-md rounded-lg '>
			<img
				src={pic}
				alt='Nazmul Pic'
				className='profile-pic w-40 rounded-xl mx-auto ring-4 ring-gray-100 border-4 border-gray-700'
			/>
			<div className='p-4 space-y-2'>
				<div className='text-center space-y-1'>
					<p className='text-3xl text-gray-100 font-bold'>{name}</p>
					<p className='text-xl text-gray-300 font-bold'>{position}</p>
					<p className='text-sm text-gray-300 font-bold'>{address}</p>
					<p className='text-xs text-gray-300 font-bold'>{email}</p>
					<p className='text-xs text-gray-300 font-bold'>{phone}</p>
					<div>
						<a
							href='https://drive.google.com/file/d/1X9G6zSCYdrJtsWXMSzAVampis25XDnVY/view?usp=sharing'
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
		<div className='bg-gray-700 shadow-md rounded-xl p-4 pt-5 '>
			<img
				src={pic}
				alt='Nazmul Pic'
				className='profile-pic w-40 rounded-xl mx-auto border-4 border-transparent ring-2 ring-gray-100'
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
							href='https://drive.google.com/file/d/1X9G6zSCYdrJtsWXMSzAVampis25XDnVY/view?usp=sharing'
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
