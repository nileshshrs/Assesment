import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { clearCart, removeFromCart } from "@/store/slices/cartSlice";

const Layout = () => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="flex h-screen overflow-hidden p-3 gap-3">
            <aside className="hidden lg:flex w-[275px] h-full px-5 py-4 flex-col gap-3 bg-gray-200/50 rounded-sm shadow-2xl">
                <h1 className="my-5 font-extrabold text-xl px-3">A STORE</h1>
                <div className="bg-gray-500/50 px-4 py-3 text-white inline-flex items-center gap-3 mb-5 rounded-sm">
                    <div className="rounded-full border border-white w-[40px] aspect-square font-bold flex items-center justify-center">
                        N
                    </div>
                    <div className="font-semibold">Nilesh</div>
                </div>
                <Sidebar />
            </aside>
            <ScrollArea className="flex-1 overflow-y-auto p-3 bg-gray-200/50 rounded-sm shadow-2xl @container">
                <div className="flex justify-between px-5 mb-5 items-center">
                    {/* Open menu for small screens */}
                    <div className="mb-4 lg:hidden">
                        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                            <SheetTrigger asChild>
                                <Button className="bg-gray-500/50 text-white">Open Menu</Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64 p-4 bg-gray-200">
                                <h1 className="my-5 font-extrabold text-xl px-3">A STORE</h1>
                                <div className="bg-gray-500 px-4 py-3 text-white inline-flex items-center gap-3 mb-5 rounded-sm">
                                    <div className="rounded-full border border-white w-[40px] aspect-square font-bold flex items-center justify-center">
                                        N
                                    </div>
                                    <div className="font-semibold">Nilesh</div>
                                </div>
                                <Sidebar />
                            </SheetContent>
                        </Sheet>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="border-2 border-black p-5 flex items-center gap-2 bg-white text-black rounded-full relative hover:bg-gray-200 transition-all ease-in ms-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                </svg>
                                <span className="absolute top-6 bg-red-800 rounded-full px-1.5 text-white -right-1.5">
                                    {cartItems.length}
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            alignOffset={-20}
                            className="w-80 max-h-96 p-2 bg-white shadow-lg rounded-md overflow-y-auto"
                        >
                            {cartItems.length === 0 ? (
                                <DropdownMenuItem className="text-gray-500 cursor-default">
                                    Your cart is empty
                                </DropdownMenuItem>
                            ) : (
                                <>
                                    {cartItems.map((item) => (
                                        <DropdownMenuItem
                                            key={item.id}
                                            className="flex items-center justify-between hover:bg-gray-100 p-2"
                                        >
                                            <div className="flex items-start gap-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-12 h-12 object-contain rounded"
                                                />
                                                <span className="text-sm font-medium leading-snug line-clamp-2 w-48">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-gray-700 font-semibold">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="text-red-600 p-0 hover:bg-transparent"
                                                    onClick={() => dispatch(removeFromCart(item.id))}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </DropdownMenuItem>
                                    ))}
                                    <div className="mt-2 border-t pt-2">
                                        <Button
                                            variant="outline"
                                            className="w-full text-black hover:bg-gray-100"
                                            onClick={() => dispatch(clearCart())}
                                        >
                                            Clear Cart
                                        </Button>
                                    </div>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Outlet />
            </ScrollArea>
        </div>
    );
};

export default Layout;
