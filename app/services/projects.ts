export interface ProjectProps {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    icon: string;
    bannerUrl: string;
    screenshots: string[];
    techs: string[],
    websiteUrl?: string;
    googlePlayUrl?: string;
    appleStoreUrl?: string;
    aboutDevelopment: string;
}

export const projects: ProjectProps[] = [
    {
        id: 'soccer-bolao',
        title: 'Soccer Bolão',
        description: 'Descrição',
        shortDescription: 'Descrição curta',
        icon: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Ficon-play.png?alt=media&token=2cb07788-9950-4156-8fba-828a3ad9fb86',
        bannerUrl: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2FTESTE_BANNER_SITE.png?alt=media&token=753888ec-c06e-4fdc-b0b7-d5784f5f984b',
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-1.png?alt=media&token=dda74185-955e-4ce6-b438-b8110ef52189',
            'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-2.png?alt=media&token=85931591-3ced-4f7f-9121-3ced30b019d7',
            'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-3.png?alt=media&token=e353fcb5-7a0f-4cce-8690-af5599b6c98c',
            'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-4.png?alt=media&token=7b7516f4-14e2-4b05-ade5-33a3d04c858c',
            'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-5.png?alt=media&token=9a9961a3-7f7b-4f9f-b5e7-6afcd7f38b21',
            'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-6.png?alt=media&token=5ec292b1-4caa-4ba0-a85e-40b10300ff22'
        ],
        techs: ['react-native', 'expo', 'firebase', 'nodejs', 'prisma', 'postgresql'],
        aboutDevelopment: 'Sobre o desenvolvimento foi assim assim e assado'
    }
];

export function GetProject(id: string){
    const project = projects.filter(item => item.id === id);
    return project[0];
}