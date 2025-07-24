import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './HeroBanner.module.css';

const slides = [
  {
    id: 1,
    imgSrc: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Promoção de Picanha",
    title: "As Melhores Picanhas da Semana",
    subtitle: "Descontos de até 20% em cortes selecionados!",
    buttonText: "Ver Ofertas de Picanha"
  },
  {
    id: 2,
    imgSrc: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Kits para Churrasco",
    title: "Kits Completos para seu Churrasco",
    subtitle: "Tudo que você precisa em um único pacote.",
    buttonText: "Montar meu Kit"
  },
  {
    id: 3,
    imgSrc: "https://images.pexels.com/photos/12842247/pexels-photo-12842247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Carnes para o dia a dia",
    title: "Carnes Frescas para o Dia a Dia",
    subtitle: "Qualidade de açougue com entrega em casa.",
    buttonText: "Ver Carnes Bovinas"
  }
];

export default function HeroBanner() {
  return (
    <section className={`relative w-full h-56 md:h-80 rounded-lg overflow-hidden ${styles.swiper_container}`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.imgSrc}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              priority={slide.id === 1}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-white text-sm md:text-lg mt-2 drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-transform hover:scale-105">
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}