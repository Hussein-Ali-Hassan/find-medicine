import { useState } from "react";

export default function IntroSlider() {
  const [slide, setSlide] = useState(true);
  const [firstSlide, setFirstSlide] = useState(true);
  const [secondSlide, setSecondSlide] = useState(false);
  const [thirdSlide, setThirdSlide] = useState(false);

  return (
    <div className={`slide-container ${slide ? "" : "d-none"}`}>
      <div
        className={`slide-content container ${
          secondSlide || thirdSlide ? "d-none" : ""
        }`}
      >
        <p>
          {" "}
          بهالأزمة الي عم نمرق فيها جميعاً ولهي مشكلة فقدان معظم الأدوية من
          الصيدليات ..
        </p>
        <br />
        <p>
          أنشئنا هالمنصة لنساعد بعضنا بتأمين الادوية المقطوعة للناس المحتاجة
        </p>
        <button
          className="btn btn-primary btn-sm mt-4 text-white me-auto"
          onClick={() => {
            setFirstSlide(false);
            setSecondSlide(true);
          }}
        >
          تابع
        </button>
      </div>
      <div
        className={`slide-content ${firstSlide || thirdSlide ? "d-none" : ""}`}
      >
        <p> المنصة عبارة من صفحتين</p>
        <br />
        <p>
          الصفحة الأولى لعرض الادوية المتوفرة عند شخص معين وهو جاهز يعطيها
          للمحتاج
        </p>
        <br />
        <p>
          الصفحة الثانية لعرض شو هي الادوية المطلوبة والناس محتاجينها وهيك بيقدر
          لعنده الدواء يتواصل معه
        </p>
        <button
          className="btn btn-primary btn-sm mt-4 text-white me-auto"
          onClick={() => {
            setSecondSlide(false);
            setThirdSlide(true);
          }}
        >
          تابع
        </button>
      </div>
      <div
        className={`slide-content ${firstSlide || secondSlide ? "d-none" : ""}`}
      >
        <p>
          اذا محتاج دوا معين وما عم تلاقي، عبي{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2oJQjvCbMxQ5MKSGgoikVpNDGkB7Bk0xL2krwttQAMoXyvQ/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            هالاستمارة
          </a>{" "}
          لنساعدك بتأمين الدواء
        </p>
        <br />
        <p>
          اذا عندك دوا وحابب تساعد محتاج، عبي{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2oJQjvCbMxQ5MKSGgoikVpNDGkB7Bk0xL2krwttQAMoXyvQ/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
          >
            هالاستمارة
          </a>{" "}
          لنقدر نوصلها للمحتاجين
        </p>
        <button
          className="btn btn-primary btn-sm mt-4 text-white me-auto"
          onClick={() => setSlide(false)}
        >
          إبدأ
        </button>
      </div>
    </div>
  );
}
