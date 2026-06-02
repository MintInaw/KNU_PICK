# 🎓 경국픽 (KNU Pick)
> 국립경국대학교 안동캠퍼스 신입생을 위한 캠퍼스 정보 통합 플랫폼

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://mintinaw.github.io/KNU_PICK)
![HTML](https://img.shields.io/badge/HTML-CSS-JS-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 📌 소개

신입생들이 학교 생활에 필요한 정보를 한 곳에서 쉽게 찾을 수 있도록 만든 정적 웹 플랫폼입니다.  
설치 없이 URL 하나로 접근하며, Google Apps Script와 카카오맵 API를 연동해 실시간 정보를 제공합니다.

🔗 **바로가기**: [https://mintinaw.github.io/KNU_PICK](https://mintinaw.github.io/KNU_PICK)

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🍚 **오늘의 학식** | GAS 크롤링으로 이룸관 학식 메뉴 자동 업데이트 |
| 📅 **학사일정 D-Day** | 경국대 학사일정 API 연동, 가까운 일정 자동 정렬 |
| 🗺️ **상권 지도** | 카카오맵 기반 솔뫼·논골 상권 마커 및 리뷰 |
| 🏃 **캠퍼스 퀴즈** | 지도 클릭으로 건물 위치 맞추기, 10초 타이머 |
| 💡 **오늘의 꿀팁** | 선배들이 알려주는 캠퍼스 생활 꿀팁 자동 슬라이드 |
| 🔗 **유용한 사이트** | 에브리타임·국가장학금·노션 등 자주 쓰는 링크 모음 |

---

## 🛠️ 기술 스택

- **Frontend**: HTML / CSS / JavaScript (Vanilla)
- **서버리스 백엔드**: Google Apps Script (GAS)
- **지도 API**: 카카오맵 API
- **배포**: GitHub Pages

---

## 📁 파일 구조

```
KNU_PICK/
├── index.html      # 메인 페이지
├── style.css       # 스타일시트
├── main.js         # 핵심 로직 (지도, 퀴즈, GAS 연동)
└── 캠퍼스맵.png    # 퀴즈용 캠퍼스 지도 이미지
```

---

## 🚀 로컬 실행

```bash
# Python 서버 실행
python -m http.server 5500

# 브라우저에서 접속
http://localhost:5500
```

---

## 👥 팀원

| 이름 | 역할 |
|------|------|
| 신선우 | 프론트엔드 개발, GAS 크롤링 |
| 손연교 | UI/UX 디자인, 데이터 수집 |
| 손민영 | 카카오맵 연동, 상권 데이터 |

---

## 📄 라이선스

MIT License © 2025 KNU Pick Team
