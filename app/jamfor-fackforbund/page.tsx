'use client';

import Link from 'next/link';
import { fackforbund } from '@/data/fackforbund';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Client component for the list functionality
function CompareList() {
    const searchParams = useSearchParams();
    const category = searchParams.get('cat');

    const filteredUnions = category
        ? fackforbund.filter((u) => u.centralOrg === category)
        : fackforbund;

    return (
        <>
            {/* Filters */}
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <Link href="/jamfor-fackforbund" scroll={false} className={`px-4 py-2 rounded-full text-sm font-medium ${!category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Alla
                </Link>
                <Link href="/jamfor-fackforbund?cat=LO" scroll={false} className={`px-4 py-2 rounded-full text-sm font-medium ${category === 'LO' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    LO
                </Link>
                <Link href="/jamfor-fackforbund?cat=TCO" scroll={false} className={`px-4 py-2 rounded-full text-sm font-medium ${category === 'TCO' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    TCO
                </Link>
                <Link href="/jamfor-fackforbund?cat=SACO" scroll={false} className={`px-4 py-2 rounded-full text-sm font-medium ${category === 'SACO' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    SACO
                </Link>
            </div>

            <div className="mx-auto mt-16 text-center mb-8">
                <p className="text-gray-600">Visar {filteredUnions.length} st fackförbund</p>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {filteredUnions.map((union) => (
                    <article key={union.slug} className="flex flex-col items-start justify-between bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-200 hover:ring-blue-500 transition-all">
                        <div className="flex items-center gap-x-4 text-xs w-full mb-4">
                            <span className={`px-2 py-1 rounded-md font-medium ${union.centralOrg === 'LO' ? 'bg-red-50 text-red-700' :
                                union.centralOrg === 'TCO' ? 'bg-blue-50 text-blue-700' :
                                    union.centralOrg === 'SACO' ? 'bg-yellow-50 text-yellow-800' :
                                        'bg-gray-50 text-gray-600'
                                }`}>
                                {union.centralOrg}
                            </span>
                            <span className="text-gray-500">{union.members} medlemmar</span>
                        </div>
                        <div className="h-12 w-auto relative mb-4">
                            <img src={union.logoUrl} alt={union.name} className="h-full object-contain" />
                        </div>
                        <h3 className="mt-3 text-lg font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link href={`/fackforbund/${union.slug}`}>
                                {union.name}
                            </Link>
                        </h3>
                        <div className="mt-4 text-sm text-gray-600">
                            <p className="line-clamp-2">{union.description}</p>
                        </div>
                        <div className="mt-4 border-t pt-4 w-full">
                            <p className="text-xs text-gray-500 font-semibold mb-2">Passar för:</p>
                            <div className="flex flex-wrap gap-1">
                                {union.commonJobs.slice(0, 3).map(job => (
                                    <span key={job} className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-600">{job}</span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 w-full">
                            <Link href={`/fackforbund/${union.slug}`} className="block w-full text-center rounded-md bg-white border border-blue-600 px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50">
                                Läs mer
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}

export default function ComparePage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Jämför fackförbund</h1>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Här hittar du en lista över alla fackförbund i vår databas. Filtrera på centralorganisation för att hitta rätt.
                    </p>
                </div>
                <Suspense fallback={<div className="text-center py-10">Laddar filter...</div>}>
                    <CompareList />
                </Suspense>
            </div>
        </div>
    );
}
