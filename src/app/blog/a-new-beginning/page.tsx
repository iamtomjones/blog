import Link from "next/link";

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
                <article className='mb-5'>
                    <h1 className='text-2xl font-medium'>A New Beginning</h1>
                    <p className='text-sm mt-2 text-gray-500 '>Sunday, 26th October 2025</p>
                    <div className='mt-8 text-base text-gray-500 flex flex-col gap-4'>
                        <p>It's Sunday morning and my wife has gone to meet an old friend for Coffee.  The kids have their breakfast and I'm a little tired after getting up early to see the football team I follow lose.</p>
                        <p>I've just finished resurrecting an old macbook that has been stored in a cupboard for a while.  Having seen a lot of talk about <Link href='https://omarchy.org/' target='_blank'>Omarchy</Link> recently, I decided to see if it could breath some life into my old friend.  This isn't the first time I've tried this; about a year ago I installed Ubuntu on it, but it was very slow and not a great experience. </p>
                        <p>So here I am, finding myself with not much to do, but maybe a lot to say.  In need of a project to test out Omarchy.</p>
                        <p>I used to have a blog a while ago, but I wrote inconsistantly and always felt like I was trying to write some amazing article.  That's probably why I wrote inconsistantly, I tried too hard.</p>
                        <p>This time will be different.  I'm not writing to teach someone how to do something, this is just my thoughts, a developers journal if you will.  It may not be pretty, it may not read well and sometimes I might just be complaining, but this is it.</p>
                        <p>I saw last week that NextJS 16 is now stable, so that's what I'm using for the blog to test run it.  Not much of a test run though as I'm just writing articles!</p>
                        <p>In my day job all projects involve using a CMS so the client can make the updates themselves.  These might be Drupal, WordPress, SiteCore, Contentful, Prismic or Sanity.  But I don't need a CMS, I'm keeping this simple.  Writing directly into the HTML.</p>
                        <p>Old school.  Ok, maybe not old school, this is NextJS after all, but I think you get the idea.</p>
                        <p>This is just a short introductory ramble. I'll write again soon when I have something to say.</p>
                    </div>
                </article>
                <Link href='/'>Back to homepage</Link>
            </main>
        </div>
    );
}

