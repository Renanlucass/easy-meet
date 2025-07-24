import CategoryCard from "@/components/shared/CategoryCard";

const categories = [
  { name: 'Bovinos', href: '/categories/bovinos'},
  { name: 'Aves', href: '/categories/aves'},
  { name: 'Suínos', href: '/categories/suinos'},
  { name: 'Ovinos', href: '/categories/ovinos'},
  { name: 'Exóticos', href: '/categories/exoticos'},
  { name: 'Kits', href: '/categories/kits'},
  { name: 'Peixes', href: '/categories/peixes'},
  { name: 'Outros', href: '/categories/outros'},
];

export default function CategorySection() {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-white mb-4">Compre por Categoria</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
}