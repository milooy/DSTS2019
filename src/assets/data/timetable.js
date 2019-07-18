import a from '@/assets/speakers/a.jpg';
import b from '@/assets/speakers/b.jpg';
import c from '@/assets/speakers/c.jpg';

import TestPlayer from '@/assets/speakers/player/test.png';
import YurimPlayer from '@/assets/speakers/player/yurim.png';
import BaseballPlayer from '@/assets/speakers/player/baseball.png';

export const sessionList = [
  {
    id: 0,
    title: '축구 데이터로 야구하기',
    speakerName: '이은지',
    speakerDesc: '야구 러버',
    speakerImage: c,
    playerImage: TestPlayer,
    tags: ["데이터", "스파크"],
    target: '나의 관심사를 데이터로 분석해보고 싶은 비기너',
    desc: '야구는 돈을 많이 주고 봐야 제맛입니다. 저는 유니폼이 아주 많습니다. 야구 재밌게 보는 노하우를 전달해드리겠습니다.'
  },
  {
    id: 1,
    title: '데이터 드리븐 스파링',
    speakerName: '진유림',
    speakerDesc: 'Zepl',
    speakerImage: a,
    playerImage: YurimPlayer,
    desc: '데이터를 기반으로 스파링을 하는 법에 관한 내용입니다. 사실 저는 스파링을 한 번도 안해봤습니다. Zeppelin을 사용합니다.'
  },
];
