import { BookSlider, AuthorSlider } from "../../component/Slider";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../../website_ban_sach_fe/src/context/UserContext";
function HomePage() {
  const [authors, setAuthors] = useState();
  const [books, setBooks] = useState();
  const { user } = useContext(UserContext);
  return (
    <div className="bg-white bg-blue-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Sách mới - Mang trí thức đến mọi nơi</span>
          </h2>
          
          <div className="mt-8">
            {/* <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Mua sắm ngay
            </button>/ */}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 sm:p-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-8 lg:gap-x-8">
            <div className="sm:row-start-2 sm:col-start-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">
                  Vận chuyển miễn phí
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Đơn vị hóa đơn từ 100.000VNĐ!
                </p>
              </div>
            </div>
            <div className="sm:row-start-2 sm:col-start-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">
                  Thanh toán an toàn
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  100% bảo mật thông tin khách hàng!
                </p>
              </div>
            </div>
            <div className="sm:row-start-1 sm:col-start-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">
                  Đổi trả dễ dàng
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  10 ngày đổi trả miễn phí
                </p>
              </div>
            </div>
            <div className="sm:row-start-1 sm:col-start-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">
                  Hỗ trợ 24/7
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Nhân viên luôn có mặt hỗ trợ bạn!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {books && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
              Sách mới
            </h2>
            <BookSlider books={books} />
          </div>
        )}
        {authors && (
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
              Các tác giả
            </h2>
            <AuthorSlider authors={authors} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;