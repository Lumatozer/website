import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: '--font-montserrat' })

export const metadata = {
    title: 'Lumatozer',
    description: 'Web3 Done Right',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5,minimum-scale=0.5" />
            </head>
            <body className={montserrat.variable}>{children}</body>
        </html>
    )
}
