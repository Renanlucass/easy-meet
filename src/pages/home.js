import Header from "@/components/layout/Header";
import HeroBanner from "@/components/Home/HeroBanner";
import CategorySection from "@/components/Home/CategorySection";
import SectionCard from "@/components/Home/SectionCard";

const sectionCards = [
  {
    title: 'Melhor Avaliados',
    href: '/home/best-rated',
    imgSrc: 'https://charcutaria.org/wp-content/uploads/2023/05/carnes.jpg'
  },
  {
    title: 'Compre Novamente',
    href: '/account/orders',
    imgSrc: 'https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Favoritos',
    href: '/account/favorites',
    imgSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Menor Preço',
    href: '/home/deals',
    imgSrc: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const ProductCarousel = ({ title, children }) => (
  <section className="my-10">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {children}
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-4 container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroBanner />
        <CategorySection />
        <section className="my-10">
          <h2 className="text-2xl font-bold text-white mb-4">Nossas Seleções</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectionCards.map((card) => (
              <SectionCard
                key={card.title}
                title={card.title}
                href={card.href}
                imgSrc={card.imgSrc}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}