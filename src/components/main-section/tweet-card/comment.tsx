import React from 'react';
import { CommentType } from '../../../utils/tweet-card.types';

const Comment: React.FC<{ comment: CommentType }> = ({ comment }) => {
    return (
        <div className="flex gap-2 my-2 items-start">
            <img
                src={comment.profilePicture}
                alt="profile-image"
                className="rounded-full h-8 w-8"
            />
            <div className="flex flex-col bg-[#293138] px-3 py-2 gap-2 w-full rounded-md rounded-tl-none">
                <div className="flex items-center align-middle gap-1">
                    <p className="text-sm font-medium text-zinc-200">{comment.name}</p>
                    <p className="text-xs font-normal text-[#999]">@{comment.username}</p>
                </div>
                <p className="text-white text-sm">{comment.comment}</p>
            </div>
        </div>
    );
};

export default Comment;
