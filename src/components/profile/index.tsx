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
		<div className='bg-white rounded-lg'>
			<div className='p-4 space-y-2'>
				<img src={pic} alt='' className='w-36 rounded-full mx-auto shadow-sm border-4 border-purple-500' />
				<div className='text-center space-y-1'>
					<p className='text-2xl font-bold'>{name}</p>
					<p className='text-lg font-bold'>{position}</p>
					<p className='text-sm font-bold'>{address}</p>
					<p className='text-xs font-bold'>{email}</p>
					<p className='text-xs font-bold'>{phone}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
