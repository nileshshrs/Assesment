import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"


const Layout = () => {
    return (
        <div className="flex h-screen overflow-hidden p-3 gap-3">
            {/* Sidebar (fixed height, no scroll) */}
            <aside className="w-[275px] h-full px-5 py-4 flex flex-col gap-3 bg-gray-200/50 rounded-sm shadow-2xl">
                <h1 className="my-5 font-extrabold text-xl px-3">A STORE</h1>
                <div className="bg-gray-500/50 px-4 py-3 text-white inline-flex items-center gap-3 mb-5 rounded-sm">
                    <div className="rounded-full border border-white w-[40px] aspect-square font-bold flex items-center justify-center">N</div>
                    <div className="font-semibold">Nilesh</div>
                </div>
                <Sidebar />
            </aside>

            {/* Right side (scrollable) */}
            <ScrollArea className="flex-1 overflow-y-auto p-3  bg-gray-200/50 rounded-sm shadow-2xl @container">
                <Outlet />
            </ScrollArea>
        </div>
    )
}

export default Layout
