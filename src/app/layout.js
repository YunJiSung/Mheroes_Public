import { Noto_Sans_KR } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "../assets/css/style.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  generator: 'Next.js',
  title: '마비노기영웅전 캐릭터 검색 MHEROES.KR',
  description: '마비노기영웅전 캐릭터를 검색하고 캐릭터 정보를 확인하세요.',
  keywords: ['마비노기영웅전, 마영전'],
  authors: [{ name: 'Youn' }],
  creator: [{ name: 'Youn' }],
  publisher: [{ name: 'Youn' }],
  formatDetection: {
    email: 'younjiseong733@google.com',
  },
  icons: {
    icon: 'favicon.svg',
  },
  metadataBase: new URL('https://mheroes.kr/'),
  images: 'https://mheroes.kr/images/meta/meta.webp',
  openGraph: {
    title: '마비노기영웅전 캐릭터 검색 MHEROES.KR',
    description: '마비노기영웅전 캐릭터를 검색하고 캐릭터 정보를 확인하세요.',
    url: 'https://mheroes.kr/',
    siteName: 'MHEROES.KR',
    images: 'https://mheroes.kr/images/meta/meta.webp',
    locale: 'ko_KR',
    type: 'website',
    type: 'article',
    publishedTime: '2024-04-23T14:00:00.000Z',
    authors: ['Yun'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    Yeti: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: '마비노기영웅전 캐릭터 검색 MHEROES.KR',
    description: '마비노기영웅전 캐릭터를 검색하고 캐릭터 정보를 확인하세요.',
    images: ['https://mheroes.kr/images/meta/meta.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <GoogleAnalytics gaId="G-ZRXGJ0FWY1" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6138805980224531" crossorigin="anonymous" />
        <div id="wrap">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
