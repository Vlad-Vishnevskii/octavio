'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import { ImageItem } from '@/app/product/[id]/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './product-card.scss';
import classNames from 'classnames';

interface ProductCardProps {
  currentColor?: string;
  images: ImageItem[];
}

export const ProductCard: React.FC<ProductCardProps> = ({ images, currentColor }) => {
  const swiperEl = useSwiper();
  const [swiper, setSwiper] = useState(swiperEl);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const handleClick = (index: number) => {
    swiper.slideTo(index);
  };

  useEffect(() => {
    if (images.length > 1) {
      const currentImg = images.find(item => item.color === currentColor);

      setCurrentImages(currentImg?.srcList ?? []);
    } else {
      setCurrentImages(images[0]?.srcList);
    }
  }, [currentColor, images]);

  return (
    <div className="wrapper">
      <div className="product-card">
        <Swiper
          spaceBetween={10}
          navigation
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={swiper => setSwiper(swiper)}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        >
          {currentImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Product Image ${index}`}
                className="main-image"
                width={687}
                height={687}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="image-navigation">
        <div className="image-preview">
          <ul className="preview-images">
            {currentImages.map((image, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={classNames('preview-item', {
                  'preview-item_active': activeIndex === index,
                })}
              >
                <Image src={image} alt={`Preview Image ${index}`} width={150} height={150} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
