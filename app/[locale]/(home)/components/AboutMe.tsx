import { Button } from "@/components/ui/button";
import ImgDev from "@/public/assets/perfil.jpg";
import Image from "next/image";

export function AboutMe() {
  return (
    <section className="flex flex-wrap w-full">
      <div className="w-full flex flex-col lg:w-[50%]">
        <Image
          src={ImgDev}
          width={200}
          height={200}
          className="rounded-full border-4 border-white"
          alt="Image of me"
        />
      </div>

      <div className="w-full flex flex-col bg-red-500 gap-1 lg:w-[50%]">
        <h3 className="font-bold text-2xl">About me</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus
          commodi, sit illum corrupti tenetur illo atque dicta, itaque
          necessitatibus rerum enim quia ratione alias tempore, architecto
          molestiae odit fugit.
        </p>
        <Button>See more</Button>
      </div>
    </section>
  );
}
