// src/pages/index.tsx
import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jena’s Dev Blog</title>
      </Head>

      <Header />

      <main className="pt-24 px-6 max-w-[700px] mx-auto">
        {/* 여기에 resume, posts, contact 섹션들 추가 예정 */}
        <section id="resume" className="mb-32">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <p>여기에 자기소개, 경력 등 들어갈 예정이에요!</p>
        </section>

        <section id="posts" className="mb-32">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <p>블로그 게시글이 들어올 자리입니다.</p>
        </section>

        <section id="contact" className="mb-32">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>이메일 전송 폼이 들어올 영역입니다.</p>
        </section>
      </main>
    </>
  );
}
