# π react_webpack_template

[![npm](https://img.shields.io/npm/v/npm)](https://github.com/gparkkii/react_webpack_template)
[![dependencies](https://img.shields.io/librariesio/github/gparkkii/react_webpack_template)](https://github.com/gparkkii/react_webpack_template)
[![license](https://img.shields.io/github/license/gparkkii/react_webpack_template)](https://github.com/gparkkii/react_webpack_template)
[![LastCommit](https://img.shields.io/github/last-commit/gparkkii/react_webpack_template)](https://github.com/gparkkii/react_webpack_template)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgparkkii%2Freact_webpack_template&count_bg=%23FF8500&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://github.com/gparkkii/react_webpack_template)

<br/>

## π Intro

Wepack μΌλ‘ React.js κ°λ°νκ²½ buildνκΈ°

<br/>

<p align="center">
  <img width="800" alt="darkmode_web" src="https://user-images.githubusercontent.com/71811780/114306315-8c474980-9b16-11eb-88ed-8b810b6215bd.gif">
</p>

<br/>

κΈ°λ₯ λ³ μμΈν μ€λͺ λ° νλ‘κ·Έλλ° κ³Όμ μ https://velog.io/@gparkkii/reactwebpack1 μμ νμΈ κ°λ₯ν©λλ€.

<br/>

---

<br/>

## π Quick Start

- μ νλ¦¬μΌμ΄μ μ€μΉ

```bash
$> git clone https://github.com/gparkkii/react_webpack_template.git
$> npm i
```

- μ νλ¦¬μΌμ΄μ μ€ν

```bash
$> npm start
```

<br/>

---

<br/>

## π Need To Develop

- ~~Production mode config~~
- ~~add chunk config~~
- storybook
- workbook.md

<br/>

---

<br/>

## π  Project Structure

#### μ£Όμ λΌμ΄λΈλ¬λ¦¬ (package)

```text
package.json
βββ react : λ¦¬μ‘νΈ λΌμ΄λΈλ¬λ¦¬
βββ react-dom : λΈλΌμ°μ  DOM μ μ΄ λ° UI λ λλ§
βββ @babel/core : Babel ν΅μ¬ μμ‘΄μ± λΌμ΄λΈλ¬λ¦¬
βββ @babel/preset-env : ES λ²μ  μλ μ»΄νμΌ
βββ @babel/preset-react : jsx μ½λ μλ λ³ν
βββ babel-loader : μλ°μ€ν¬λ¦½νΈ μ»΄νμΌλ¬
βββ webpack : μΉν© λͺ¨λ λ²λ€λ¬
βββ webpack-cli : μ»€λ§¨λλΌμΈ μΈν°νμ΄μ€
βββ webpack-dev-server : μ νλ¦¬μΌμ΄μ κ°λ° μλ² μ κ³΅
βββ webpack-bundle-analyzer : λ²λ€ analyzer
βββ html-webpack-plugin : λΉλ μ html νμΌ μλ μμ±
βββ clean-webpack-plugin : λ²λ€λ§ ν  λλ§λ€ μ΄μ  κ²°κ³Όλ¬Ό μ κ±°
βββ @pmmmwh/react-refresh-webpack-plugin : μ½λλ₯Ό μμ  μ μλμΌλ‘ λ λλ§ ν΄μ£Όλ λΌμ΄λΈλ¬λ¦¬
```

<br/>

#### ννλ¦Ώ κ΅¬μ‘° (/src)

```text
π¦ react_webpack_template
βββ π public
β   βββ π favicon.png
β   βββ π index.html
βββ π src
β   βββ π assets βββββββββββββββ  μ΄λ―Έμ§ νμΌ
β   β   βββ π react.png
β   β   βββ π webpack.png
β   β
β   βββ π components βββββββββββ  view μ»΄ν¬λνΈ
β   β   βββ π Common βββββββββββ  κ³΅ν΅μΌλ‘ μ¬μ©λλ μ»΄ν¬λνΈ
β   β       βββ π AppLayout.js
β   β       βββ π Header.js
β   β       βββ π Footer.js
β   β
β   βββ π pages ββββββββββββββββ  λΌμ°νμ μ°μΌ pages
β   β   βββ π Main.js
β   β
β   βββ π style ββββββββββββββββ  css & emotion styles
β   β   βββ π container
β   β   β   βββstyles.js
β   β   βββ π media_query
β   β   βββ π index.css
β   β
β   βββ π App.js βββββββββββββββ  pages route μ²λ¦¬
βββ βββ π index.js βββββββββββββ  μ νλ¦¬μΌμ΄μ μνΈλ¦¬ ν¬μΈνΈ
```

<br/>

---

<br/>
