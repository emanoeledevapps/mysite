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
    githubUrl?: string;
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
    },
    {
        id: 'decode-text',
        title: 'DecodeText',
        description: 'Projeto desenvolvido durante um curso que ganhei da alura em parceria com a Oracle (Programa ONE - Oracle Next Education), onde foi proposto como uma atividade o desenvolvimento de um codificador/descodificador de texto, utilizando os conhecimentos obtidos nas aulas.',
        shortDescription: 'Criptografe frases ou palavras de forma fácil, e faça o inverso também.',
        icon: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/DecodeText%2Ficon-decode-text.png?alt=media&token=09a3006b-859b-41dd-b51e-5a6c72e3f177',
        bannerUrl: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/DecodeText%2Fbanner-decode-text.png?alt=media&token=623bb069-fd82-40e3-9d26-fd580bdc830a',
        screenshots: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/DecodeText%2Fsplash01.png?alt=media&token=79aedac5-0605-479b-8ce5-0cd2c74edf5f',
                orientation: 'landscape',
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/DecodeText%2Fsplash02.png?alt=media&token=8226816f-325b-40bb-b370-6759887a7f01',
                orientation: 'landscape',
            },
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/DecodeText%2Fsplash03.png?alt=media&token=09ce4428-152b-4e2b-a4d8-2560a30f32c1',
                orientation: 'landscape',
            },
        ],
        techs: ['html', 'css', 'javascript'],
        aboutDevelopment: 'O projeto foi desenvolvido utilizando Html e CSS na parte visual e javascript para a lógica da criptografia/descriptografia, lógica essa bem simples, em que consiste em trocar algumas letras por palavras pré-definidas.',
        websiteUrl: 'https://emanoeledevapps.github.io/projetos/decodeText/index.html'
    },
    {
        id: 'buscador-cep',
        title: 'Buscador Cep',
        description: 'No BuscadorCEP você pode encontrar algum endereço através do código postal, ou então se você quer descobrir o código postal de alguma localização também é possível.',
        shortDescription: 'Localize seu CEP ou busque um endereço através de um CEP.',
        icon: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/BuscadorCEP%2Ficon-buscador-cep.png?alt=media&token=1c94bfc0-1aa9-4238-8b1d-44fe0692a160',
        bannerUrl: 'https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/BuscadorCEP%2Fbanner-buscadorcep.png?alt=media&token=f8f47e93-3cd4-4489-ae89-67070ab71114',
        screenshots: [
            {
                url: 'https://user-images.githubusercontent.com/50122269/199067448-755b5ad7-a961-4fc8-a8f4-5b2244c356bf.png',
                orientation: 'landscape',
            },
            {
                url: 'https://user-images.githubusercontent.com/50122269/199067514-6c3f5ed7-83c4-4e1e-93ec-e824452427f8.png',
                orientation: 'landscape',
            },
            {
                url: 'https://user-images.githubusercontent.com/50122269/199067561-02954bfc-a540-436c-b702-31809db1d417.png',
                orientation: 'landscape',
            },
        ],
        techs: ['reactjs', 'css', 'typescript'],
        aboutDevelopment: 'O projeto foi desenvolvido utilizando ReactJS (CRA) e TypeScript, com CSS para estilização da interface. Para as funcionalidades, utilizei o Axios para comunicação com as APIs do IBGE e ViaCEP. Também integrei a biblioteca RadixUI para criar algumas interfaces específicas. Esse conjunto de tecnologias e ferramentas permitiu criar uma aplicação robusta e funcional, focada na experiência do usuário e na integração com APIs externas essenciais para o seu funcionamento.',
        websiteUrl: 'https://appbuscadorcep.netlify.app',
        githubUrl: 'https://github.com/emanoeledevapps/BuscadorCEP'
    }
];

export function GetProject(id: string){
    const project = projects.filter(item => item.id === id);
    return project[0];
}