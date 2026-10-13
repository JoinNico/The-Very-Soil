import { publicPath } from '../utils/publicPath';

export type ReleasePhase =
  | 'pre_event'
  | 'event'
  | 'online_remainder'
  | 'sold_out';

export interface BookMeta {
  eyebrow: string;
  title: string;
  subtitle: string;
  englishSubtitle: string;
  author: string;
  translator: string;
  format: string;
  pages: number;
  language: string;
  editionYear: number;
  edition: string;
  printing: string;
}

export interface BookPart {
  number: 'I' | 'II' | 'III';
  title: string;
  englishTitle: string;
  chapterCount: number;
  chapterLabel: string;
  description: string;
  accent: 'madoka' | 'homura' | 'sayaka' | 'mami' | 'kyoko';
}

export interface ReleaseInfo {
  phase: ReleasePhase;
  event: {
    name: string;
    dateLabel: string;
    startDate: string;
    endDate: string;
    venue: string;
    city: string;
    officialUrl: string;
  };
  booth: string;
  price: string;
  interestFormUrl: string;
  onlineSaleUrl: string;
  notice: string;
}

const configuredSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();

export const book: BookMeta = {
  eyebrow: 'THE VERY SOIL',
  title: '绝望即壤',
  subtitle: '《魔法少女小圆》非官方批评研究',
  englishSubtitle:
    'An Unauthorized Critical Study of Puella Magi Madoka Magica',
  author: 'Jen A. Blue',
  translator: 'JoinNico',
  format: 'ISO B6 · 125 × 176 mm',
  pages: 144,
  language: 'Chinese Edition',
  editionYear: 2026,
  edition: '2026 年 8 月第一版',
  printing: '2026 年 9 月第一次印刷',
};

export const parts: BookPart[] = [
  {
    number: 'I',
    title: '电视动画',
    englishTitle: 'THE SERIES',
    chapterCount: 12,
    chapterLabel: 'CHAPTER 01—12 / TV SERIES',
    description:
      '十二章对应电视动画十二话。从具体镜头、台词与叙事细节入手，引入贯穿全书的后现代、佛教、《浮士德》与视觉文化参照。',
    accent: 'sayaka',
  },
  {
    number: 'II',
    title: '外传漫画',
    englishTitle: 'THE MANGA',
    chapterCount: 3,
    chapterLabel: 'CHAPTER 13—15 / SPIN-OFF MANGA',
    description:
      '三章分别讨论《和美☆魔法少女》《魔法少女织莉子》与 The Different Story。同一世界观下，人物关系、魔法少女题材以及原作已建立的规则被重新叙述。',
    accent: 'mami',
  },
  {
    number: 'III',
    title: '叛逆的物语',
    englishTitle: 'REBELLION',
    chapterCount: 7,
    chapterLabel: 'CHAPTER 16—22 / REBELLION',
    description:
      '七章围绕《叛逆的物语》展开，标题以“反抗……”贯穿。Jen A. Blue 在这里重新审视电影对前作结局、人物关系与既有解释所作的改动。',
    accent: 'kyoko',
  },
];

export const release: ReleaseInfo = {
  phase: 'event',
  event: {
    name: 'ComicQuest 5.0',
    dateLabel: '2026.10.05 — 10.06',
    startDate: '2026-10-05',
    endDate: '2026-10-06',
    venue: '世博展览馆',
    city: '上海 · 浦东新区',
    officialUrl:
      'https://www.comicquest.cn/activity/6a625828e6f8ea2754db146d',
  },
  booth: 'N76',
  price: '待公布',
  interestFormUrl: 'https://wj.qq.com/s2/27686157/wolx/',
  onlineSaleUrl: '',
  notice:
    '登记仅用于印量统计参考，不构成预订、付款或现场留货。',
};

export const links = {
  bookPdf: publicPath('downloads/main.pdf'),
};

export const seo = {
  siteUrl: configuredSiteUrl
    ? configuredSiteUrl.replace(/\/$/, '')
    : undefined,
  title: '绝望即壤｜《魔法少女小圆》非官方批评研究',
  description:
    'Jen A. Blue《The Very Soil》中文译本展示站：从炼金术、后现代批评、佛学与女性主义重读《魔法少女小圆》。',
  image: publicPath('brand/og-image.png'),
};
