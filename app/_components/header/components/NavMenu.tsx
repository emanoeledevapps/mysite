import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { FaInbox, FaUser } from "react-icons/fa6"
import { MdMenu } from "react-icons/md"

export function NavMenu() {
    return (
        <Sheet>
            <SheetTrigger
                className="p-2"
            >
                <MdMenu size={30} color='white'/>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 text-white" >
                <SheetHeader>
                    <SheetTitle className="text-white text-left">Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col mt-5 w-full">
                    <SheetClose asChild>
                        <Link
                            href='projects'
                            className="flex items-center gap-3 py-3"
                        >
                            <FaInbox color="white" size={18}/>
                            Projetos
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                            href='about'
                            className="flex items-center gap-3 py-3"
                        >
                            <FaUser color="white" size={18}/>
                            Sobre mim
                        </Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    )
}