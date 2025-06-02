import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jena’s Dev Blog | 유제나 개발 블로그 </title>
        <meta
          name="description"
          content="감각과 기술을 연결하는 프론트엔드 엔지니어, 센스아이너 제나 유의 기술 블로그입니다."
        />
        <meta
          name="keywords"
          content="Frontend, Backend, AI, Senseiner, Jena Yu, Portfolio, Developer"
        />
        <meta name="author" content="Jena Yu" />
        <meta property="og:title" content="Jena Yu | Senseiner" />
        <meta
          property="og:description"
          content="감각과 기술을 연결하는 엔지니어의 블로그 공간"
        />
        <meta
          property="og:image"
          content="https://your-domain.com/og-image.png"
        />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="pt-24">
        {/* Section 1: About */}
        <About />

        {/* Section 2: PostPreview (다음에 만들 거) */}
        <section
          id="post-preview"
          className="w-full py-24 border-b border-gray-200">
          <div className="max-w-[700px] mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
            <p>
              이 자리에는 최신 게시글 4개가 카드형 + 슬라이더로 들어갈
              예정입니다.
            </p>
          </div>
        </section>

        {/* Section 3: Contact Trigger */}
        <section id="contact" className="w-full py-24 border-b border-gray-200">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="mb-6">연락하고 싶으신가요? 메일로 이야기 나눠요!</p>
            <button className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              메일 보내기
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
