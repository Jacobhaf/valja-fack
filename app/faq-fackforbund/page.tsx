import Link from 'next/link';
import { globalFaq } from '@/data/faq';

export const metadata = {
    title: 'FAQ om Fackförbund – Svar på dina frågor | Välja Fack',
    description: 'Här hittar du svar på de vanligaste frågorna om fackförbund, a-kassa, medlemsavgifter och förmåner. Vi hjälper dig att välja rätt.',
};

export default function FaqPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        FAQ om fackförbund i Sverige
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Här svarar vi på de vanligaste frågorna om hur du väljer rätt fackförbund, fördelar med medlemskap och vad som gäller för a-kassa.
                    </p>
                </div>

                <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                    {globalFaq.map((faq, index) => (
                        <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                                {faq.question}
                            </dt>
                            <dd className="mt-4 lg:col-span-7 lg:mt-0">
                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                            </dd>
                        </div>
                    ))}
                </dl>

                <div className="mt-20 rounded-2xl bg-blue-50 p-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Hittade du inte svaret?</h2>
                    <p className="text-gray-600 mb-8">
                        Läs våra djupgående guider eller kontakta respektive fackförbund direkt.
                    </p>
                    <Link href="/guider" className="text-blue-600 font-semibold hover:text-blue-500">
                        Gå till våra guider &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
