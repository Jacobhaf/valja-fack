import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex h-16 w-full items-center justify-between border-b border-gray-200 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo-brand.png" alt="Välja Fack" className="h-14 w-auto object-contain" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[var(--color-brand)]">
                            Start
                        </Link>
                        <Link href="/jamfor-fackforbund" className="text-sm font-medium text-gray-700 hover:text-[var(--color-brand)]">
                            Jämför fackförbund
                        </Link>
                        <Link href="/faq-fackforbund" className="text-sm font-medium text-gray-700 hover:text-[var(--color-brand)]">
                            FAQ
                        </Link>
                        <Link href="/guider" className="text-sm font-medium text-gray-700 hover:text-[var(--color-brand)]">
                            Guider & Artiklar
                        </Link>
                    </div>
                    <div className="ml-10 space-x-4">
                        <Link
                            href="/jamfor-fackforbund"
                            className="inline-block rounded-md border border-transparent bg-[var(--color-brand)] px-4 py-2 text-base font-medium text-white hover:opacity-90 transition-opacity"
                        >
                            Hitta rätt fack för dig
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                    <Link href="/jamfor-fackforbund" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Jämför
                    </Link>
                    <Link href="/faq-fackforbund" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        FAQ
                    </Link>
                    <Link href="/guider" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Guider
                    </Link>
                </div>
            </nav>
        </header>
    );
}
