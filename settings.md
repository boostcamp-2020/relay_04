# Project Setting

## Setup

```bash
$npm i -g pm2
$npm i -g pm2 cross-env // windows 환경일 때 설치
```

server 실행을 위한 `pm2` 전역 설치, windows환경일 때는 `cross-env`도 추가로 설치한다.

## .env 설정

```bash
COOKIE_SECRET= // 쿠키 비밀키
DB_USERNAME= // DB 유저 이름
DB_PASSWORD= // DB 비밀번호
DB_HOST=localhost // DB HOST 주소 (local에서는 localhost)
```

.dotenv파일을 생성 후 다음 값을 넣어줌

## run testing server (dev-server)

```bash
$npm run dev
```

`/server`에서 다음 명령어 입력, 4000번 port로 개발 서버 시작

### run server (production-server)

```bash
$npm start && pm2 monit

$npm run win-start // windows 환경시 서버 시작 명령어
```

`/server`에서 다음 명령어 입력, 80번 port로 배포 서버 시작
