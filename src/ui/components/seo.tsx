import Head from "next/head";

//creation d'une interface pour les seo
interface Props {
    title: string;
    description: string;
}

// ceration d'un composant pour les seo
export const Seo = ({title, description }: Props) => {
    return (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
     