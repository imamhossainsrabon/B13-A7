import React from 'react';
import { SiAlwaysdata } from 'react-icons/si';
import FriendCard from './FriendCard';

const friendsDataFetch = async ()=>{
        const res = await fetch("http://localhost:3000/data.json")
        const data = await res.json()
        return data
    }

const FriendsSection = async () => {
    

    const Friends = await friendsDataFetch() 


    console.log(Friends)
    return (
        <div className='px-3'>
            <div className='w-full max-w-[1110px] mx-auto pb-20 '>
            <h2 className='font-semibold text-lg lg:text-2xl text-[#1F2937] mb-4'>Your Friends</h2>
                <div className='grid lg:grid-cols-4 gap-6'>
                    {Friends.map((Friend) => <FriendCard key={Friend.id} friend={Friend} />)}
                </div>
        </div>
        </div>
    );
};

export default FriendsSection;