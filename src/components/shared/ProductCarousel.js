import ProductCard from './ProductCard';

export default function ProductCarousel({ title, products }) {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 -mb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}