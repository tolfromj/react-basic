# vite-react-basic
- vite로 프로젝트 시작하기
```
$ npm create vite@latest
$ npm create vite@latest my-vue-app -- --template react
```
---
- Recoil은 react 18까지만 공식 지원함. (19 버전에서 에러 발생함)
```
// package.json
"dependencies": {
  ...
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  ...
}
```
---
- vite에서, tailwindcss 4.0부터 tailwind.config.css가 vite.config.js에 통합됨.
- tailwindcss, tailwindcss/forms 추가하기
```
// index.css
@import "tailwindcss";
@plugin "@tailwindcss/forms";
```
---

- json-server는 간단 테스트용 서버. 
  -g 옵션으로 글로벌하게 설치.

```
// 설치 
npm install -g json-server 

// json 서버(db서버) 실행
npx json-server --watch db.json --port 3005
```
---

```
// 웹서버 실행
npm run dev
```