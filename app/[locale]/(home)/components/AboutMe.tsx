import { Button } from "@/components/ui/button";
import ImgDev from "@/public/assets/perfil.jpg";
import { TType } from "@/types/t";
import Image from "next/image";

interface Props {
  t: TType;
}
export function AboutMe({ t }: Props) {
  return (
    <section className="flex flex-wrap w-full">
      <div className="w-full flex items-center gap-10 lg:w-[50%] bg-gray-100 rounded-2xl p-5">
        <Image
          src={ImgDev}
          width={200}
          height={200}
          className="rounded-full border-4 border-white"
          alt="Image of me"
        />

        <div className="flex flex-col gap-2">
          <h3 className="text-black font-bold lg:text-2xl">
            Emanoel Augusto Freires
          </h3>
          <p className="text-gray-600 text-sm lg:text-base">
            23 {t("home.years")}, Santo André - SP
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 lg:w-[50%] p-5">
        <h3 className="font-bold text-2xl">About me</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus
          commodi, sit illum corrupti tenetur illo atque dicta, itaque
          necessitatibus rerum enim quia ratione alias tempore, architecto
          molestiae odit fugit.
        </p>
        <Button className="mt-5">{t("home.seeMore")}</Button>
      </div>
    </section>
  );
}
