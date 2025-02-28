import { SidebarProvider } from "@/components/ui/sidebar"
import { SquarePlay, Plus } from "lucide-react"
import {
    Sidebar, SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Header from "./header"

export default function Layout({ children }: { children: React.ReactNode }) {

    // Menu items.
    const items = [
        {
            title: "New transcription",
            url: "/",
            icon: Plus
        },
        {
            title: "My uploads",
            url: "/my-uploads",
            icon: SquarePlay,
        },
    ]

    return (
        <>
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Transcripite System</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    
                </Sidebar>
                <div className="flex flex-col w-full">
                    <Header />
                    {children}
                </div>
            </SidebarProvider>

        </>
    )
}