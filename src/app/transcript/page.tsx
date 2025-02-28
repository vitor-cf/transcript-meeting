
"use client"
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react"
import { useRef } from "react";

export default function Transcript() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = (e) => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <main className="bg-gray-100 w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center text-gray-300 hover:text-gray-500 cursor-pointer">
                    <Input id="picture"  accept="video/*" type="file" className="hidden" ref={fileInputRef} />
                    <Upload className="" onClick={(e) => handleIconClick(e)} size={72}/>
                    <span className="text-2xl font-bold">Upload video</span>
                </div>
            </main>
        </>
    )
}