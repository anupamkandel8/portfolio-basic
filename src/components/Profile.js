import React from 'react'
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center justify-center p-6  ">
      <Image src="/profile.jpg" alt="Profile" height={200} width={200} className="rounded-[30%]" />
      <h1 className="text-2xl font-bold mt-4">I am Anupam Kandel</h1>
      <p className="text-gray-600 mt-2 font-semibold">A passionate Full Stack Web Developer</p>
    </div>
  )
}
