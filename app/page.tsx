import Link from 'next/link';
import Image from 'next/image';
import { fackforbund } from '@/data/fackforbund';

export default function Home() {
  const popularUnions = fackforbund.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Välja fackförbund 2025
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hitta rätt fack för ditt yrke. Vi hjälper dig att jämföra villkor, inkomstförsäkringar och förmåner hos Sveriges alla fackförbund.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/jamfor-fackforbund"
                className="rounded-md bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
              >
                Jämför fackförbund
              </Link>
              <Link href="/faq-fackforbund" className="text-sm font-semibold leading-6 text-gray-900">
                Läs våra guider <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Unions Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Populära fackförbund</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Här är några av Sveriges största och mest populära fackförbund.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {popularUnions.map((union) => (
            <article key={union.slug} className="flex flex-col items-start justify-between bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-x-4 text-xs w-full mb-4">
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {union.centralOrg}
                </span>
                <span className="text-gray-500">{union.members} medlemmar</span>
              </div>
              <div className="relative group w-full">
                <div className="h-16 w-auto relative mb-6">
                  {/* Using raw img tag for external URLs without optimizing config yet, or use Next Image if configured. 
                         For start, simple img is safer to avoid 'hostname not configured' errors with external wikimedia etc. 
                         Actually, standard html img is reliable for unknown domains. */}
                  <img src={union.logoUrl} alt={`${union.name} logotyp`} className="h-full w-auto object-contain" />
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-[var(--color-brand)]">
                  <Link href={`/fackforbund/${union.slug}`}>
                    <span className="absolute inset-0" />
                    {union.name}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {union.description}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <strong>Vanliga yrken:</strong> {union.commonJobs.slice(0, 3).join(", ")}...
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/jamfor-fackforbund" className="text-[var(--color-brand)] hover:opacity-80 font-semibold">
            Visa alla fackförbund &rarr;
          </Link>
        </div>
      </div>

      {/* Industries / Categories */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hitta fack efter bransch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Oavsett om du är akademiker, tjänsteman eller arbetare finns ett fack för dig.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link href="/jamfor-fackforbund?cat=LO" className="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">LO-förbund (Arbetare)</h3>
              <p className="text-gray-600">För dig som arbetar inom vård, industri, service och bygg.</p>
            </Link>
            <Link href="/jamfor-fackforbund?cat=TCO" className="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">TCO-förbund (Tjänstemän)</h3>
              <p className="text-gray-600">För dig som arbetar på kontor, med administration eller ledning.</p>
            </Link>
            <Link href="/jamfor-fackforbund?cat=SACO" className="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SACO-förbund (Akademiker)</h3>
              <p className="text-gray-600">För dig med högskoleutbildning och akademisk examen.</p>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Teaser */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vanliga frågor</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Funderingar kring medlemskap, a-kassa eller avgifter?</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Vilket fack är bäst?</h3>
              <p className="text-gray-600 mb-4">Det finns inget universellt svar. Det bästa facket är det som har kollektivavtal på din arbetsplats.</p>
              <Link href="/faq-fackforbund" className="text-[var(--color-brand)] font-medium hover:underline">Läs hela svaret &rarr;</Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Måste man vara med i a-kassan?</h3>
              <p className="text-gray-600 mb-4">Nej, men det rekommenderas starkt. Fackmedlemskap ger ofta extra inkomstförsäkring ovanpå a-kassan.</p>
              <Link href="/faq-fackforbund" className="text-[var(--color-brand)] font-medium hover:underline">Läs hela svaret &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
