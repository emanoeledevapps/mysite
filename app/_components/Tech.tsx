import { FaReact } from "react-icons/fa6";
import { SiCss3, SiExpo, SiFirebase, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiSass, SiTailwindcss, SiTypescript, SiVisualstudio, SiVite } from "react-icons/si";

interface Props {
    name: string;
}

export function Tech({ name }: Props) {
    return (
        <div className="flex items-center gap-2">
            {name === 'reactjs' && (
                <FaReact size={30} className="text-blue-500" />
            )}

            {name === 'react-native' && (
                <FaReact size={30} className="text-blue-500" />
            )}

            {name === 'nextjs' && (
                <SiNextdotjs size={30} className="text-white" />
            )}

            {name === 'expo' && (
                <SiExpo size={30} className="text-white" />
            )}

            {name === 'vite' && (
                <SiVite size={30} className="text-purple-600" />
            )}

            {name === 'firebase' && (
                <SiFirebase size={30} className="text-yellow-600" />
            )}

            {name === 'nodejs' && (
                <SiNodedotjs size={30} className="text-green-600" />
            )}

            {name === 'prisma' && (
                <SiPrisma size={30} className="text-white" />
            )}

            {name === 'postgresql' && (
                <SiPostgresql size={30} className="text-blue-500" />
            )}

            {name === 'vscode' && (
                <SiVisualstudio size={30} className="text-blue-500" />
            )}

            {name === 'tailwindcss' && (
                <SiTailwindcss size={30} className="text-blue-500" />
            )}

            {name === 'sass' && (
                <SiSass size={30} className="text-purple-400" />
            )}

            {name === 'javascript' && (
                <SiJavascript size={30} className="text-yellow-500" />
            )}

            {name === 'typescript' && (
                <SiTypescript size={30} className="text-blue-500" />
            )}

            {name === 'html' && (
                <SiHtml5 size={30} className="text-orange-600" />
            )}

            {name === 'css' && (
                <SiCss3 size={30} className="text-blue-500" />
            )}

            <p className="font-bold text-white">
                {name === 'reactjs' && 'ReactJS'}
                {name === 'react-native' && 'React Native'}
                {name === 'nextjs' && 'NextJS'}
                {name === 'expo' && 'Expo'}
                {name === 'vite' && 'Vite'}
                {name === 'firebase' && 'Firebase'}
                {name === 'nodejs' && 'NodeJS'}
                {name === 'prisma' && 'Prisma'}
                {name === 'postgresql' && 'Postgresql'}
                {name === 'vscode' && 'VS Code'}
                {name === 'tailwindcss' && 'Tailwind CSS'}
                {name === 'sass' && 'Sass'}
                {name === 'javascript' && 'Javascript'}
                {name === 'typescript' && 'Typescript'}
                {name === 'html' && 'HTML'}
                {name === 'css' && 'CSS'}
            </p>
        </div>
    )
}