import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { ProjectItem } from "../_components/ProjectItem";
import { projects } from "../services/projects";

export default function Projects(){
    
    return(
        <>
            <Header/>
            <main className="flex flex-col items-center w-full min-h-screen bg-black pb-20">
                <div className="w-full px-2 lg:px-0 lg:w-[1024px] flex flex-col mt-32">
                    <h1 className="text-white font-bold text-7xl text-center">Meus projetos</h1>

                    <div className="mt-20 flex flex-wrap gap-5">
                        {projects.map(item => (
                            <ProjectItem
                                key={item.id}
                                data={item}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}