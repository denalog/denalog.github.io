"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="resume" className="w-full py-24 border-b border-gray-200">
      <motion.div
        className="max-w-[700px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}>
        <motion.div
          className="relative w-[180px] h-[180px] shrink-0"
          variants={fadeUp}
          custom={0}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            <svg
              viewBox="0 0 240 240"
              className="w-[240px] h-[240px] animate-spin-slow overflow-visible"
              preserveAspectRatio="xMidYMid meet">
              <defs>
                <path
                  id="circlePath"
                  d="M 120, 120 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                  fill="none"
                />
              </defs>
              <text
                fill="#a3a7ad"
                fontSize="15"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="1">
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  textAnchor="start">
                  Frontend Engineer • Backend Engineer • AI Engineer • Senseiner • Jena Ryuh •
                </textPath>
              </text>
            </svg>
          </div>

          {/* 프로필 이미지 + glow */}
          <motion.div
            className="relative z-20 w-full h-full rounded-full overflow-hidden shadow-xl border-[1.5px] border-gray-300"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
            <Image
              src="/jena.jpg"
              alt="Jena's profile"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-purple-300 opacity-30 animate-pulse" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 text-center md:text-left"
          variants={fadeUp}
          custom={1}>
          <h2 className="text-2xl font-bold mb-1">Jena Ryuh</h2>
          <p className="text-sm text-gray-600 mb-4 italic">
            Senseiner (센스아이너)
          </p>

          <p className="text-gray-700 text-base leading-loose mb-6 text-justify">
            <span className="inline-block mb-2">
              시각적인 것에 흥미를 갖고{" "}
              <span className="font-medium text-black">프론트엔드</span>로
              시작해
              <br />
              지금은 <span className="font-medium text-black">AI</span>와{" "}
              <span className="font-medium text-black">백엔드</span>까지
              넘나드는 감각(
              <span className="text-indigo-700 font-semibold">Sense</span>)과
              기술(
              <span className="text-indigo-700 font-semibold">Engineer</span>)을
              겸비한
              <span className="font-bold text-purple-700">
                {" "}
                센스아이너(Senseiner)
              </span>
              , Jena Yu입니다.
            </span>

            <span className="inline-block mt-2">
              이 블로그는 제{" "}
              <span className="font-semibold text-black">모든 기록을 담는 아카이빙 공간</span>
              입니다. {" "}
            </span>
          </p>

          <motion.div
            className="flex flex-col items-center md:items-start gap-4"
            variants={fadeUp}
            custom={2}>
            <div className="flex gap-4 text-gray-600">
              <a
                href="https://github.com/denalog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition">
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jenayu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition">
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:denalog@naver.com"
                className="hover:text-red-600 transition">
                <FaEnvelope size={20} />
              </a>
            </div>
            <Link
              href="/resume"
              className="group mt-4 inline-flex items-center text-sm font-semibold text-gray-800 animate-pulse transition-all">
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 bg-[length:0%_100%] bg-left bg-no-repeat group-hover:bg-[length:100%_100%] group-hover:text-white transition-all duration-700 ease-out">
                Learn more about me
              </span>
              <HiArrowNarrowRight
                className="ml-1 transition-transform group-hover:translate-x-1 text-purple-600"
                size={18}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
