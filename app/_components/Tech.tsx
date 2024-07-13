import { FaReact } from "react-icons/fa6";
import { SiExpo, SiFirebase, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiVisualstudio, SiVite } from "react-icons/si";

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
            </p>
        </div>
    )
}