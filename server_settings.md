# Project Setting (server setting)

server setting을 위한 모든 작업은 /server에서 이루어 진다.
​

## Setup

```bash
$npm i
$npm i -g pm2 sequelize-cli
$npm i -g pm2 cross-env // windows 환경일 때 설치
```

server 실행을 위한 `pm2`, DB설정을 위한 sequelize-cli 전역 설치
windows환경일 때는 `cross-env`도 추가로 설치한다.
​

## .env 설정

```bash
COOKIE_SECRET=secret
DB_USERNAME= // DB 유저 이름
DB_PASSWORD= // DB 비밀번호
DB_NAME= // DB 이름 
DB_HOST=localhost // DB HOST 주소 (local에서는 localhost)
```
**DB 포트 번호가 3306이 아니신 분들은 config/config.js 에서 포트 번호를 바꿔주세요**
/server/.env파일을 생성 후 다음 값을 넣어줌
그 후에 `sequelize db:create`명령어를 `/server`에서 실행 (DB 스키마 생성)
​

## run testing server (dev-server)

```bash
$npm run dev
```

`/server`에서 다음 명령어 입력, 4000번 port로 개발 서버 시작
​

### run server (production-server)

```bash
$npm start && pm2 monit
​
$npm run win-start // windows 환경시 서버 시작 명령어
```

`/server`에서 다음 명령어 입력, 80번 port로 배포 서버 시작
​
### run front server
```bash
$npm start
```
`/front`에서 다음 명령어 입력하면 프론트 서버 시작
​
서버 두개 다 키면 정상 동작할 것이다.
