'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './product-card.scss';

interface ProductCardProps {
  title: string;
  description: string;
  images: string[];
  previewImages: string[];
  colors: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  images,
  previewImages,
  colors,
}) => {
  const [swiper, setSwiper] = useState({});

  const handleClick = (index: number) => {
    swiper.slideTo(index);
  };

  return (
    <div>
      <div className="product-card">
        <Swiper
          spaceBetween={10}
          navigation
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={swiper => setSwiper(swiper)}
        >
          {images.map((image, index) => (
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
            {images.map((image, index) => (
              <li key={index} onClick={() => handleClick(index)} className={`preview-item`}>
                <img src={image} alt={`Preview Image ${index}`} width={150} height={150} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Стрелочки и маленькие превью */}
      {/* <div className="image-navigation">
        <button
          onClick={() => setActiveImageIndex(prevIndex => Math.max(prevIndex - 1, 0))}
          className="nav-arrow"
        >
          &#8592;
        </button>
        <div className="image-preview">
          <ul className="preview-images">
            {previewImages.map((image, index) => (
              <li
                key={index}
                onClick={() => handlePreviewClick(index)}
                className={`preview-item ${activeImageIndex === index ? 'active' : ''}`}
              >
                <img src={image} alt={`Preview Image ${index}`} />
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() =>
            setActiveImageIndex(prevIndex => Math.min(prevIndex + 1, images.length - 1))
          }
          className="nav-arrow"
        >
          &#8594;
        </button>
      </div> */}
    </div>
  );
};
