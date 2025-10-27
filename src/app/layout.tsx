import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'; 

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Thoughts of a web developer",
    description: "I am a web developer and I have some thoughts.  All thoughts are my own.  Here I share those day to day thoughts.  Some will be interesting, others will just be ramblings.  Stay and read or leave and touch grass.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                {process.env.NODE_ENV === 'production' && (
                    <>
                        <Script
                            defer
                            src='https://cloud.umami.is/script.js'
                            data-website-id='5a5a2327-903f-4694-bc4a-6da6234f4276'
                        />
                    </>
                )}

            </body>
        </html>
    );
}
