import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../assets/banner-books/book1.png";
// react icons
import { FaCartShopping } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCards = ({ headline, books }) => {
  const handleCheckout = async () => {
    const key = "rzp_test_PXGneS4dVm9z1H";

    const {
      data: { order },
    } = await axios.post("http://localhost:3000/create/orderId", {});

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "MUJ Connect",
      description: "Order",
      order_id: order.id,
      callback_url: "http://localhost:3000/paymentverification",
      prefill: {
        name: "Nupur Mehlawat",
        email: "purnu@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#49108B",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl my-5 font-bold text-center">{headline}</h2>

      {/* cards */}
      <div className="mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className=" w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide
              className="text-center flex items-center justify-center"
              key={book._id}
            >
              <Link to={`/book/${book._id}`} className="cursor-pointer">
                <div className="bg-gray-100 p-8 rounded-lg relative">
                  <img src={book.imageURL} alt="" className="w-full" />
                </div>

                <div className="mt-5 mb-8 text-left space-y-2 flex justify-between items-start">
                  <div>
                    <h3 className="text-black font-semibold">
                      {book.bookTitle}
                    </h3>
                    <p>{book.author}</p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-700">Rs. 299</p>
                  </div>
                </div>
              </Link>
              <button
                onClick={handleCheckout}
                className="px-4 py-2 bg-purple-600 text-white rounded"
              >
                Buy Now
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
