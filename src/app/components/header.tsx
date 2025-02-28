import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Header() {
    return (
        <>
            <header className="w-full h-fit border-b p-5">
                <div className="flex items-center justify-between">
                    <SidebarTrigger />
                    <div className="flex justify-end w-full">
                        <div className="flex items-center space-x-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>
                                Vitor Ferreira
                            </span>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}
