// 종류별 브랜드 선택 칩의 목록은 collector/brands.json에서 관리합니다.
// (수집기를 실행하면 pending.js로 함께 내보내집니다. 여기서 따로 적지 않아도 됩니다.)

// 매년 반복되는 할인 행사. month/day 기준으로 해마다 자동 생성됩니다. (endMonth/endDay 생략 시 하루짜리)
// 매년 열리는 관례적 행사이므로 별도 공지 확인 없이 표시됩니다.
window.RECURRING = [
  { title: "마프대란 11/11 할인", brand: "마이프로틴", category: "기타", month: 11, day: 11, url: "https://www.myprotein.co.kr", note: "연례 11.11 대규모 할인" },
];

// 직접 추가하는 이벤트. 형식:
// { title: "...", brand: "...", category: "버거", start: "2026-11-20", end: "2026-11-22", url: "공고 주소", note: "", verified: true }
// start/end: "YYYY-MM-DD" (하루짜리면 end 생략) / verified: false 이면 "예정/미확인" 배지가 붙습니다.
window.EVENTS = [
];
