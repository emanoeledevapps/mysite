import { getProjectsList } from "../../actions";

export async function ProjectsList() {
  const response = await getProjectsList();

  return (
    <section className="flex flex-col gap-1">
      <h3 className="text-primary">Feature projects</h3>
      <div className="flex gap-5">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
}

function ProjectItem() {
  return (
    <div className="rounded-2xl flex flex-col gap-3 bg-card w-[250px] overflow-hidden">
      <div className="w-full h-[200px] bg-red-500"></div>
      <div className="flex flex-col gap-1 p-3">
        <h4 className="font-bold text-primary text-xl">Title project</h4>
        <p className="text-primary">Short description texts</p>
      </div>
    </div>
  );
}
