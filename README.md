# vite-react-basic
#### 인프런 - 리액트 기초 - 부산대학교 소프트웨어융합교육원 
강의 수강하면서 따라 작성함.
#### 강의 주소:  https://inf.run/tTz1Z

# node manager: fnm 설치하기
nvm나 특정 node 버전을 직접 설치한 경우 기존 node를 지우고, nvm보다 빠른 fnm을 사용해보자.
https://github.com/Schniz/fnm?tab=readme-ov-file

fnm 설치 후 ./zshrc에 아래 코드를 추가하자.
```
eval "$(fnm env --use-on-cd)"
```

프로젝트별로 서로 다른 node버전을 관리하기 편해진다.
각 프로젝트 최상단 디렉토리에 아래와 같이 .node-version을 명시해준다.
그러면 알아서 프로젝트별로 .node-version을 참고하여 적용해준다. 
```
node --version > .node-version
```
- vite로 프로젝트 시작하기
```
$ npm create vite@latest
$ npm create vite@latest my-react-app -- --template react
```
# Recoil
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
# tailwindcss 
- vite에서, tailwindcss 4.0부터 tailwind.config.css가 vite.config.js에 통합됨.
- tailwindcss, tailwindcss/forms 추가하기
```
// index.css
@import "tailwindcss";
@plugin "@tailwindcss/forms";
```

# json-server

- json-server는 간단 테스트용 서버. 
  -g 옵션으로 글로벌하게 설치.

```
// 설치 
npm install -g json-server 

// json 서버(db서버) 실행
npx json-server --watch db.json --port 3005
```

# 웹 서버 실행

```
// 웹서버 실행
npm run dev
```


# 정적 자산 디렉토리 지정 방법
- 기본적으로 Vite는 프로젝트 루트에 public이라는 이름의 디렉토리를 "정적 자산 디렉토리"로 사용
- 이 디렉토리 안의 파일들은 웹 서버의 루트 경로에서 직접 접근 가능. 예를 들어, public/image.png는 /image.png로 접근 가능
- 소스 코드에서 참조되지 않는 자산: 주로 robots.txt, favicon.ico, manifest.json과 같이 소스 코드(JavaScript, CSS 등)에서 import 문으로 참조되지 않는 파일들을 여기에 둡니다. 또는 파일 이름이 해싱되지 않고 정확히 유지되어야 하는 자산(예: 특정 SDK에서 요구하는 파일)을 둘 때 사용합니다.
- vite.config.js에서 "publicDir"로 정적 자산 디렉토리 지정 가능.
- public -> static으로 적용해보기.
```
// vite.config.js
export default defineConfig({
  plugins: [
    react(), 
  ],
  publicDir: 'static'
})
```
