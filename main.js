/* ═══════════════════════════════════════════
   경국픽 (KNU Pick) — main.js
═══════════════════════════════════════════ */

/* ────────────────────────────────────────────────────
   ✏️  [데이터 입력 구역 1] 상권 가게 데이터
──────────────────────────────────────────────────── */
const PLACES = {
  solmoe: [
    // 🍽️ 식당 (food)
    //한식
    { name: "청춘밥상", cat: "food", lat: 36.5448, lng: 128.7940 , review: "보글보글 한식당", tip: "전골처럼 끓여 먹어요" },
    { name: "만찐두빵", cat: "food", lat: 36.5444, lng: 128.7934 , review: "만두와 한식을 한번에!", tip: "국수 맛집이에요" },
    { name: "솔뫼국밥", cat: "food", lat: 36.5450, lng: 128.7949 , review: "솔뫼에서도 국밥을?", tip: "" },
    { name: "한식당", cat: "food", lat: 36.5436, lng: 128.7930, review: "깔끔한 한식당!", tip: "마제소바도 팔아요!" },
    { name: "상수리식당", cat: "food", lat: 36.5449, lng: 128.7937, review: "무난하게 가기 좋은 한식당", tip: "점심 먹을 꺼 없을 때 생각나요" },
    { name: "감성골식당", cat: "food", lat: 36.5449, lng: 128.7945, review: "여기도 무난한 한식당", tip: "여기 냉삼이 맛있어요" },
    { name: "사랑드림", cat: "food", lat: 36.5434, lng: 128.7928 , review: "한상차림의 한식당!", tip: "저의 최애 메뉴는 김치째게입니다" },
    { name: "복돼지국밥", cat: "food", lat: 36.5415, lng: 128.7901 , review: "할머님이 해주시는 진한 국밥집", tip: "비게가 많은 돼지국밥이 나와요" },
    //컵밥, 분식
    { name: "지지고", cat: "food", lat: 36.5440, lng: 128.79395, review: "간단하고 든든한 철판 컵밥.", tip: "맵찔이는 먹기 매울수 있어요." },
    { name: "종이밥", cat: "food", lat: 36.5451, lng: 128.7942 , review: "푸짐한 컵밥", tip: "혼밥하기 최적의 장소예요" },
    { name: "신전떡볶이", cat: "food", lat: 36.5447, lng: 128.7921, review: "매콤달콤 중독적인 맛.", tip: "치즈스틱이랑 오뎅튀김 같이 시키세요!" },
    { name: "떡볶이포차분식", cat: "food", lat: 36.5443, lng: 128.7927, review: "종류가 많은 분식집", tip: "의외로 식사 메뉴도 다양하답니다." },
    { name: "쌀똑핫도그", cat: "food", lat: 36.5442, lng: 128.7927, review: "경국대 유일무이한 핫도그집", tip: "쌀로 만든 핫도그라 더욱더 맛있어요" },

    //치킨, 닭 종류
    { name: "솔뫼찜닭", cat: "food", lat: 36.5450, lng: 128.79505, review: "경국대 유일무이한 찜닭집", tip: "공대 GS 옆이라 접근성이 좋아요" },
    { name: "백두철판", cat: "food", lat: 36.5451, lng: 128.7939, review: "다양한 철판 메뉴가 있는 집", tip: "점심보단 저녁으로 가는것도 좋아요" },
    { name: "BHC치킨", cat: "food", lat: 36.5451, lng: 128.7941, review: "바삭바삭 치킨 프렌차이즈", tip: "뿌링클은 언제나 먹어도 맛있답니다" },
    { name: "일미 닭갈비", cat: "food", lat: 36.5445, lng: 128.7925, review: "철판 닭갈비의 맛", tip: "밥먹고 볶음밥은 공식인거 아시죠?" },
    { name: "바베또피자카페", cat: "food", lat: 36.5440, lng: 128.7927, review: "치킨과 피자를 같이하는 집", tip: "콤비네이션이 맛있어요" },
    { name: "굽용이", cat: "food", lat: 36.5432, lng: 128.7921, review: "치킨이 먹고싶을때 최적!", tip: "떡추가 안하면 범죄인거 아시죠?" },
    { name: "훌랄라참숯불치킨", cat: "food", lat: 36.5444, lng: 128.7947, review: "색다른 치킨이 있는 집", tip: "치즈가 들어간 메뉴를 꼭 먹어보세요" },
    { name: "달빛포차/수제버거", cat: "food", lat: 36.5452, lng: 128.7945 , review: "사장님이 만드시는 2층 수제 버거집", tip: "여기 치킨이 그렇게 맛있다고요" },
    { name: "맥시카나", cat: "food", lat: 36.5436, lng: 128.7929, review: "무난한 치킨 프랜차이즈", tip: "바삭바삭 술안주" },
    
    //양식
    { name: "피오르달리조 안동대본점", cat: "food", lat: 36.5436, lng: 128.79385, review: "분위기 내고 싶을 때 가는 파스타 맛집.", tip: "목살 스테이크 샐러드 가성비 최고!" },
    { name: "아삶공", cat: "food", lat: 36.5439, lng: 128.7929, review: "먹을 수 있는게 다양한 식당!", tip: "파스타는 먹고 싶은데, 피달은 너무 비싸! 할때 가면 최적" },

    //중화요리, 마라탕
    { name: "용화루", cat: "food", lat: 36.5429, lng: 128.7885 , review: "중화요리의 최적의 맛집", tip: "멀긴하지만 잘하는 중화요리가 먹고싶다면 추천!" },
    { name: "열정 짬뽕", cat: "food", lat: 36.5452, lng: 128.7945 , review: "중화요리를 가까운곳에서", tip: "여기 우동국물이 무제한이라니까요?!" },
    { name: "마라순코우마라탕", cat: "food", lat: 36.5440, lng: 128.7924, review: "스마일과는 다르다!", tip: "소스를 마구마구 만들어 넣을 수 있어요" },
    { name: "스마일마라탕", cat: "food", lat: 36.5446, lng: 128.7930, review: "원하는 재료를 듬뿍 넣을 수 있어요.", tip: "점심시간에는 웨이팅이 있을 수 있습니다." },

    //일식 관련
    { name: "햄햄", cat: "food", lat: 36.5434, lng: 128.7924 , review: "안동대 일본식 돈가스", tip: "가격대는 비싸지만 맛있어요" },
    { name: "원마인드", cat: "food", lat: 36.5447, lng: 128.7939, review: "경영식 돈가스의 정석!", tip: "식전에 스프가 나와요." },
    { name: "모아", cat: "food", lat: 36.5430, lng: 128.7933 , review: "덮밥과 카레 맛집", tip: "연어덮밥은 일찍 가야지 먹을 수 있어요" },
    { name: "멘야이로", cat: "food", lat: 36.5451, lng: 128.7946, review: "라멘 맛집!", tip: "안동대 주변 말고도 용상에도 있어요" },

    // ☕ 카페 (cafe)
    { name: "더소아즈커피", cat: "cafe", lat: 36.5452, lng: 128.7945, review: "솔뫼 골목 안쪽 감성 카페.", tip: "카페안에 고양이가 귀여워요" },
    { name: "카페365", cat: "cafe", lat: 36.5444, lng: 128.7947, review: "조용하게 카공하기 좋은 곳.", tip: "콘센트 자리가 넉넉합니다." },
    { name: "이디야커피", cat: "cafe", lat: 36.5437, lng: 128.7928, review: "무난하게 가기 좋은 프랜차이즈.", tip: "토피넛 라떼 샷추가 추천!" },
    { name: "봄봄", cat: "cafe", lat: 36.5442, lng: 128.7925, review: "무난한 프랜차이즈.", tip: "싸고 맛있어요. 딱 밥먹고 사먹기 좋은곳" },
    { name: "커피베이", cat: "cafe", lat: 36.5446, lng: 128.7931, review: "무난하게 가기 좋은 프랜차이즈.", tip: "가격도 싸고 양도 많다!" },
    { name: "별다방", cat: "cafe", lat: 36.5449, lng: 128.7941, review: "", tip: "가격도 싸고 무난해요" },
    { name: "킹 카페", cat: "cafe", lat: 36.5450, lng: 128.7939, review: "", tip: "가격도 싸고 무난해요" },
    { name: "쥬시", cat: "cafe", lat: 36.5448, lng: 128.7949, review: "생과일 쥬스의 프랜차이즈.", tip: "쥬시는 딸바가 메인이지" },    
    { name: "도그도그", cat: "cafe", lat: 36.5445, lng: 128.7928, review: "핫도그와 함께 커피도!", tip: "가격도 싸고 양도 많다!" },
    { name: "카페 달콤해", cat: "cafe", lat: 36.5450, lng: 128.7952, review: "여기도 카페란 말이야?", tip: "" },
    { name: "카페24", cat: "cafe", lat: 36.5437, lng: 128.7931, review: "24시간 운영하는 무인카페", tip: "안에 빵도 있어요!" },
    { name: "잇샌드", cat: "cafe", lat: 36.5433, lng: 128.7923, review: "샌드위치와 커피를 맛나게 한번에", tip: "그릭요거트도 있어요" },
    
    //술집
    { name: "심술", cat: "pub",lat: 36.5434, lng: 128.7933, review: "이집 국물류가 맛있어요", tip: "시끌시끌한 술집!" },
    { name: "써클페이스", cat: "pub", lat: 36.5443, lng: 128.7925, review: "생일날에 가면 특별한 행사가!", tip: "공간이 넓직한게 과,동아리 술자리로 안성맞춤" },
    { name: "피치콜", cat: "pub", lat: 36.5446, lng: 128.7926, review: "아늑한 공간의 안성맞춤", tip: "여러 치킨 종류가 맛있어요" },
    { name: "엑스칼리버", cat: "pub",lat: 36.5445, lng: 128.7932, review: "넓고 좋아요", tip: "공간이 넓직한게 과,동아리 술자리로 안성맞춤" },
    { name: "아삶공", cat: "pub", lat: 36.5439, lng: 128.7929, review: "먹을 수 있는게 다양한 식당!", tip: "파스타는 먹고 싶은데, 피달은 너무 비싸! 할때 가면 최적" },
    { name: "굽용이", cat: "pub", lat: 36.5432, lng: 128.7921, review: "치킨이 먹고싶을때 최적!", tip: "떡추가 안하면 범죄인거 아시죠?" },
    { name: "달빛포차", cat: "pub", lat: 36.5452, lng: 128.7945 , review: "사장님이 만드시는 2층 수제 버거집", tip: "여기 치킨이 그렇게 맛있다고요" },

    // 🛒 기타/편의점 (etc)
    //편의점
    { name: "GS25 안동대점", cat: "etc", lat: 36.5432, lng: 128.7936, review: "솔뫼 메인 거리 편의점.", tip: "공대 GS보단 조금더 커요" },
    { name: "GS25 공대", cat: "etc", lat: 36.5447, lng: 128.7950, review: "솔뫼 메인 거리 편의점.", tip: "공대 GS라고 불리는곳이 여기예요." },    
    { name: "cu 안동대점", cat: "etc", lat: 36.5431, lng: 128.7919, review: "솔뫼 메인 거리 편의점.", tip: "작은 CU라고도 불려요." },
    { name: "cu 안동 송천점", cat: "etc", lat: 36.5449, lng: 128.7937, review: "솔뫼 메인 거리 편의점.", tip: "큰 CU라고도 불러요." },
    { name: "세븐일레븐 안동대", cat: "etc", lat: 36.5435, lng: 128.7927, review: "솔뫼 하나밖에 없는 세븐일레븐.", tip: "접근성이 최고 입니다" },
    { name: "퀸마트 1호점", cat: "etc", lat: 36.5443, lng: 128.7925, review: "솔뫼의 마트", tip: "이것저것 많이 팔아요" },
    //여가생활
    { name: "포토시그니처", cat: "etc", lat: 36.5448, lng: 128.7942, review: "동기들과 추억 남기기 좋은 네컷사진.", tip: "소품이 다양하게 준비되어 있어요." },
    { name: "대학코인노래방", cat: "etc", lat: 36.5430, lng: 128.7932, review: "1층은 혼코노, 2층은 공간이 커서 2차로 딱이에요", tip: "TJ 노래방이에요 어느 기계는 카드도 된다고요?" },
    { name: "엔젤스코인노래", cat: "etc", lat: 36.5438, lng: 128.7941, review: "간단하게 노래부르기 좋아요", tip: "TJ 노래방이에요" },
    { name: "헌터pc", cat: "etc", lat: 36.5434, lng: 128.7928, review: "솔뫼의 피시방", tip: "" },
    { name: "제우스 pc", cat: "etc", lat: 36.5433, lng: 128.7934, review: "솔뫼의 피시방", tip: "" },
    { name: "신데렐라", cat: "etc", lat: 36.5433, lng: 128.7934, review: "솔뫼의 미용실", tip: "가성비 굿인 미용실" },
    { name: "강남스타일 프로헤어", cat: "etc", lat: 36.5432, lng: 128.7931, review: "솔뫼의 미용실", tip: "네이버 예약을 꼭 해야해요" },

  ],
  nongol: [
    // 🍽️ 식당 (food)
    { name: "델브리또", cat: "food", lat: 36.5400, lng: 128.7967, review: "브리또 가성비 맛집", tip: "한 끼 든든" },
    { name: "리코리아", cat: "food", lat: 36.5396, lng: 128.7957, review: "브리또와 피자파는 집", tip: "" },
    { name: "쪼다", cat: "food", lat: 36.5405, lng: 128.7970, review: "쪼림닭 전문", tip: "볶음밥 추천" },
    { name: "온도(Ondo)", cat: "food", lat: 36.5399, lng: 128.7966, review: "닭한마리 식당", tip: "저녁 붐빔" },
    { name: "몽글이네", cat: "food", lat: 36.5396, lng: 128.7957, review: "숯불 생고기", tip: "저녁 추천" },
    { name: "떡볶이 프린스", cat: "food", lat: 36.5401, lng: 128.7965, review: "논골에서 인기 있는 분식집", tip: "떡볶이와 튀김 조합 추천" },
    { name: "어제그집", cat: "food", lat: 36.5403, lng: 128.7966, review: "저녁에 찾기 좋은 식당", tip: "안주류 다양" },
    { name: "파나몬스 안동대 본점", cat: "food", lat: 36.5405, lng: 128.7971, review: "계란토스트 중심 간단 식사 매장", tip: "혼밥·포장 손님 많음" },

    // ☕ 카페 (cafe)
    { name: "꾸수", cat: "cafe", lat: 36.5407, lng: 128.7971, review: "저렴한 테이크아웃 카페", tip: "알로에 음료 인기" },
    
    //술집
    { name: "백수포차", cat: "pub", lat: 36.5396, lng: 128.7960, review: "가성비 포차", tip: "2차 적당" },
    
    // 🛒 기타/편의점 (etc)
    { name: "한겨레복사", cat: "etc", lat: 36.5405, lng: 128.7973, review: "시험기간 필수 복사집", tip: "피크타임 피하기" },
    { name: "청운복사", cat: "etc", lat: 36.5407, lng: 128.7969, review: "제본 가능", tip: "미리 요청" },
    { name: "GS25 안동대후문점", cat: "etc", lat: 36.5408, lng: 128.7970, review: "후문 대표 편의점", tip: "야식 선택지 많음" },
    { name: "CU 안동대학사점", cat: "etc", lat: 36.5404, lng: 128.7968, review: "논골 초입 편의점", tip: "Postbox 가능" },
    
    //여가생활
    { name: "소울메이트PC", cat: "etc", lat: 36.5405, lng: 128.7971, review: "논골 인근 PC방.", tip: "소규모지만 이용 가능." }
  ],
};

