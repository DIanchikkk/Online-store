// LookSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import styles from './LookSection.module.css';
import OutfitCard from './OutfitCard';
import looks from './data';

function LookSection() {
  return (
    <>
      <div className={styles.titleContainer}>
        <span className={styles.lookEng}>Look</span>
        <h2 className={styles.lookRu}>Образы
        </h2>
      </div>

      <section className={styles.lookSection}>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className={styles.swiperContainer}
          >
            {looks.map((look) => (
              <SwiperSlide key={look.id}>
                <OutfitCard look={look} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default LookSection;
