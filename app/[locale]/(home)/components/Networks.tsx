import { Button } from "@/components/ui/button";

export function Networks() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h3 className="text-xl text-center font-bold">Networks</h3>

      <div className="flex items-center gap-10">
        <Button>Github</Button>
        <Button>Linkedin</Button>
        <Button>Whatsapp</Button>
      </div>
    </section>
  );
}
