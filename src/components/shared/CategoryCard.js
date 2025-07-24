import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ category }) {
  if (!category) return null;

  return (
    <Link href={category.href} className="group block text-center flex-shrink-0 w-32 sm:w-36">
      <div className="relative bg-gray-200 w-full aspect-square rounded-lg overflow-hidden transition-transform group-hover:scale-105 shadow-md">
        <Image
          src={category.imgSrc}
          alt={category.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span className="mt-2 inline-block font-semibold text-white group-hover:text-red-600">
        {category.name}
      </span>
    </Link>
  );
}