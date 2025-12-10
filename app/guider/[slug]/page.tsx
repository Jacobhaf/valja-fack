import { guides } from "@/data/guides";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return guides.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const guide = guides.find((g) => g.slug === slug);
    if (!guide) return { title: "Guide hittades inte" };

    return {
        title: `${guide.title} | Välja Fack`,
        description: guide.summary,
    };
}

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const guide = guides.find((g) => g.slug === slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <div className="mb-8">
                    <Link href="/guider" className="text-blue-600 hover:text-blue-500 text-sm font-semibold inline-flex items-center gap-1">
                        &larr; Tillbaka till alla guider
                    </Link>
                </div>
                <p className="text-base font-semibold leading-7 text-blue-600">{guide.category}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {guide.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                    {guide.summary}
                </p>

                <div className="mt-10 max-w-2xl prose prose-blue prose-lg mx-auto">
                    <Markdown>{guide.content}</Markdown>
                </div>

                <div className="mt-16 border-t border-gray-200 pt-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Redo att välja?</h2>
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                        <p className="text-gray-600 mb-6">Jämför Sveriges alla fackförbund och hitta det som passar dig bäst.</p>
                        <Link href="/jamfor-fackforbund" className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500">
                            Jämför fackförbund
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
