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
		<div className='bg-white rounded-lg relative'>
			<img
				src={pic}
				alt=''
				className='w-40 absolute right-0 left-0 -top-1/3 rounded-full mx-auto ring-8 ring-gray-700 border-8 border-white'
			/>
			<div className='p-4 space-y-2 mt-28'>
				<div className='text-center space-y-1 mt-20'>
					<p className='text-3xl text-gray-700 font-bold'>{name}</p>
					<p className='text-xl text-gray-500 font-bold'>{position}</p>
					<p className='text-sm text-gray-500 font-bold'>{address}</p>
					<p className='text-xs text-gray-500 font-bold'>{email}</p>
					<p className='text-xs text-gray-500 font-bold'>{phone}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