/* ────────────────────────────────────────────────────
   ✏️  [데이터 입력 구역 ] 홈 화면 꿀팁 목록
──────────────────────────────────────────────────── */
const TIPS = [
  "많은 사람이 모르는데 미술학관 엘리베이터가 있어요! 계단쪽에서 오른쪽으로 가면 엘레베이터가 있답니다",
  "도서관 앱을 미리 깔아두면 좌석 예약이 10초 만에 끝납니다.",
  "도서관 엘리베이터로는 1층을 갈 수 없어요",
  "PAYCO 앱에서 학교 셔틀을 운행중이에요.대신 등하교 셔틀 밖에없으니 참고해서 타세요",
  "도서관 입구는 2층입니다. 1층 입구는 편의점 있는곳에 있어요",
  "학생회관 2층은 자연대 2호관과 구름다리로 연결되어 있습니다.",
  "비 오는 날 논골은 길이 미끄러우니 후문보다 정문 셔틀을 이용하세요.",,
  "공학 1층에는 이노메이커랩이라는 곳이 있어요. 3D출력물을 뽑을 수 있는데, 교육을 들어야 예약이 가능해요",
  "지역교육문화복합관안에 메가커피 매장 안에도 키오스크가 있어요. 밖에 키오스크에 사람이 많으면 안에서 가능합니다",
  "시험기간에 도서관에 사람이 많아 자리가 없다면 3층, 4층, 5층에도 공부 할 만한 자리가 있어요",
  "가을이 되면 학교에 은행이 엄청 떨어져 밟지않게 조심해요",
  "학과사무실을 들를때는 전화 한번 해보고 가는걸 추천해요. 잘못하면 조교님과 엇갈릴 수 있어요",
  "학교 대부분 행정은 12시 부터 1시까지 점심시간이에요",
  "도서관 앱으로 스터디룸도 예약할 수 있어요.",
];

