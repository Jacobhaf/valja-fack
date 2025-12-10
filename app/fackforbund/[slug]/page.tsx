import { fackforbund } from "@/data/fackforbund";
import { getUnionFaq } from "@/data/faq";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return fackforbund.map((union) => ({
        slug: union.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const union = fackforbund.find((u) => u.slug === slug);
    if (!union) return { title: "Fackförbund hittades inte" };

    return {
        title: `Välja ${union.name} – fördelar, a-kassa & medlemskap 2025 | Välja Fack`,
        description: `Bli medlem i ${union.name}, ${union.centralOrg}-förbundet för ${union.commonJobs.slice(0, 2).join(", ")}. Läs om a-kassa, inkomstförsäkring och avgifter för 2025.`,
    };
}

export default async function UnionPage({ params }: Props) {
    const { slug } = await params;
    const union = fackforbund.find((u) => u.slug === slug);

    if (!union) {
        notFound();
    }

    const faq = getUnionFaq(union.name, union.commonJobs[0]);

    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-gray-50 border-b border-gray-100 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
                        <div className="h-24 w-auto relative mb-8">
                            <img src={union.logoUrl} alt={union.name} className="h-full object-contain" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium mb-6 ${union.centralOrg === 'LO' ? 'bg-red-100 text-red-800' :
                                union.centralOrg === 'TCO' ? 'bg-blue-100 text-blue-800' :
                                    union.centralOrg === 'SACO' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-gray-100 text-gray-800'
                            }`}>{union.centralOrg}-förbund</span>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                            {union.name} – fackförbund för {union.commonJobs.slice(0, 2).join(" & ")}
                        </h1>
                        <p className="text-lg text-gray-600 mb-10">
                            Sveriges ledande förbund för {union.commonJobs.join(", ")}. {union.members} medlemmar väljer {union.name} för trygghet och karriärstöd.
                        </p>
                        <a href={union.url} target="_blank" rel="noopener noreferrer" className="rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-all hover:scale-105">
                            Gå med i {union.name} &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Sidebar */}
                <div className="lg:col-span-1 order-2 lg:order-1">
                    <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Snabbfakta</h3>
                        <dl className="space-y-4 text-sm">
                            <div>
                                <dt className="text-gray-500">Förbund</dt>
                                <dd className="font-semibold text-gray-900">{union.name}</dd>
                            </div>
                            <div>
                                <dt className="text-gray-500">Centralorganisation</dt>
                                <dd className="font-semibold text-gray-900">{union.centralOrg}</dd>
                            </div>
                            <div>
                                <dt className="text-gray-500">Antal medlemmar</dt>
                                <dd className="font-semibold text-gray-900">{union.members}</dd>
                            </div>
                            <div>
                                <dt className="text-gray-500">Hemsida</dt>
                                <dd className="font-semibold text-blue-600 truncate"><a href={union.url} target="_blank" rel="nofollow">{union.url.replace('https://', '')}</a></dd>
                            </div>
                            <div>
                                <dt className="text-gray-500">Kontakt</dt>
                                <dd className="text-gray-900">{union.phone}</dd>
                                <dd className="text-gray-900">{union.email}</dd>
                            </div>
                        </dl>
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-4">Passar för dig som är:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                                {union.commonJobs.map(job => (
                                    <li key={job}>{job}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                    <article className="prose prose-blue prose-lg max-w-none">
                        <Markdown>{union.seoText}</Markdown>
                    </article>

                    {/* FAQ Section */}
                    <div className="mt-16 border-t border-gray-200 pt-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Vanliga frågor om {union.name}</h2>
                        <dl className="space-y-8">
                            {faq.map((item, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                                    <dt className="font-semibold text-gray-900 mb-2">{item.question}</dt>
                                    <dd className="text-gray-600">{item.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 bg-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Bli medlem i {union.name} på 2 minuter</h2>
                        <p className="text-blue-100 mb-8 text-lg">Säkra din inkomst och få tillgång till branschens bästa förmåner idag.</p>
                        <a href={union.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                            Till {union.name}s medlemsansökan &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
