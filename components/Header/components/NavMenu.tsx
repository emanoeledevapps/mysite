import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TType } from "@/types/t";
import Link from "next/link";
import { FaInbox, FaUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

interface Props {
  t: TType;
}
export function NavMenu({ t }: Props) {
  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <MdMenu size={30} color="white" />
      </SheetTrigger>
      <SheetContent className="bg-gray-900 text-white border-l border-gray-950">
        <div className="flex flex-col mt-5 w-full gap-1">
          <SheetClose asChild>
            <Link href="projects" className="flex items-center gap-3 py-3">
              <FaInbox color="white" size={18} />
              {t("header.projects")}
            </Link>
          </SheetClose>
          <SheetClose asChild className="mb-5">
            <Link href="about" className="flex items-center gap-3 py-3">
              <FaUser color="white" size={18} />
              {t("header.about")}
            </Link>
          </SheetClose>

          <LanguageSelect />
        </div>
      </SheetContent>
    </Sheet>
  );
}
