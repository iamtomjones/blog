import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <main className="flex min-h-screen w-full max-w-3xl flex-col  py-32 px-16">
                <h1 className='text-2xl font-medium'>Thoughts of a web developer</h1>
                <p className='mt-10 text-gray-500'>Welcome to a collection of thoughts from a web developer.  There is no promise anything will be useful for you.  It's just a place for me to start documenting whats happening.</p>
                <ul className='mt-10 list-disc list-inside'>
                    <li>
                        <Link href='/blog/goodbye-plesk'>Goodbye plesk</Link>
                    </li>
                    <li>
                        <Link href='/blog/learning-some-python'>Learning some python</Link>
                    </li>
                    <li>
                        <Link href='/blog/a-new-beginning'>A new beginning</Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
