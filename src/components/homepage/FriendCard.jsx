import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friend}) => {
    return (
        <Link href={`/friends/${friend.id}`} className='bg-white p-6 rounded-lg [box-shadow:0_3px_6px_rgba(0,_0,_0,_0.08)] flex justify-center items-center flex-col'>
            <Image className='mb-3' src={friend.picture} width={80} height={80} alt={friend.bio}></Image>
            <h2 className='mb-2 text-[#1F2937] font-semibold text-[20px]'>{friend.name}</h2>
            <p className='mb-2 text-[#64748B] text-[12px]'>{friend.days_since_contact}d ago</p>
            <div className='mb-2 flex gap-2'>{friend.tags.map((tag, index)=> <p className='bg-[#CBFADB] text-[#244D3F] p-[8px] rounded-[100px] text-[12px] font-medium uppercase' key={index}>{tag}</p>)}</div>
            <p className={`${friend.status === 'On Track' ? 'bg-[#244D3F]' : friend.status === 'Overdue' ? 'bg-[#EF4444]' : 'bg-[#EFAD44]'} p-2 rounded-full  text-white font-medium text-[12px]`}>{friend.status}</p>
        </Link>
    );  
};

export default FriendCard;