import Link from 'next/link';

export const metadata = {
    title: 'Om Oss | Välja Fack',
    description: 'Vi hjälper dig att hitta rätt fackförbund och a-kassa i Sverige.',
};

export default function AboutPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Om Välja Fack</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Välja Fack är en oberoende jämförelsetjänst startad 2025. Vårt mål är att göra den svenska arbetsmarknaden enklare att förstå för alla.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
                        <Link href="/jamfor-fackforbund">Jämför fackförbund <span aria-hidden="true">&rarr;</span></Link>
                        <Link href="/guider">Läs våra guider <span aria-hidden="true">&rarr;</span></Link>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-600">Fackförbund i databasen</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">40+</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-600">Helt gratis</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">100%</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
