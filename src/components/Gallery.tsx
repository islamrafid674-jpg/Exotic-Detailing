import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Gallery() {
  const images = [
    "https://scontent-sea1-1.cdninstagram.com/v/t51.82787-15/584406122_17900115519299753_568663527198989817_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=Mzc2NzI2MjAwNjk5MTIwOTAyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=PxtVDGzY6X4Q7kNvwF7-x_m&_nc_oc=AdqZeg4SzZT_OaVxA12rsMmS_KKj-0fuY5Y27NbAPitfu8ugIB0vWU2HAEMseH0dlH0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_AfzB8T0iA_qm3NIIVf8y1d2lr1APo6MQV9qiwomVvLFTeg&oe=69D0A5CB",
    "https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/584180634_17900444961299753_3893435757319374320_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=Mzc2OTcwMzcyNzI4MTAyNTM2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=FE5z9KMdftgQ7kNvwGraFJe&_nc_oc=Adqkizb-0_q-p1z87DF_8ev__La0FKuMO2v4Dhcccpm3D583FZ3Xc8KDNlkkw-x-g-Q&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_AfwfaW7f8Oc4bLt8kwVa_B1TuBrpBbheZFu_RoYny37lYA&oe=69D0A570",
    "https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/589956715_17902283181299753_6859241549938362923_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=Mzc4MjA3MzE0MzE4NDQzNDI3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=6X5A1mWis-gQ7kNvwGVaiWE&_nc_oc=Ado6LFESmNgqiZwGnxh7Mb2O5sfyHgwA9DP1-RqAPQeeb_n-WQBsMI4YyuUT0dE6DpA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_AfzwgZSNtksIgMM5mdu5PfcuOZhI8MGD6Kom0JwEdMtLmg&oe=69D09BF7",
    "https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/591035241_17902286910299753_436536286010128941_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=Mzc4MjA5MjU4NjcwMjY5MzA0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=CucotUwMTJoQ7kNvwEmhX7s&_nc_oc=AdriPPpOduEpV-00aJnQ5ZF8zUjcaCq2GKFJN5cALAHtjU6GXWnqZ2caoUxfXODuY5A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_AfzproBhmjBoFjJEWAwLuwXt3zQikVgsjFo-q2Qh8HbIZw&oe=69D093A3",
    "https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/600895793_17903949546299753_5682774332780373574_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzc5Mjg0NjM3MjM0OTc0NjU2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=TdLmzCqF3rYQ7kNvwGn_h5z&_nc_oc=AdrxwwKfxUSDbm0fPt6ikP2MORn6480cXGU9rwr4zcZPIt7kshgjn0RaGW5IxldBiHI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_Afys7krtP6kQ-SpFq0bkmxsDGghBT90m0r27NXWZQ30IBw&oe=69D0AB25",
    "https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/590908580_17902283679299753_6527931032154017401_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzc4MjA3Njk1MjUyNjc5MjAzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=reo4jxHCrukQ7kNvwFAQyz1&_nc_oc=AdqJs57Ya_i5_YyCx88X6LetzGxmNmWG87IuKhxU7GpgdrAq2ryvE4zdHwORTYP4qVk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_Afw9OVGdphhdfoYS_vphFsBwuKMJ77E7JjtAEiKoZPVtTA&oe=69D0A26D",
    "https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/591167918_17902284066299753_7612985299467338305_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=Mzc4MjA3ODU5MDQ2OTYxMTYyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=8xrUCzqKqnIQ7kNvwEy28CR&_nc_oc=Adqj4f8hYboZV_XWUKwDmDSsxyYW0VoTiQq_JZ0FO4Oom8pPcOIzT2SdyKbFdiH47K0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_Afzxi7_w6lwQRl7o7cZdEkp3MZcDyZabb4zLxlpbOHtXbQ&oe=69D09D90",
    "https://scontent-sjc3-1.cdninstagram.com/v/t51.82787-15/613184621_17905930698299753_6237205568726199038_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzgwNTAxOTY5Njk1MDAzNzE2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=-eR80GeItKQQ7kNvwEVv2BB&_nc_oc=AdpeHfSn2suPkVIkmS74KPP7GjpC6Zopdro-2LFKBKrB94iRP0ngbHQ9YG9FEEr-s9s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=uusfzof0Y93lWALeObL3lw&_nc_ss=7a32e&oh=00_AfxssYvKr3akfeC6mBoWQ9ZzzexnBz2vt-ev3gblol_Glg&oe=69D08F94",
    "https://scontent-sjc3-1.cdninstagram.com/v/t51.82787-15/610642223_17905930512299753_4097563167033877024_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzgwNTAxODI5NDgyNzc2NjI0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=qnIW81pv7BEQ7kNvwFDhyz_&_nc_oc=AdqM04KDl9KKpEMX0Ia7-hd1XTf0j1GIISCjrAI-SPTrf7j-YbWZlSgE2IJQMMmg-Kc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=uusfzof0Y93lWALeObL3lw&_nc_ss=7a32e&oh=00_AfzzLq2L-rcxKrSCFOSnl_2fAWcBmWNgCqpv_UH92Bg2HQ&oe=69D0A7BF",
    "https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/610854146_17905931067299753_2092483812072944793_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=MzgwNTAyMjIxMDczOTA0MjA3MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=PW71IhBL2VEQ7kNvwGKqouB&_nc_oc=Adrk28Wf-2Oz33Xvl-AvAZhosyTXgzBFgKCNvpn_i-HmDzjmnGTuv8Ut0LUCoKFEnrc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=uusfzof0Y93lWALeObL3lw&_nc_ss=7a32e&oh=00_AfzJTdyZq6qUBWAYoF7uFilV7DgLFCQuhSSIW1nZ8bcWDw&oe=69D0A4FC",
    "https://scontent-sjc3-1.cdninstagram.com/v/t51.82787-15/636759298_17910980670299753_7756659643627695895_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=MzgzNDk0MzY1MzU1OTQ3NzMxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=2halYctMZVcQ7kNvwHBB7Y2&_nc_oc=Adqiw03ueTcbuZfmQR9V_kQ8qd2R5HJC9EJG8TIMxxJ8EgsuZwqfmlfNzB4xz-vQpl0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=uusfzof0Y93lWALeObL3lw&_nc_ss=7a32e&oh=00_AfyVnNT6YksNk5BDgDrezof0Eu5CZO7pYTmZ--fDe81w7g&oe=69D0A64D",
    "https://scontent-sjc3-1.cdninstagram.com/v/t51.82787-15/636857176_17910980787299753_5197564434032538956_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzgzNDk0NDQ5NTc1ODk2OTQxNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=nKCoH7thONIQ7kNvwGNJDkb&_nc_oc=AdqTwey3M7GdU_aP3SdmTD4cGiTzMIBkj4rdENDTEUTx8CWR8X5Rz3zLDGz1gR3SCRg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=uusfzof0Y93lWALeObL3lw&_nc_ss=7a32e&oh=00_AfzTVaa70LEyc_wib_MNFn2q50Gnk2sRlMX4qxAmw65e6g&oe=69D0A19F",
    "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.75761-15/495729772_17877262923299753_2729006041818300834_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=MzYyNDc5Mzg4NDU1MTM4NDI4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=6szp7pPyEHAQ7kNvwFnJMnz&_nc_oc=Adppm2hm11pAcyaaP89QqJtXx3fUtGj0Oez_47-BzjRFJgK8yMyjKAlIzWE5SN56C2Q&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=8INgwYw6JF525Io8e4PQHg&_nc_ss=7a32e&oh=00_AfwSNW4vLSpFArKmXWJIrt-EVs3IZ5bQv_X8APejF-daJQ&oe=69D09FB4",
    "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/572892569_17898776892299753_8100144415964481876_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=108&ig_cache_key=Mzc1Nzk1NjIzMTAxNDI1ODk4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=RF4EjMYvgGoQ7kNvwEt6JDc&_nc_oc=AdqdeazWx1n4UglVbmk3oSk6M5geAMWcY_5xUlrHq6MuxYyUIl0Tdd7_2-h4haG_Zsc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=ug-gNj5sGZZkhES6wzpD6A&_nc_ss=7a32e&oh=00_AfwDqlEhvYiLnAKgpto9Cb3iIHqGRZ6llAXWVaqA4kc0Pg&oe=69D0B3AB"
  ];

  return (
    <section id="gallery" className="py-32 relative z-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of precision detailing and flawless finishes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-12"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="w-[260px] sm:w-[400px] md:w-[500px] aspect-[4/5] sm:aspect-[3/2] rounded-2xl overflow-hidden">
                <img 
                  src={src} 
                  alt={`Gallery image ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
