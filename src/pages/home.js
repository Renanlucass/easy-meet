import Header from "@/components/layout/Header";
import HeroBanner from "@/components/Home/HeroBanner";
import CategorySection from "@/components/Home/CategorySection";
import ProductCard from "@/components/shared/ProductCard";

const sampleProducts = [
  { id: 1, name: 'Picanha Angus Premium', seller: 'Açougue do Zé', price: '89,90'},
  { id: 2, name: 'Linguiça Toscana Artesanal', seller: 'Fazenda Sol', price: '29,90'},
  { id: 3, name: 'Asa de Frango Temperada', seller: 'Frango & Cia', price: '19,90'},
  { id: 4, name: 'Costela Suína BBQ', seller: 'Rei do Porco', price: '45,50'},
  { id: 5, name: 'Carré de Cordeiro', seller: 'O Cordeiro de Ouro', price:'99,99'},
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
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroBanner />
        <CategorySection />

        <ProductCarousel title="Melhor Avaliados">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductCarousel>

        <ProductCarousel title="Compre Novamente">
           {[...sampleProducts].reverse().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductCarousel>
      </main>
    </div>
  );
}