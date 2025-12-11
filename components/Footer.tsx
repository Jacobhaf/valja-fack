import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="inline-block">
                            <img src="/logo-brand.png" alt="Välja Fack" className="h-12 w-auto object-contain rounded-md" />
                        </Link>
                        <p className="text-sm leading-6 text-gray-300">
                            Vi hjälper dig att hitta rätt bland Sveriges fackförbund. Jämför villkor, priser och förmåner för att göra ett tryggt val för din karriär.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Jämför</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/jamfor-fackforbund" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Alla fackförbund
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/jamfor-fackforbund?cat=LO" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            LO-förbund (Arbetare)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/jamfor-fackforbund?cat=TCO" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            TCO-förbund (Tjänstemän)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/jamfor-fackforbund?cat=SACO" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            SACO-förbund (Akademiker)
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Kunskap</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/faq-fackforbund" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Vanliga frågor (FAQ)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/guider" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Guider & Artiklar
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">&copy; 2025 Välja Fack. Alla rättigheter förbehållna.</p>
                </div>
            </div>
        </footer>
    );
}
