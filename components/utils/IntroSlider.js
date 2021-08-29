import { useState } from "react";

export default function IntroSlider() {
  const [slide, setSlide] = useState(true);
  const [firstSlide, setFirstSlide] = useState(true);
  const [secondSlide, setSecondSlide] = useState(false);

  return (
    <div className={`slide-container ${slide ? "" : "d-none"}`}>
      <div className={`slide-content container ${secondSlide ? "d-none" : ""}`}>
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
      <div className={`slide-content ${firstSlide ? "d-none" : ""}`}>
        <p> المنصة مؤلفة من ٣ صفحات</p>
        <br />
        <p>الصفحة الأولى لعرض الادوية المطلوبة والناس محتاجينها</p>
        <br />
        <p>
          الصفحة الثانية لعرض الادوية المتوفرة عند شخص معين وهو جاهز يعطيها
          للمحتاج
        </p>
        <br />
        <p>
          الصفحة الثالثة لتقديم طلبك: ان كنت بحاجة لدواء او تملك دواء وتريد
          المساعدة
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
