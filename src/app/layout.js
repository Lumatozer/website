import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: '--font-montserrat' })

export const metadata = {
    title: 'Lumatozer',
    description: 'Web3 Done Right',
    openGraph: {
        title: 'Lumatozer',
        description: "Lumatozer - Web3 Done Right",
        type: "website",
        locale: "en_US",
        image: "./images/OGImage.png"
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5,minimum-scale=0.5" />
                <meta name="description" content="Lumatozer - Web3 Done Right" />
                <meta name="application-name" content="Lumatozer" />
                <meta property="language" content="en" />
                <meta property="docsearch:language" content="en" />
                <meta name="robots" content="index, follow" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Lumatozer" />
                <meta property="twitter:description" content="Web3 Done Right" />

                <meta name="twitter:image" content="./images/OGImage.png" />

            </head>
            <body className={montserrat.variable}>{children}</body>
        </html>
    )
}
