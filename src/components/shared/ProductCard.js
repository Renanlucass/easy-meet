import Image from 'next/image';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  if (!product) {
    return null;
  }

  const { id, name, seller, price, imgSrc } = product;

  return (
    <div className="group border rounded-lg overflow-hidden bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
      <Link href={`/products/${id}`} className="block">
        <div className="relative w-full h-40 bg-gray-200">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      </Link>
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">{seller}</p>
        <h3 className="font-bold text-md text-gray-800 truncate mb-2 h-6">
          <Link href={`/products/${id}`}>{name}</Link>
        </h3>
        <div className="flex justify-between items-center">
          <p className="font-extrabold text-lg text-red-600">R${price}</p>
          <button className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center cursor-pointer justify-center transition-all group-hover:bg-red-600 group-hover:text-white">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}