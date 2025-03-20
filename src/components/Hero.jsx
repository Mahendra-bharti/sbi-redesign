import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Hero = () => (
    <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-[400px] w-full"
    >
        <SwiperSlide>
            <section className="text-center py-20 px-4 bg-blue-100">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Welcome to SBI Online</h1>
                <p className="text-lg text-gray-600">Fast, Secure, and Reliable Banking Solutions.</p>
                <div className="mt-6">
                    <Link to="/login" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Get Started</Link>
                </div>
            </section>
        </SwiperSlide>

        <SwiperSlide>
            <section className="text-center py-20 px-4 bg-blue-200">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Manage Your Finances</h1>
                <p className="text-lg text-gray-600">Track expenses, transfer funds, and much more.</p>
            </section>
        </SwiperSlide>
    </Swiper>
);