export interface ProjectProps {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    icon: string;
    bannerUrl: string;
    screenshots: ScreenshotProps[];
    techs: string[],
    websiteUrl?: string;
    googlePlayUrl?: string;
    appleStoreUrl?: string;
    aboutDevelopment: string;
}

interface ScreenshotProps{
    url: string;
    orientation: string;
}

export const projects: ProjectProps[] = [
    {
        id: 'soccer-bolao',
        title: 'Soccer Bolão',
        description: 'Trazendo as principais competições nacionais e internacionais, para que você faça aquela resenha com os amigos, colegas de trabalho e familiares. O Soccer Bolão tem como objetivo promover o entretenimento para os amantes do futebol, fazendo com que você jogue seus palpites, e faça uma competição amigável. Trazemos os principais campeonatos da atualidade: -Brasileirão 2024; -Copa do Brasil 2024; -Libertadores 2024; -Liga do campeões 2023/2024.',
        shortDescription: 'O Soccer Bolão tem como objetivo promover o entretenimento para os amantes do futebol',
        icon: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Ficon-play.png?alt=media&token=2cb07788-9950-4156-8fba-828a3ad9fb86',
        bannerUrl: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2FTESTE_BANNER_SITE.png?alt=media&token=dd561ea5-bd47-4721-9250-34c161da0001',
        screenshots: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-1.png?alt=media&token=dda74185-955e-4ce6-b438-b8110ef52189',
                orientation: 'portrait',
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-2.png?alt=media&token=85931591-3ced-4f7f-9121-3ced30b019d7',
                orientation: 'portrait',
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-3.png?alt=media&token=e353fcb5-7a0f-4cce-8690-af5599b6c98c',
                orientation: 'portrait',
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-4.png?alt=media&token=7b7516f4-14e2-4b05-ade5-33a3d04c858c',
                orientation: 'portrait',
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-5.png?alt=media&token=9a9961a3-7f7b-4f9f-b5e7-6afcd7f38b21',
                orientation: 'portrait',
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/AssetsProject%2Fsplash-google-6.png?alt=media&token=5ec292b1-4caa-4ba0-a85e-40b10300ff22',
                orientation: 'portrait',
            },
        ],
        techs: ['react-native', 'expo', 'firebase', 'nodejs', 'prisma', 'postgresql'],
        aboutDevelopment: 'O aplicativo foi desenvolvido com React Native e Expo com TypeScript, utilizando o firebase para fazer a autenticação dos usuários e armazenamento de imagens. O back-end foi desenvolvido em Node com TypeScript, para o banco de dados postgresql com o ORM Prisma.',
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.emanoeledevapps.bolaofutebol'
    }
];

export function GetProject(id: string){
    const project = projects.filter(item => item.id === id);
    return project[0];
}