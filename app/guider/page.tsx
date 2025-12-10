import Link from 'next/link';
import Image from 'next/image';
import { guides } from '@/data/guides';

export const metadata = {
    title: 'Guider & Artiklar om Fackförbund | Välja Fack',
    description: 'Läs våra guider om hur du väljer rätt fackförbund, skillnaden mellan LO, TCO och SACO, och varför du ska vara med i facket.',
};

export default function GuidesIndexPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Guider & Artiklar</h1>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Kunskap för dig som vill göra ett smart val av fackförbund och a-kassa.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {guides.map((guide) => (
                        <article key={guide.slug} className="flex flex-col items-start justify-between bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={guide.publishedAt} className="text-gray-500">
                                    {guide.publishedAt}
                                </time>
                                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    {guide.category}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                                    <Link href={`/guider/${guide.slug}`}>
                                        <span className="absolute inset-0" />
                                        {guide.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {guide.summary}
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <span className="absolute inset-0" />
                                        Redaktionen
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
