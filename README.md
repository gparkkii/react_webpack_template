# 🌐 react_webpack_template

> Wepack 으로 React.js 개발환경 build하기

<br/>

<p align="center">
  <img width="800" alt="darkmode_web" src="https://user-images.githubusercontent.com/71811780/114306315-8c474980-9b16-11eb-88ed-8b810b6215bd.gif">
</p>

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

## 🛠 Project Structure

#### 주요 라이브러리 (package)

```text
package.json
├── react
├── react-dom
├── @babel/core
├── @babel/preset-env
├── @babel/preset-react
├── babel-loader
├── webpack
├── webpack-cli
├── webpack-dev-server
├── webpack-bundle-analyzer
├── html-webpack-plugin
├── clean-webpack-plugin
└── @pmmmwh/react-refresh-webpack-plugin
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
│   │
│   ├── 📄 App.js ───────────────  pages route 처리
└── └── 📄 index.js ─────────────  애플리케이션 엔트리 포인트
```
