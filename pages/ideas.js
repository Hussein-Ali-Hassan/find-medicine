import Navbar from "@/components/layout/Navbar";

export default function Ideas() {
  return (
    <>
      <Navbar currentPage="ideas" />
      <h1 className="text-center bg-light p-3 py-4"> إقتراحاتكم</h1>
      <main className="">
        <form
          action="https://formsubmit.co/my.medicine.platform@gmail.com"
          method="POST"
          className="p-4"
        >
          <p>
            نرحب بأي فكرة أو مساهمة أو اقتراح لتطوير عمل هذه المنصة ولنساعد
            أهلنا ونخفف المعاناة عنهم
          </p>
          <textarea
            name="idea"
            className="form-control"
            placeholder="اقتراحاتكم..."
            required
          ></textarea>
          <input
            type="submit"
            value="إرسال"
            className="btn btn-primary text-white w-100 mt-3"
          />
          <input
            type="hidden"
            name="_next"
            value="https://findmedicine.org/thanks"
          />
          <input type="hidden" name="_subject" value="Medicine Website!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: "none" }} />
        </form>
      </main>
    </>
  );
}
