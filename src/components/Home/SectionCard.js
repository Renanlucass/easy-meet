import Link from 'next/link';
import Image from 'next/image';

export default function SectionCard({ title, href, imgSrc }) {
  return (
    <Link href={href} className="group relative block aspect-video w-full overflow-hidden rounded-lg shadow-lg">
      <Image
        src={imgSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border-2 border-white/50 bg-black/30 backdrop-blur-sm p-2 px-4 rounded-md">
          <h3 className="text-white text-lg font-bold text-center drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}