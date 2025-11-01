import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Goodbye plesk",
    description: "Winds of change are in motion, and it was time for me to leave Plesk and use another web admin application.",
};

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
                <article className='mb-5'>
                    <h1 className='text-2xl font-medium'>Goodbye Plesk</h1>
                    <p className='text-sm mt-2 text-gray-500 '>Saturday, 1st November 2025</p>
                    <div className='mt-8 text-base text-gray-500 flex flex-col gap-4'>
                        <p>As most developers do, I have my own server where I host some websites for freelance clients. Although less frequently now my new projects are mostly NextJS and hosted on Vercel.</p>
                        <p>I use a cloud service called Vultr.com.  Its a great service that lets you build the servers you want and exactly how you want them, but without needing to know the technical side as you would if trying to set up an AWS instance. </p>
                        <p>I've being using Vultr since 2020 without any issues, in fact I would recommend Vultr to anyone.</p>
                        <p>One issue I have had over the last year is with an application I run on the server.  I use Plesk for a web admin interface and again, have done since 2020.  Its great, very easy to use and I would never have seen myself not using it, except for the fact the price doubled in the last year.  The user level I had was no longer available and needed to be moved to a pro plan, which cost around $30 a month.</p>
                        <p>So before when renting space on my server and making a small profit, I now loose money.  Such was the increase that I don't really feel like that is something that could/should be passed on to the clients.</p>
                        <p>Its taken me about a year to sort this out.  Mainly because I have been procrastinating.</p>
                        <p>This week I setup a new instance on Vultr and installed <Link href="https://docs.litespeedtech.com/cloud/images/cyberpanel/">CyberPanel</Link> as the admin interface.  Its not as polished as Plesk, but its free, so no complaints.  This means my monthly cost has dropped from $50 to around $10 and I'll finally stop loosing money.</p>
                        <p>I do want to make clear that plesk is great, and if I had enough clients to cover the cost I would still use it.  But, if like me, you're trying to save and not loose money, <Link href="https://docs.litespeedtech.com/cloud/images/cyberpanel/">CyberPanel</Link> is a decent free alternative.</p>
                        <p>I also want to stress how great Vultr is. If you're looking for affordable cloud hosting check out this<Link href="https://www.vultr.com/?ref=8416164" target="_blank"> affiliate link</Link>.</p> 
                    </div>
                </article>
                <Link href='/'>Back to homepage</Link>
            </main>
        </div>
    );
}



