"use client"

import { Question } from "@/components/Question"

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-sky-500">
      <div className="bg-white text-black p-4 rounded-md">
        <h1>Quiz</h1>
        <hr className="border-gray-400"/>
        <Question />
      </div>
    </div>
  )
}

export default Page