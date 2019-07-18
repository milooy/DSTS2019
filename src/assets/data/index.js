import ZeplLogo from '@/assets/logos/zepl-logo.png';
import ZeplLogoWhite from '@/assets/logos/zepl-logo-white.png';
import DataItGirlsLogo from '@/assets/logos/DataItGirls_CI.png';
import DataItGirlsLogoWhite from '@/assets/logos/DataItGirls_CI-white.png';

import testPlayer from '@/assets/speakers/player/test.png';

import a from '@/assets/speakers/a.jpg';
import b from '@/assets/speakers/b.jpg';
import c from '@/assets/speakers/c.jpg';
import d from '@/assets/speakers/d.jpg';
import f from '@/assets/speakers/f.png';

export const sponsors = {
  poweredByList: [
    { name: 'Zepl', image: ZeplLogo, whiteImage: ZeplLogoWhite },
    { name: 'DataItGirls', image: DataItGirlsLogo, whiteImage: DataItGirlsLogoWhite }
  ],
  platinumSponsorList: [
    { name: 'Zepl', image: ZeplLogo, whiteImage: ZeplLogoWhite },
  ],
  goldSponsorList: [
    { name: 'Zepl', image: ZeplLogo, whiteImage: ZeplLogoWhite },
    { name: 'Zepl', image: ZeplLogo, whiteImage: ZeplLogoWhite },
    { name: 'Zepl', image: ZeplLogo, whiteImage: ZeplLogoWhite },
  ],
  silverSponsorList: [
    { name: 'Zepl' },
    { name: 'Zepl' },
  ],
  bronzeSponsorList: [
    { name: 'Zepl' },
    { name: 'Zepl' },
    { name: 'Zepl' },
    { name: 'Zepl' },
  ]
};

export const speakerList = [
  { name: '진유림', description: 'Frontend Engineer at Zepl', image: a },
  { name: '이은지', description: 'Tech leader at DataItGirls', image: c },
  { name: '김영웅', description: 'Professional Photographer', image: b },
  { name: '이영진', description: 'Lead Designer at Zepl', image: d },
  {
    name: '정선하',
    description: 'Lead Designer at DataItGirls',
    image: f,
  },
];
