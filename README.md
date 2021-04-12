# 🌐 react_webpack_template

[![npm](https://img.shields.io/npm/v/npm)](https://github.com/gparkkii/react_webpack_template)
[![dependencies](https://img.shields.io/librariesio/github/gparkkii/react_webpack_template)](https://github.com/gparkkii/react_webpack_template)
[![license](https://img.shields.io/github/license/gparkkii/react_webpack_template)](https://github.com/gparkkii/react_webpack_template)
[![LastCommit](https://img.shields.io/github/last-commit/gparkkii/react_webpack_template)](https://github.com/gparkkii/react_webpack_template)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgparkkii%2Freact_webpack_template&count_bg=%23FF8500&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://github.com/gparkkii/react_webpack_template)

<br/>

## 📝 Intro

Wepack 으로 React.js 개발환경 build하기

<br/>

<p align="center">
  <img width="800" alt="darkmode_web" src="https://user-images.githubusercontent.com/71811780/114306315-8c474980-9b16-11eb-88ed-8b810b6215bd.gif">
</p>

<br/>

기능 별 자세한 설명 및 프로그래밍 과정은 https://velog.io/@gparkkii/reactwebpack1 에서 확인 가능합니다.

<br/>

---

<br/>

## 🚀 Quick Start

- 애플리케이션 설치

```bash
$> git clone https://github.com/gparkkii/react_webpack_template.git
$> npm i
```

- 애플리케이션 실행

```bash
$> npm start
```

<br/>

---

<br/>

## 📍 Need To Develop

- ~~Production mode config~~
- ~~add chunk config~~
- storybook
- workbook.md

<br/>

---

<br/>

## 🛠 Project Structure

#### 주요 라이브러리 (package)

```text
package.json
├── react : 리액트 라이브러리
├── react-dom : 브라우저 DOM 제어 및 UI 렌더링
├── @babel/core : Babel 핵심 의존성 라이브러리
├── @babel/preset-env : ES 버전 자동 컴파일
├── @babel/preset-react : jsx 코드 자동 변환
├── babel-loader : 자바스크립트 컴파일러
├── webpack : 웹팩 모듈 번들러
├── webpack-cli : 커맨드라인 인터페이스
├── webpack-dev-server : 애플리케이션 개발 서버 제공
├── webpack-bundle-analyzer : 번들 analyzer
├── html-webpack-plugin : 빌드 시 html 파일 자동 생성
├── clean-webpack-plugin : 번들링 할 때마다 이전 결과물 제거
└── @pmmmwh/react-refresh-webpack-plugin : 코드를 수정 시 자동으로 렌더링 해주는 라이브러리
```

<br/>

#### 템플릿 구조 (/src)

```text
📦 react_webpack_template
├── 🗂 public
│   ├── 📄 favicon.png
│   ├── 📄 index.html
├── 🗂 src
│   ├── 📂 assets ───────────────  이미지 파일
│   │   ├── 📄 react.png
│   │   └── 📄 webpack.png
│   │
│   ├── 📂 components ───────────  view 컴포넌트
│   │   └── 📂 Common ───────────  공통으로 사용되는 컴포넌트
│   │       ├── 📄 AppLayout.js
│   │       ├── 📄 Header.js
│   │       └── 📄 Footer.js
│   │
│   ├── 📂 pages ────────────────  라우팅에 쓰일 pages
│   │   └── 📄 Main.js
│   │
│   ├── 📂 style ────────────────  css & emotion styles
│   │   ├── 📂 container
│   │   │   └──styles.js
│   │   ├── 📄 media_query
│   │   └── 📄 index.css
│   │
│   ├── 📄 App.js ───────────────  pages route 처리
└── └── 📄 index.js ─────────────  애플리케이션 엔트리 포인트
```

<br/>

---

<br/>