/* ══════════════════════════════════════════════════
   이하 로직
══════════════════════════════════════════════════ */

/* ── 날짜 표시 ── */
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const now  = new Date();
const dateEl = document.getElementById('today-date');
if (dateEl) {
  dateEl.textContent = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 (${DAYS[now.getDay()]})`;
}

/* ── 꿀팁 자동 슬라이드 ── */
(function initTipSlider() {
  const tipEl = document.getElementById('random-tip');
  if (!tipEl) return;

  const shuffled = [...TIPS].sort(() => 0.5 - Math.random());
  let idx = 0;

  const style = document.createElement('style');
  style.textContent = `
    #random-tip {
       overflow: hidden;
        position: relative;
       min-height: 3.3em;
       line-height: 1.6;
      word-break: keep-all;
    }
    .tip-text {
      display: block;
      animation-fill-mode: both;
      animation-duration: 0.5s;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
    .tip-enter { animation-name: tipSlideIn; }
    .tip-exit  { animation-name: tipSlideOut; position:absolute; top:0; left:0; right:0; }
    @keyframes tipSlideIn {
      from { opacity:0; transform:translateY(20px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes tipSlideOut {
      from { opacity:1; transform:translateY(0); }
      to   { opacity:0; transform:translateY(-20px); }
    }
  `;
  document.head.appendChild(style);

  function showTip(text) {
    const oldElements = tipEl.querySelectorAll('.tip-text');
    
    oldElements.forEach(old => {
      if (old.classList.contains('tip-exit')) {
        old.remove();
      } else {
        // 3. 화면에 떠있는 요소(tip-enter)는 정상적으로 사라지게 애니메이션 처리
        old.classList.remove('tip-enter');
        old.classList.add('tip-exit');
        old.addEventListener('animationend', () => old.remove(), { once: true });
      }
    });

    // 새로운 팁 생성 및 추가
    const span = document.createElement('span');
    span.className = 'tip-text tip-enter';
    span.textContent = text;
    tipEl.appendChild(span);
  }
  tipEl.innerHTML = ''; // 초기 텍스트 제거
  showTip(shuffled[idx]);
  setInterval(() => {
    idx = (idx + 1) % shuffled.length;
    showTip(shuffled[idx]);
  }, 10000);
})();

/* ════════════════════════════════════════════════
   페이지 전환
════════════════════════════════════════════════ */
/* ════════════════════════════════════════════════
   페이지 전환
════════════════════════════════════════════════ */
function showPage(pageId, el) {
  // 모든 섹션 숨기기
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  // 클릭한 섹션 보이기
  document.getElementById(pageId).classList.add('active');
  
  // 네비게이션 모든 링크에서 active 제거
  document.querySelectorAll('#nav a').forEach(i => i.classList.remove('active'));
  // 클릭한 링크에 active 추가
  el.classList.add('active');
  
  // 지도를 열 때 렌더링
  if (pageId === 'map') initMap();

  // ✅ 이 부분이 추가되어야 탭 이동 시 버그가 안 생깁니다!
  if (pageId === 'campus-game') {
    // 퀴즈 탭으로 들어오면 무조건 '시작하기' 화면 띄우기
    initQuizIntro(); 
  } else {
    // 다른 탭(홈, 지도)으로 넘어가면 돌아가던 타이머 강제 종료
    if (typeof timerInterval !== 'undefined') {
      clearInterval(timerInterval);
    }
  }
}

/* ════════════════════════════════════════════════
   카카오맵 + 상권 지도
════════════════════════════════════════════════ */
let kakaoMap     = null;
let currentArea  = 'solmoe';
let currentFilter = 'all'; 
let markers      = [];
let infoWindows  = [];

const AREA_CENTER = {
  solmoe: { lat: 36.5445, lng: 128.7940, zoom: 2 },
  nongol: { lat: 36.5395, lng: 128.7960, zoom: 2 },
};

const CAT_COLOR = { food: '#ea580c', cafe: '#16a34a', pub: '#9333ea', etc: '#0284c7' };
const CAT_LABEL = { food: '🍽️ 식당', cafe: '☕ 카페', pub: '🍺 주점', etc: '🛒 기타' };

/** SVG 핀 마커 이미지 생성 */
function markerImage(cat) {
  const color = CAT_COLOR[cat] || '#64748b';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
    <ellipse cx="16" cy="38" rx="6" ry="3" fill="rgba(0,0,0,0.15)"/>
    <path d="M16 0 C7.16 0 0 7.16 0 16 C0 27 16 40 16 40 C16 40 32 27 32 16 C32 7.16 24.84 0 16 0z" fill="${color}"/>
    <circle cx="16" cy="16" r="8" fill="white" opacity="0.9"/>
  </svg>`;
  return new kakao.maps.MarkerImage(
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg),
    new kakao.maps.Size(32, 40),
    { offset: new kakao.maps.Point(16, 40) }
  );
}

/** 최초 지도 초기화 */
function initMap() {
  if (kakaoMap) return;
  const c = AREA_CENTER[currentArea];
  kakaoMap = new kakao.maps.Map(document.getElementById('kakao-map'), {
    center: new kakao.maps.LatLng(c.lat, c.lng),
    level: c.zoom,
  });
  renderPlaces();
}

/** 솔뫼 ↔ 논골 탭 전환 */
function switchArea(area, el) {
  currentArea = area;
  document.querySelectorAll('.area-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  if (!kakaoMap) { initMap(); return; }
  const c = AREA_CENTER[area];
  kakaoMap.setCenter(new kakao.maps.LatLng(c.lat, c.lng));
  kakaoMap.setLevel(c.zoom);
  renderPlaces();
}

/** 카테고리 필터 적용 */
function applyFilter(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderPlaces();
}

/** 마커 + 사이드 목록 렌더링 (★수정된 핵심 부분) */
function renderPlaces() {
  // 기존 마커 및 정보창 초기화
  markers.forEach(m => m.setMap(null));
  infoWindows.forEach(w => w.close());
  markers = [];
  infoWindows = [];

  const list = document.getElementById('place-list');
  list.innerHTML = '';

  // 1. '전체(all)' 탭일 때: 마커도 안 찍고, 리스트도 안내 문구만 띄움
  if (currentFilter === 'all') {
    list.innerHTML = `
      <div style="padding: 3rem 1rem; text-align: center; color: #64748b; line-height: 1.6; font-weight: 600;">
        👆 상단 버튼을 눌러<br>원하는 카테고리를 선택해 주세요!
      </div>
    `;
    return;
  }

  // 2. 카테고리를 선택했을 때: 해당 카테고리 데이터만 필터링
  const places = PLACES[currentArea].filter(p => p.cat === currentFilter);

  if (places.length === 0) {
    list.innerHTML = '<div style="color:#64748b;padding:1rem;font-weight:600;text-align:center;">해당 카테고리 가게가 없습니다.</div>';
    return;
  }

  // 3. 선택된 카테고리의 마커 및 사이드 카드 생성
  places.forEach((place, i) => {
    // 지도 마커 생성
    const marker = new kakao.maps.Marker({
      map: kakaoMap,
      position: new kakao.maps.LatLng(place.lat, place.lng),
      image: markerImage(place.cat),
      title: place.name,
    });

    // 인포윈도우(말풍선) 생성
    const iw = new kakao.maps.InfoWindow({
    content: `<div style="padding:10px 14px; font-family:'Pretendard',sans-serif; min-width:180px; word-break:keep-all;">
      <div style="font-weight:800; font-size:.95rem; margin-bottom:4px;">${place.name}</div>
      <div style="font-size:.82rem; color:#64748b;">${place.review}</div>
      ${place.tip
        ? `<div style="margin-top:6px; font-size:.8rem; background:#eef2ff; color:#4f46e5; padding:5px 8px; border-radius:6px; font-weight:600; white-space:nowrap;">💡 ${place.tip}</div>`
        : ''}
     </div>`,
     removable: true,
    });

    // 마커 클릭 이벤트
    kakao.maps.event.addListener(marker, 'click', () => {
      infoWindows.forEach(w => w.close());
      iw.open(kakaoMap, marker);
      selectCard(i);
    });

    markers.push(marker);
    infoWindows.push(iw);

    // 사이드 카드 생성
    const card = document.createElement('div');
    card.className = 'place-card';
    card.id = `pc-${i}`;
    card.innerHTML = `
      <div class="place-card-name">${place.name}</div>
      <span class="tag tag-${place.cat}">${CAT_LABEL[place.cat]}</span>
      <div class="place-card-review">${place.review}</div>
      ${place.tip ? `<div class="place-card-tip">💡 ${place.tip}</div>` : ''}
    `;
    
    // 카드 클릭 시 이벤트
    card.onclick = () => {
      infoWindows.forEach(w => w.close());
      iw.open(kakaoMap, markers[i]);
      kakaoMap.panTo(new kakao.maps.LatLng(place.lat, place.lng));
      selectCard(i);
    };
    
    list.appendChild(card);
  });
}

/** 사이드 카드 선택 강조 */
function selectCard(idx) {
  document.querySelectorAll('.place-card').forEach(c => c.classList.remove('selected'));
  const el = document.getElementById(`pc-${idx}`);
  if (el) {
    el.classList.add('selected');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ════════════════════════════════════════════════
   캠퍼스 퀴즈 (랜덤 출제 버전 🎲)
════════════════════════════════════════════════ */

// 1. 문제 은행 (원하는 만큼 계속 추가하세요!)
const QUIZ_POOL = [
   { question: "학생회관은 어디에 있을까요?", tip: "2층은 자연대 2호관과 구름다리로 연결돼요.", answer: { left: 54.5, top: 37.5, width: 4, height: 8 } },
  { question: "중앙도서관(E1)은 어디에 있을까요?", tip: "도서관 앱으로 좌석 예약하면 10초 완료!", answer: { left: 32, top: 54, width: 6, height: 10 } },
  { question: "창의인재관(E2)은 어디에 있을까요?", tip: "간호학과의 주 건물!", answer: { left: 39, top: 51, width: 5, height: 10 } },
  { question: "대학본관(E3)은 어디에 있을까요?", tip: "각종 행정 업무를 처리하는 곳입니다.", answer: { left: 48, top: 46, width: 5, height: 10 } },
  //{ question: "대학본관(별관)(E3-1)은 어디에 있을까요?", tip: "학교의 모든 질문은 여기로", answer: { left: 35, top: 58, width: 6, height: 6 } },
  { question: "인문학관(E4)은 어디에 있을까요?", tip: "현재 공사중이라 인문대 많은 학과들이 지역문화복합관에 있어요!", answer: { left: 53, top: 56.5, width: 7, height: 13 } },
  //{ question: "인문학연구동(E4-1)은 어디에 있을까요?", tip: "뭐하는 건물이야", answer: { left: 58, top: 62, width: 6, height: 6 } },
  { question: "사범학관(E5)은 어디에 있을까요?", tip: "사범대 학생들의 건물!.", answer: { left: 58, top: 54.5, width: 5, height: 10.5 } },
  { question: "국제교류관(E6)은 어디에 있을까요?", tip: "안쪽에 있어서 찾기 어려운데, 사범대에서 영어 마을쪽으로 향하면 바로 나와요", answer: { left: 61.5, top: 63, width: 5.5, height: 10 } },
  { question: "글로컬인재양성관(E7)은 어디에 있을까요?", tip: "학교 생활동안 갈 일 거의 없는 건물", answer: { left: 64.5, top: 58, width: 3.5, height: 5 } },
  { question: "안동영어마을(E8)은 어디에 있을까요?", tip: "안동 초중고 학생들이 와서 영어 수업 듣는 건물. 경국대 학생이면 갈 일이 없을거에요", answer: { left: 67, top: 70, width: 5.5, height: 8.5 } },
  { question: "학군단(E9)은 어디에 있을까요?", tip: "ROTC와 관련 있는 학관이에요", answer: { left: 78, top: 73, width: 3.5, height: 4 } },
  { question: "자연 생명과학 1호관(E10)은 어디에 있을까요?", tip: "1호관과 2호관 햇갈리지 말기! 1호관은 빨간 벽돌 건물이에요", answer: { left: 60, top: 34, width: 7, height: 10.5 } },
  { question: "백신생명공학동(E10-1)은 어디에 있을까요?", tip: "자연대 2호관의 셋길로 가면 더 빨라요", answer: { left: 66.5, top: 33, width: 2.5, height: 5 } },
  { question: "자연 생명과학 2호관(E11)은 어디에 있을까요?", tip: "학생회관 2층으로 통해서 나가면 더 빨라요", answer: { left: 59.5, top: 46.5, width: 6, height: 9 } },
  { question: "지역산화협력관(E12)은 어디에 있을까요?", tip: "계단이 많으니 편한 신발 추천!", answer: { left: 65.5, top: 39, width: 3, height: 10 } },
  { question: "미술학관(E13)은 어디에 있을까요?", tip: "미숳학과로 가는 길은 3개정도가 있어요. 그리고 학관이 거의 항상 추워요", answer: { left: 66.5, top: 29, width: 5, height: 9 } },
  { question: "음악관(E14)은 어디에 있을까요?", tip: "음악학관은 학교 정문보다는 뒷문이 더 가까워요 더 빨라요", answer: { left: 77.5, top: 60, width: 4.5, height: 10 } },
  { question: "종합스포츠센터(E15)은 어디에 있을까요?", tip: "경국대에도 수영장이 있어요", answer: { left: 79, top: 51.5, width: 8.5, height: 10.5 } },
  { question: "지역교육문화복합관(w1)은 어디에 있을까요?", tip: "1층에 매우 큰 헬스장과 2층에 메가커피가 있고, 건물 앞으로 가면 1층 뒤로가면 2층으로 연결되어있어요", answer: { left: 15.5, top: 53.5, width: 6, height: 5.5 } },
  { question: "솔뫼문화관(W2)은 어디에 있을까요?", tip: "입학식과 큰 행사가 열리는 곳입니다.", answer: { left: 31, top: 43, width: 4.5, height: 7 } },
  { question: "체육관(W3)은 어디에 있을까요?", tip: "배드민턴 코트는 학생증만 있으면 무료 예약!", answer: { left: 27, top: 37, width: 4, height: 9 } },
  { question: "복지관(W4)은 어디에 있을까요?", tip: "1층에는 서점 2층에는 보건소가 있어요", answer: { left: 31.5, top: 35, width: 1.5, height: 7 } },
  { question: "외국어교육관(W5)은 어디에 있을까요?", tip: "주로 어학원이라 불리는데, 영어 교양은 여기서 진행해요.", answer: { left: 33.5, top: 34.5, width: 4, height: 5 } },
  { question: "가람관(W6)은 어디에 있을까요?", tip: "학교 내의 기숙사 건물 중 하나", answer: { left: 25, top: 26, width: 4.5, height: 12 } },
  { question: "정보통신원(W7)은 어디에 있을까요?", tip: "컴퓨터 교양은 보통 여기서 전부 진행해요. 지하에는 헬스장이 있어요", answer: { left: 39.5, top: 38.5, width: 2.5, height: 5.5 } },
  { question: "사회과학관(W8)은 어디에 있을까요?", tip: "교양수업들을때 많은 학생들이 들어 강의실 대부분이 커요", answer: { left: 30.5, top: 27, width: 7.5, height: 7.5 } },
  { question: "박물관(W9)은 어디에 있을까요?", tip: "안동의 역사와 문화를 한눈에 볼 수 있어요. 1층에서는 양식당, 파리바게트, 맘스터치가 있고, 2층은 취업관련으로 많은 프로그램을 진행하고 있어요", answer: { left: 44, top: 33.5, width: 5, height: 7 } },
  { question: "공학 1호관(W10)은 어디에 있을까요?", tip: "1층에는 이노메이커랩, 2층 실습실, 저녁엔 학생증 태깅 필수!", answer: { left: 42.5, top: 24, width: 5, height: 8 } },
  { question: "공학 2호관(W11)은 어디에 있을까요?", tip: "여러 공대 학과들이 모여 있는 건물이에요", answer: { left: 43, top: 20, width: 5, height: 8 } },
  { question: "공학 3호관(W12)은 어디에 있을까요?", tip: "건물이 매우 크고, 생각보다 복잡해서 길을 잃을 수 있으니, 들어갈때 호실을 체크하고 들어가는걸 추천해요", answer: { left: 34, top: 19.5, width: 5.5, height: 10 } },
  { question: "생활과학관(W13)은 어디에 있을까요?", tip: "박물관 뒤에 있는 건물인데, 공대쪽으로는 언덕 넘어 갈 수 있는 길이 있어요", answer: { left: 53, top: 30, width: 6.5, height: 6 } },
  { question: "공동실습관(W14)은 어디에 있을까요?", tip: "공대 2호관, 역동서원 뒤에 있는 건물이에요.", answer: { left: 48.5, top: 21.5, width: 4.5, height: 6 } },
  { question: "솔빛관(W15)은 어디에 있을까요?", tip: "학교 내의 기숙사 건물 중 하나", answer: { left: 46, top: 18.5, width: 3.5, height: 4.5 } },
  { question: "솔뫼관(W16)은 어디에 있을까요?", tip: "학교 내의 기숙사 건물 중 하나", answer: { left: 45.5, top: 11, width: 8.5, height: 9.5 } },
  { question: "실내테니스장(W17)은 어디에 있을까요?", tip: "배드민턴 코트는 학생증만 있으면 무료 예약!", answer: { left: 12.5, top: 39.5, width: 4.5, height: 5.5 } },
  { question: "대운동장은 어디에 있을까요?", tip: "저녁에 러닝하기 정말 좋아요!", answer: { left: 16.5, top: 37.5, width: 10.5, height: 17 } },
  { question: "역동서원은 어디에 있을까요?", tip: "학교의 오래된 서원입니다. 관리는 박물관에서 하기에 문닫는 시간은 박물관 폐점할때 같이해요", answer: { left: 49.5, top: 28, width: 4.5, height: 4 } },
];

let currentQuizList = []; // 이번 판에 출제될 5문제
let qIdx      = 0;
let qScore    = 0;
let qAnswered = false;


let timerInterval = null;
let timeLeft      = 10;
const TIME_LIMIT  = 10; 
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 20;

// ✅ 퀴즈 탭에 들어왔을 때 초기 화면(시작 버튼)을 보여주는 함수
function initQuizIntro() {
  clearInterval(timerInterval); // 혹시 도는 타이머 정지
  document.getElementById('quiz-intro').style.display  = 'block'; // 시작 화면 켜기
  
  // 실제 퀴즈 UI들은 숨기기
  const statusBox = document.querySelector('.quiz-status');
  if(statusBox) statusBox.style.display = 'none';
  document.getElementById('quiz-map').style.display    = 'none';
  document.getElementById('q-tip').style.display       = 'none';
  document.getElementById('q-complete').style.display  = 'none';
}

// ✅ '시작하기' 버튼을 눌렀을 때 실행되는 함수
function startQuiz() {
  document.getElementById('quiz-intro').style.display  = 'none'; // 시작 화면 숨기기
  
  // 실제 퀴즈 UI들 나타내기
  const statusBox = document.querySelector('.quiz-status');
  if(statusBox) statusBox.style.display = 'block';
  document.getElementById('quiz-map').style.display    = 'block';
  
  resetQuiz(); // 퀴즈 세팅 및 첫 문제 로드 (이때 타이머 시작됨)
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIME_LIMIT;
  
  const timerText = document.getElementById('q-timer-text'); 
  const timerFill = document.getElementById('q-timer-fill');

  if (timerText) timerText.textContent = timeLeft;
  if (timerFill) {
    timerFill.style.strokeDasharray = CIRCLE_CIRCUMFERENCE;
    timerFill.style.strokeDashoffset = 0;
    timerFill.style.transition = 'stroke-dashoffset 1s linear'; 
  }

  timerInterval = setInterval(() => {
    timeLeft--; 
    
    if (timerText) timerText.textContent = timeLeft;

    if (timerFill) {
      const offset = CIRCLE_CIRCUMFERENCE - (timeLeft / TIME_LIMIT) * CIRCLE_CIRCUMFERENCE;
      timerFill.style.strokeDashoffset = offset;
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval); 
      handleTimeOut(); 
    }
  }, 1000);
}

// ✅ 시간 초과 처리 함수
function handleTimeOut() {
  if (qAnswered) return;
  qAnswered = true; 

  const ans = currentQuizList[qIdx].answer;
  const box = document.getElementById('q-answer-box');
  box.style.left    = ans.left   + '%';
  box.style.top     = ans.top    + '%';
  box.style.width   = ans.width  + '%';
  box.style.height  = ans.height + '%';
  box.style.display = 'block';

  const tipEl = document.getElementById('q-tip');
  tipEl.textContent           = '⏰ 시간 초과! 초록 박스가 정답 위치입니다.';
  tipEl.style.background      = '#fff1f2';
  tipEl.style.borderLeftColor = '#ef4444';
  tipEl.style.color           = '#dc2626';
  tipEl.style.display         = 'block';

  checkQuizResult(); // 👈 종료 처리를 공통 함수로 넘김
}

/** 퀴즈 문제 섞어서 새로 뽑기 (핵심!) */
function setupRandomQuiz() {
  const shuffled = [...QUIZ_POOL].sort(() => 0.5 - Math.random());
  currentQuizList = shuffled.slice(0, 10); 
}

/** 문제 화면 초기화 */
function loadQuestion() {
  const q = currentQuizList[qIdx];
  const qEl = document.getElementById('q-question');
  if (!qEl) return;
  
  qEl.textContent = q.question;
  document.getElementById('q-progress').textContent = `${qIdx + 1} / ${currentQuizList.length}`;
  document.getElementById('q-marker').style.display     = 'none';
  document.getElementById('q-answer-box').style.display = 'none';
  document.getElementById('q-tip').style.display        = 'none';
  document.getElementById('q-next-btn').style.display   = 'none';
  document.getElementById('q-complete').style.display   = 'none';
  document.getElementById('quiz-map').style.display     = 'block';
  qAnswered = false;

  startTimer();
}


/** 지도 클릭 이벤트 처리 */
function handleQuizClick(e) {
  if (qAnswered) return;
  
  clearInterval(timerInterval);

  // 👇 클릭 즉시 타이머 0초로 강제 초기화
  timeLeft = 0;
  const timerText = document.getElementById('q-timer-text');
  const timerFill = document.getElementById('q-timer-fill');
  if (timerText) timerText.textContent = '0';
  if (timerFill) timerFill.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;

  const rect = e.currentTarget.getBoundingClientRect();
  const xPct = ((e.clientX - rect.left) / rect.width)  * 100;
  const yPct = ((e.clientY - rect.top)  / rect.height) * 100;

  const marker = document.getElementById('q-marker');
  marker.style.left    = xPct + '%';
  marker.style.top     = yPct + '%';
  marker.style.display = 'block';

  const ans = currentQuizList[qIdx].answer;
  const correct =
    xPct >= ans.left && xPct <= ans.left + ans.width &&
    yPct >= ans.top  && yPct <= ans.top  + ans.height;

  const box = document.getElementById('q-answer-box');
  box.style.left    = ans.left   + '%';
  box.style.top     = ans.top    + '%';
  box.style.width   = ans.width  + '%';
  box.style.height  = ans.height + '%';
  box.style.display = 'block';

  qAnswered = true;

  const tipEl = document.getElementById('q-tip');
  if (correct) {
    qScore += 10; // 문제당 10점
    document.getElementById('q-score').textContent = qScore;
    tipEl.textContent           = '🎯 정답! 💡 ' + currentQuizList[qIdx].tip;
    tipEl.style.background      = '#f0fdf4';
    tipEl.style.borderLeftColor = '#22c55e';
    tipEl.style.color           = '#16a34a';
  } else {
    tipEl.textContent           = '❌ 아쉽네요! 초록 박스가 정답 위치입니다.';
    tipEl.style.background      = '#0000ff';
    tipEl.style.borderLeftColor = '#0000ff';
    tipEl.style.color           = '#0000ff';
  }
  tipEl.style.display = 'block';

  checkQuizResult(); // 👈 종료 처리를 공통 함수로 넘김
}

function checkQuizResult() {
  if (qIdx < currentQuizList.length - 1) {
    document.getElementById('q-next-btn').style.display = 'inline-block';
  } else {
    setTimeout(() => {
      document.getElementById('quiz-map').style.display  = 'none';
      document.getElementById('q-tip').style.display     = 'none';
      document.getElementById('q-complete').style.display = 'block';
      
      const completeTitle = document.querySelector('#q-complete h2');
      const completeDesc = document.querySelector('#q-complete p');
      const completeBtn = document.querySelector('#q-complete button');

      // 60점 이상 합격
      if (qScore >= 60) {
        completeTitle.textContent = "합격입니다! 🎉";
        completeDesc.textContent = `총 ${qScore}점! 이정도면 학교에서 길을 잃어 버릴 일은 없겠죠?`;
        completeBtn.textContent = "다시 도전하기";
      } 
      // 60점 미만 무한 지옥
      else {
        completeTitle.textContent = "불합격 😭";
        completeDesc.textContent = `${qScore}점... 60점을 넘을 때까지 끝낼 수 없습니다!`;
        completeBtn.textContent = "다시 풀기 (무한 반복)";
      }
    }, 2000);
  }
}

/** 다음 문제 */
function nextQuestion() {
  qIdx++;
  loadQuestion();
}

/** 퀴즈 다시 시작 (초기화) */
function resetQuiz() {
  qIdx   = 0;
  qScore = 0;
  document.getElementById('q-score').textContent      = '0';
  document.getElementById('q-complete').style.display = 'none';
  document.getElementById('quiz-map').style.display   = 'block';
  setupRandomQuiz(); 
  loadQuestion();
}

// 처음 로딩될 때 퀴즈 세팅
if(document.getElementById('q-question')) {
  setupRandomQuiz();
  loadQuestion();
}

/* ════════════════════════════════════════════════
   GAS URL 
════════════════════════════════════════════════ */
const GAS_URL = "https://script.google.com/macros/s/AKfycbwfuTgJOxHzClyuyrGFhGg1JK-9f1DS0mVSz8ImURx-mHtOtDDRDfF4f76rk204o4x4ag/exec";

/* ════════════════════════════════════════════════
   학식
════════════════════════════════════════════════ */
function getMealCard() {
  return document.querySelectorAll('.dashboard-grid .box')[1];
}

function renderMealCard(data) {
  const card = getMealCard();
  if (!card) return;

  if (!data.available) {
    card.innerHTML = `
      <h3>🍚 이룸관 학생식당</h3>
      <div style="background:#f0f9ff;color:#0369a1;padding:14px 16px;border-radius:14px;font-weight:600;font-size:.9rem;margin-top:10px;">
        📅 ${data.message || "오늘은 학식 운영이 없습니다."}
      </div>
      <p class="tip-note" style="margin-top:10px;">운영시간: 점심 11:50~13:30 (주말·공휴일 휴무)</p>
    `;
    return;
  }

  const price = (data.price || 5000).toLocaleString();
  // ✅ 수정1: breakfast_takeout 추가
  const breakfast         = (data.breakfast || []).filter(s => !s.startsWith('['));
  const breakfast_takeout = (data.breakfast_takeout || []).filter(s => !s.startsWith('['));
  const lunch  = data.lunch  || [];
  const dinner = data.dinner || [];

  function menuItems(items) {
    if (!items.length) return `<span style="color:#cbd5e1;font-size:.85rem;">-</span>`;
    return items.map(item =>
      `<span style="display:inline-block;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:3px 10px;margin:2px;font-size:.83rem;color:#475569;font-weight:500;">${item}</span>`
    ).join('');
  }

  card.innerHTML = `
    <h3 style="margin-bottom:12px;">🍚 이룸관 학생식당</h3>
    <div style="display:flex;flex-direction:column;gap:0;">

      ${breakfast.length ? `
      <div style="padding:10px 0 12px;border-bottom:1px solid #f1f5f9;">
        <div style="font-size:.78rem;font-weight:700;color:#b45309;margin-bottom:7px;letter-spacing:.04em;">🌅 조식 · 천원의 아침밥</div>
        <div style="line-height:2;">${menuItems(breakfast)}</div>
        ${breakfast_takeout.length ? `
        <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #fde68a;">
          <span style="font-size:.72rem;font-weight:700;color:#92400e;background:#fef3c7;padding:2px 8px;border-radius:99px;display:inline-block;margin-bottom:5px;">📦 포장전용</span>
          <div style="line-height:2;">${menuItems(breakfast_takeout)}</div>
        </div>` : ''}
      </div>` : ''}

      <div style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
          <span style="font-size:.78rem;font-weight:700;color:#1d4ed8;letter-spacing:.04em;">🌞 중식</span>
          <span style="font-size:.78rem;font-weight:800;color:#1e40af;background:#eff6ff;padding:2px 10px;border-radius:99px;">${price}원</span>
        </div>
        <div style="line-height:2;">${menuItems(lunch)}</div>
      </div>

      <div style="padding:12px 0 4px;">
        <div style="font-size:.78rem;font-weight:700;color:#6d28d9;margin-bottom:7px;letter-spacing:.04em;">🌙 석식</div>
        <div style="line-height:2;">${dinner.length ? menuItems(dinner) : '<span style="color:#cbd5e1;font-size:.85rem;">미운영</span>'}</div>
      </div>

    </div>
    <p class="tip-note" style="margin-top:8px;">* 재료 수급에 따라 변경될 수 있습니다.</p>
  `;
}

function renderMealError(msg) {
  const card = getMealCard();
  if (!card) return;
  card.innerHTML = `
    <h3>🍚 이룸관 학생식당</h3>
    <div style="background:#fee2e2;color:#dc2626;padding:14px 16px;border-radius:14px;font-size:.88rem;font-weight:600;margin-top:10px;">
      ${msg}<br>
      <a href="https://www.gknu.ac.kr/main/module/foodMenu/index.do?menu_idx=82"
         target="_blank" style="color:#dc2626;font-weight:700;text-decoration:underline;margin-top:6px;display:inline-block;">
        👉 학교 홈페이지에서 확인하기
      </a>
    </div>
  `;
}

async function loadTodayMenu() {
  if (!GAS_URL || GAS_URL.includes("여기에")) {
    renderMealError("⚙️ GAS URL이 설정되지 않았습니다.");
    return;
  }
  const card = getMealCard();
  if (card) {
    card.innerHTML = `<h3>🍚 이룸관 학생식당</h3><div style="color:#94a3b8;font-size:.9rem;padding:10px 0;">⏳ 메뉴 불러오는 중...</div>`;
  }
  try {
    const res = await fetch(GAS_URL + '?type=menu');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    renderMealCard(data);
  } catch (err) {
    console.error("학식 로딩 오류:", err);
    renderMealError("현재 학식 정보를 불러올 수 없습니다.");
  }
}

/* ════════════════════════════════════════════════
   학사일정 D-Day
════════════════════════════════════════════════ */
function getDDayCard() {
  return document.querySelectorAll('.dashboard-grid .box')[3];
}

async function loadSchedule() {
  const card = getDDayCard();
  if (!card) return;
  if (!GAS_URL || GAS_URL.includes("여기에")) return;

  card.innerHTML = `<h3>📅 주요 일정 D-Day</h3><div style="color:#94a3b8;font-size:.9rem;padding:10px 0;">⏳ 일정 불러오는 중...</div>`;

  try {
    const res  = await fetch(GAS_URL + '?type=schedule');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    const list = data.schedules;
    if (!list || list.length === 0) {
      card.innerHTML = `
        <h3>📅 주요 일정 D-Day</h3>
        <div style="color:#94a3b8;font-size:.9rem;padding:10px 0;">이번 달 남은 일정이 없습니다.</div>
      `;
      return;
    }

    const rows = list.map(item => {
      let ddayText, dotColor, badgeBg, badgeColor;
      if (item.dday === 0) {
        ddayText = 'D-Day'; dotColor = '#ef4444';
        badgeBg = '#fee2e2'; badgeColor = '#dc2626';
      } else if (item.dday <= 7) {
        ddayText = `D-${item.dday}`; dotColor = '#f97316';
        badgeBg = '#fff7ed'; badgeColor = '#c2410c';
      } else {
        ddayText = `D-${item.dday}`; dotColor = '#94a3b8';
        badgeBg = '#f1f5f9'; badgeColor = '#64748b';
      }

      const dateLabel = item.is_range
        ? `${item.start_date} ~ ${item.end_date}`
        : item.start_date;

      return `
        <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;background:#f8fafc;border-radius:14px;">
          <div style="width:8px;height:8px;border-radius:50%;background:${dotColor};flex-shrink:0;"></div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:700;font-size:.9rem;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${item.title}</div>
            <div style="font-size:.75rem;color:#94a3b8;margin-top:2px;">${dateLabel}</div>
          </div>
          <span style="background:${badgeBg};color:${badgeColor};padding:3px 11px;border-radius:99px;font-size:.78rem;font-weight:800;flex-shrink:0;">${ddayText}</span>
        </div>`;
    }).join('');

    card.innerHTML = `
      <h3 style="margin-bottom:14px;">📅 주요 일정 D-Day</h3>
      <div style="display:flex;flex-direction:column;gap:8px;">${rows}</div>
      <p class="tip-note" style="margin-top:10px;">* 경국대 학사일정 기준 자동 업데이트</p>
    `;
  } catch (err) {
    console.error("학사일정 로딩 오류:", err);
    card.innerHTML = `
      <h3>📅 주요 일정 D-Day</h3>
      <div style="color:#dc2626;background:#fee2e2;padding:14px;border-radius:14px;font-size:.88rem;font-weight:600;margin-top:10px;">
        학사일정을 불러올 수 없습니다.
      </div>`;
  }
}

loadTodayMenu();
loadSchedule();
