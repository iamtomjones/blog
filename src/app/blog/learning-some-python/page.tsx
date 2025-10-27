import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Learning some python",
    description: "Python is very popular right now, maybe it always has been.  But moreso with AI.  Thats why I'm taking a stab it.",
};

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
                <article className='mb-5'>
                    <h1 className='text-2xl font-medium'>Learning some python</h1>
                    <p className='text-sm mt-2 text-gray-500 '>Monday, 27th October 2025</p>
                    <div className='mt-8 text-base text-gray-500 flex flex-col gap-4'>
                        <p>Part of life as a web developer, and indeed any programmer, software engineer or what whatever label you  prefer, is that of continued professional development.  We don't have the luxury of learning something that will remain the same over the years.  Concepts yes, but the practical no.</p>
                        <p>Continued professional development is a way of life.  Many of us are developers because its what we love and so this isn't really a problem.  We're usually working on some side project in the evenings anyway!</p>
                        <p>But continued professional development at work is a little different.  I can't really just pick something to study that doesn't bring some value to the business.</p>
                        <p>So with AI being a real focus, and Python being a big part of that scene, now was the right time for me to finally take a look</p>
                        <p>I started with the Google introduction to it to familiarise my self with the concepts, syntax etc.</p>
                        <p>I must say that so far I've really enjoyed it.  It's awalys good fun to see how another programming language works.</p>
                        <p>I spent today reading through the official Python documentation to dive deeper and I still haven't been scared off, so thats a good sign.</p>
                        <p>I have allowed myself to get a little side-tracked though, from the goal of using this in some way to work with AI, and started looking at building my own TUI using the python module <Link href='https://textual.textualize.io/' target='_blank'>Textual</Link>.  I say side tracked, but really, I learn best through practical implementation, and having a project to work on is the best way for me.</p>
                        <p>I'll be building a tui for our development team that has lots of goodies and tools.</p>
                    </div>
                </article>
                <Link href='/'>Back to homepage</Link>
            </main>
        </div>
    );
}


