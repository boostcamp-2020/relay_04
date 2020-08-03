# 🏫 릴레이 프로젝트-04 <다시모임> 🏫 ![GitHub stars](https://img.shields.io/github/stars/boostcamp-2020/relay_04) 

### 예상 사용자
- **동문**을 찾고 싶어하는 **40대 이상**
- 특히 동문과 함께 **모임을 만들어 나가고 싶은** 사람


## AI 기반 기능
> 각 기능은 기능별 설명을 참고해주세요 🙌

### [A. 자연어 처리](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_A.md)
🗣 **게시글 형태소 분석을 통해 부적합한 게시글을 판단하고 삭제한다!**



### [B. 영상 처리](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_B.md)
🗣 **동창들이 같이 찍은 사진에서 인물 태그를 자동으로 생성한다!**
    
                                     
### [C. 테이블 데이터](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_C.md)
🗣 **설문조사를 통해 관심사와 성향을 파악하고, 비슷한 관심사를 가진 사람들을 추천해준다!**

<br>

## 추가적으로 구현해야 할 공통 기능

기능 | 설명 | 참고
--- | --- | ---
회원가입 및 로그인 |  | [JWT 기반 로그인](https://sanghaklee.tistory.com/47)
레이아웃 구현 | 예상 사용자에 맞는 UI (폰트 크기 등) | 
게시판 기능 | 작성 시 사진 첨부, 수정 및 삭제 | [Web 에디터](http://blog.naver.com/PostView.nhn?blogId=psj9102&logNo=221560331178&categoryNo=27&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView)
댓글 기능 | 다른 사용자의 게시글에 댓글 달기 |
모임 생성 기능 | 동문 게시판 내 새로운 모임 게시판 생성 |
관리자 페이지 | 회원 관리 및 게시글 관리를 위한 관리자 탭 |

<br>

## 예상 데이터베이스 스키마
> 개발 시간 단축을 위해 짠 스키마인데 필요에 따라 수정하셔도 좋습니다 :)

### table : user (회원정보)
key | attribute name | type | description
--- | --- | --- | ---
PK | ID | int | 회원 고유 번호
| | USERID | varchar | 회원 ID
| | NAME | varchar | 회원 이름
| | RESISTER_DATE | date | 가입일자
| | GENDER | varchar | 성별
FK | UNIV | int | 출신 대학의 고유 번호
FK | HIGH | int | 출신 고등학교의 고유 번호

### table : image (회원 사진)
key | attribute name | type | description
--- | --- | --- | ---
PK, FK | ID | int | 회원 고유 번호
| | FACE | varchar | 회원의 대표 얼굴 좌표
| | FACE_POS_X | varchar | 얼굴 X좌표를 담은 배열
| | FACE_POS_Y | varchar | 얼굴 Y좌표를 담은 배열

### table : test_result (친구추천을 위한 테스트 결과)
key | attribute name | type | description
--- | --- | --- | ---
PK, FK | ID | int | 회원 고유 번호
| | TYPE | int |  테스트 결과 유형

### table : school (고등학교 및 대학교 정보)

key | attribute name | type | description
--- | --- | --- | ---
PK | ID | int | 회원 고유 번호
| | NAME | varchar | 학교 이름
| | USER_COUNT | int | 소속된 회원 수
| | BOARD_COUNT | int | 해당 학교 내 하위 게시판 수

---

### 👥 <다시모임>을 거쳐간 캠퍼들을 적어주세요 - ! 🔥
> 테이블 형식으로 적어주시면 감사하겠습니다. 캠퍼 깃허브도 링크로 연결 부탁드려요!

**`프로젝트 기획`**

기능 A 기획 | 기능 B 기획 | 기능 C 기획
--- | --- | --- |
[J109 안샛별](https://github.com/sbyeol3) | [J112 안치현](https://github.com/enhakkore) | [J110 안소희](https://github.com/ahnsoheee)
[J113 양아림](https://github.com/ahrimy) | [J115 오원택](https://github.com/dotaku1992) | [J114 양예진](https://github.com/yejineee)
[J116 오정석](https://github.com/o-star) | [J119 오해성](https://github.com/ohsolution) | [J117 오지현](https://github.com/joh16)
[J118 오지훈](https://github.com/hoo00nn) | | [J120 우승윤](https://github.com/woosy0308)


**`기능 A 구현`**

**`기능 B 구현`**

**`기능 C 구현`**

<br>

>  2020 부스트캠프 챌린지 릴레이 프로젝트 04