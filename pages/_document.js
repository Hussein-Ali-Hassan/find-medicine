import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta name="author" content="Hussein_Hassan" />
          <meta property="og:title" content="Find Medicine" />
          <meta
            property="og:description"
            content="
          بهالأزمة الي عم نمرق فيها جميعاً ولهي مشكلة فقدان معظم الأدوية من
          الصيدليات ..
          أنشئنا هالمنصة لنساعد بعضنا بتأمين الادوية المقطوعة للناس المحتاجة"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dtp45ukcw/image/upload/v1630048633/36542_lurhzk.jpg"
          />
          <meta property="og:url" content="https://www.findmedicine.org/" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
