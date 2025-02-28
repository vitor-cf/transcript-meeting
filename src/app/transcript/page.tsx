
"use client"
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react"
import { useCallback, useRef, useState } from "react";
import { Remarkable } from "remarkable";

export default function Transcript() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [markdownContent, setMarkdownContent] = useState<string | null>(null);
    const [htmlContent, setHtmlContent] = useState<string | null>(null);

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target?.result as string;
                setMarkdownContent(content);

                const md = new Remarkable();
                const html = md.render(content);
                setHtmlContent(html);
            };

            reader.readAsText(file);
        }
    }, []);

    return (
        <>
            <main className="bg-gray-100 w-full h-full flex flex-col items-center justify-center pb-5">
                {!htmlContent && (
                    <div className="flex flex-col items-center text-gray-300 hover:text-gray-500 cursor-pointer">
                        <Input
                            id="markdownFile"
                            accept=".md"
                            type="file"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <Upload className="" onClick={handleIconClick} size={72} />
                        <span className="text-2xl font-bold">Upload Markdown</span>
                    </div>
                )}

                {htmlContent && (
                    <div className="mt-4 p-4 bg-white rounded-md shadow-md w-5/6">
                        <h2>Preview:</h2>
                        <div style={{ minWidth: '100%' }} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </div>
                )}
            </main>
        </>
    );
}