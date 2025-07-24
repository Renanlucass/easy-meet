// src/components/home/CategorySection.js
import CategoryCard from "@/components/shared/CategoryCard";

const categories = [
  // Caminhos corrigidos para a raiz da pasta /public
  { name: 'Bovinos', href: '/categories/bovinos', imgSrc: '/bovino.jpg' },
  { name: 'Frangos', href: '/categories/aves', imgSrc: '/frango.png' },
  { name: 'Suínos', href: '/categories/suinos', imgSrc: '/suinos.webp' },
  { name: 'Ovinos', href: '/categories/ovinos', imgSrc: '/ovinos.png' },
  { name: 'Peixes', href: '/categories/peixes', imgSrc: '/peixes.jpg' },
];

export default function CategorySection() {
  return (
    <section className="my-10 bg-[#6d3b3b] rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Compre por Categoria</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
}