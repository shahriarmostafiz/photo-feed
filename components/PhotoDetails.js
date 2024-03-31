import { getDictionary } from '@/app/[lang]/dictionaries';
import Image from 'next/image';
import React from 'react';
import Tag from './Tag';

const PhotoDetails = async ({ id, lang }) => {
    const response = await fetch(`${process.env.BaseURL}/photos/${id}`)
    // const details = await res.json()
    const details = await response.json();

    const dictionary = await getDictionary(lang)
    return (
        <div>
            <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
                {/* main photo */}
                <div className="col-span-12 lg:col-span-8 border rounded-xl">
                    <Image
                        className="max-w-full h-full max-h-[70vh] mx-auto"
                        src={details.url}
                        alt={details.title}
                        width={800}
                        height={500}
                    />
                </div>
                {/* main photo ends */}
                {/* details card */}
                <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
                    <h2 className="text-lg lg:text-2xl font-bold mb-2">{details.title}</h2>
                    <Tag tags={details.tags} />
                    {/* info rows */}
                    <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
                        {/* item start */}
                        <div className="flex justify-between">
                            <span>{dictionary.views}</span>
                            <span className="font-bold">{details.views}</span>
                        </div>
                        {/* item ends */}
                        {/* item start */}
                        <div className="flex justify-between">
                            <span>{dictionary.share}</span>
                            <span className="font-bold">{details.share}</span>
                        </div>
                        {/* item ends */}
                        {/* item start */}
                        <div className="flex justify-between">
                            <span>{dictionary.uploadedOn}</span>
                            <span className="font-bold">{details.uploaded}</span>
                        </div>
                        {/* item ends */}
                    </div>
                    {/* info rows ends */}

                    <div className="mt-6">
                        {/* author header */}
                        <div className="flex justify-between items-center mb-3">
                            {/*  */}
                            <div className="flex items-center gap-3">
                                <Image
                                    className="size-12 lg:size-14 rounded-full border"
                                    src={details?.author?.avatar}
                                    alt="avatar"
                                    width={48}
                                    height={48}
                                />
                                <div className="spacy-y-3">
                                    <h6 className="lg:text-lg font-bold">{details?.author?.name}</h6>
                                    <p className="text-black/60 text-xs lg:text-sm">{details?.author?.followers} {" "} {dictionary.followers}</p>
                                </div>
                            </div>
                            {/* action */}
                            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                                <Image alt="" src="/follow.svg" className="w-5 h-5" height={20} width={20} />
                                {dictionary.follow}
                            </button>
                        </div>
                        {/* author bio */}
                        <p className="text-xs lg:text-sm text-black/60">
                            {details?.author?.bio}
                        </p>
                    </div>
                    {/* author info ends */}
                    {/* actions */}
                    <div className="mt-6">
                        <div className="flex items-stretch gap-3">
                            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                                <Image alt="" src="/heart.svg" className="w-5 h-5" height={20} width={20} />
                                {details?.likes}
                            </button>
                            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                                <Image alt="" src="/save.svg" className="w-5 h-5" height={20} width={20} />
                                {dictionary?.save}
                            </button>
                            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                                <Image alt="" src="/share.svg" className="w-5 h-5" height={20} width={20} />
                                {dictionary?.share}
                            </button>
                        </div>
                    </div>
                </div>
                {/* details card ends */}
            </div>

        </div>
    );
};

export default PhotoDetails;