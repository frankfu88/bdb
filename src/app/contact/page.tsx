'use client';

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("表單已送出！");
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      {/* 🔹 聯絡我們標題 & 藍色線 */}
      <div className="text-center">
        <h2 className="text-3xl text-gray-800 font-semibold">聯絡我們</h2>
        <div className="w-16 h-[3px] bg-blue-500 mx-auto mt-2"></div>
      </div>

      {/* 🔹 Google 地圖 & 表單區塊 */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        
        {/* ✅ Google 地圖 (等高) */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-lg h-[600px]">
          <iframe
            title="Google Maps - 桃園市中壢區青商路59號2樓"
            className="w-full h-full"
            src="https://www.google.com/maps?q=桃園市中壢區青商路59號&output=embed&hl=zh-TW"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ✅ 聯絡表單 (等高) */}
        <form onSubmit={handleSubmit} className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg h-[600px] flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">* 姓名</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border rounded"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">公司名稱</label>
              <input
                type="text"
                name="company"
                className="w-full p-3 border rounded"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">* 電話</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-3 border rounded"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">* E-mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border rounded"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">* 內容</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full p-3 border rounded"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* 送出按鈕 */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            送出
          </button>
        </form>
      </div>
    </div>
  );
}