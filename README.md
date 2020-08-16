# 🏫 릴레이 프로젝트-04 <다시모임> 🏫 ![GitHub stars](https://img.shields.io/github/stars/boostcamp-2020/relay_04) 

### 예상 사용자
- **동문**을 찾고 싶어하는 **40대 이상**
- 특히 동문과 함께 **모임을 만들어 나가고 싶은** 사람


## AI 기반 기능
> 각 기능은 기능별 설명을 참고해주세요 🙌

### [A. 자연어 처리](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_A.md)
🗣 **게시글 형태소 분석을 통해 부적합한 게시글을 판단하고 삭제하는 기능**



### [B. 영상 처리](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_B.md)
🗣 **동창들이 같이 찍은 사진에서 인물 태그를 자동으로 생성하는 기능**

:computer: 테스트 URL : http://49.50.164.198:3000/

#### :heavy_check_mark: 3주차 Check Point

- [x] **사람 찾기 버튼 동작 (로그인, 회원가입은 안돼요 ㅠ)**
- [x] **사람 찾기 페이지 정상 활성화**
- [x] **이미지 업로드 동작**
- [x] **찾기 버튼 동작**
- [x] **사람 얼굴 인식 성공**
- [x] **인식된 박스를 클릭하고 이름 입력 후 엔터 시 태깅**
- [x] **오른쪽 클릭을 통해 다른이름으로 저장**
    
                                     
### [C. 테이블 데이터](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_C.md)
🗣 **설문조사를 통해 관심사와 성향을 파악하고, 비슷한 관심사를 가진 사람들을 추천하는 기능**

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

---

### 👥 <다시모임>을 거쳐간 캠퍼들을 적어주세요 - ! 🔥
> 테이블 형식으로 적어주시면 감사하겠습니다. 캠퍼 깃허브도 링크로 연결 부탁드려요!

**`프로젝트 기획`** -> 기획서가 궁금하다면 [Click!](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Meeting_Log.md)

기능 A 기획 | 기능 B 기획 | 기능 C 기획
--- | --- | --- |
[J109 안샛별](https://github.com/sbyeol3) | [J112 안치현](https://github.com/enhakkore) | [J110 안소희](https://github.com/ahnsoheee)
[J113 양아림](https://github.com/ahrimy) | [J115 오원택](https://github.com/dotaku1992) | [J114 양예진](https://github.com/yejineee)
[J116 오정석](https://github.com/o-star) | [J119 오해성](https://github.com/ohsolution) | [J117 오지현](https://github.com/joh16)
[J118 오지훈](https://github.com/hoo00nn) | | [J120 우승윤](https://github.com/woosy0308)

**`기능 A 구현`**

| Frontend    | Backend     |
| ----------- | ----------- |
| [J008 강진구](https://github.com/xortm854) | [J007 강용범](https://github.com/icandoa) |
| [J081 박승환](https://github.com/rolled-potatoes) | [J044 김성환](https://github.com/shkillo) |
| [J082 박은식](https://github.com/qkrdmstlr3) | [J045 김영근](https://github.com/lacomaco) |
|             | [J118 오지훈](https://github.com/hoo00nn) |
|             | [J119 오해성](https://github.com/ohsolution) |
|             | [J157 이주현](https://github.com/JuHyeon-Lee) |
|             | [J194 조찬영](https://github.com/cyjo9603) |
|             | [J082 박은식](https://github.com/qkrdmstlr3) |

**`기능 B 구현`**

| 업로드 버튼                                   | 이미지 파일 전송                            | 머신러닝 API                                      | 머신러닝 결과 처리(사진)                         |
| --------------------------------------------- | ------------------------------------------- | ------------------------------------------------- | ------------------------------------------------ |
| [J014_권순원](https://github.com/grap3fruit/) | [J109_안샛별](https://github.com/sbyeol3)   | [J192_조정혜](https://github.com/Jeonghae10)      | [J057_김태은](https://github.com/taenykim)       |
| [J029_김도연](https://github.com/do02reen24)  | [J219_황병현](https://github.com/qudgus21)  | [J054_김진관](https://github.com/kkole3897)       | [J086_박주영](https://github.com/juyoungpark718) |
| [J139_이상경](https://github.com/sang-gyeong) | [J213_하지수](https://github.com/JeesooHaa) | [J177_장준호](https://gist.github.com/CHANGJUNHO) | [J164_이청명](https://github.com/chmylee)        |

:pencil2: **소감**

* 부족한 부분을 많이 알게 되었고, 몰랐던 것들을 팀원 분들의 도움으로 많이 배웠습니다. :pray:
* 냥냥이, 멍멍이도 함께한 즐거웠던 3주차 4팀! React, 서버, CLOVA AI 등 부족했던 것들을 동료 캠퍼들에게 많이 배우고 또 다른 형태의 협업을 겪을 수 있었던 보람차고 재밌는 릴레이프로젝트였습니다.
* 초반에 했던 자기소개에서 이정도로 입담을 보여줬던 적이 없었는데 너무 재미있었습니다. 프로젝트는 저보다 잘 하시는 능력자분들이 많아 큰 도움이 된 것 같진 않지만 여전히 모호했던 프론트와 백엔드의 경계가 좀 더 명확해진 것 같아 좋았습니다.
* 스트레스 받지 않는다는 말을 유념하며, 모두 즐겁게 자기소개부터 릴레이 프로젝트 개발을 해서 너무 좋았습니다. 12명이서 할 일을 분담해서 나누는 것은 정말 힘들고, 그 후에 할 일을 마치고 합치는 과정도 힘들었지만, 너무 재밌던 릴레이 프로젝트였습니다.
* 즐겁게하는 것이 목표였는데 실력도 좋고 성격도 좋은 12명의 팀원들을 만나 재밌게 진행할 수 있어서 너무 좋았습니다. 한 기능을 동시에 코딩하는 방법에 대해서 고민도 해보고 React에 대해서 알게 되어 좋았습니다.
* 하나의 기능에 대해서 프론트, 백엔드를 나눠서 개발을 하였는데, 각자 개발한 부분을 정상적으로 합치려면 결국 전체흐름을 어느정도 알아야겠구나 생각을 하게 되었습니다. 결국 프론트든 백엔드든 풀스택에 대한 어느정도의 지식은 필요하겠구나 느낄 수 있었습니다. 실제로도 팀원분들이 자기가 맡은 부분이 아니여도 다른 부분에 관여하며 유연하게 개발을 하였던 것 같습니다.그리고 합치는 과정에서 줌 화면공유를 통해 다른팀원들과 함께 문제를 해결했는데 같이 고민하면서 하니까 더 빠르고 외롭지않게(?) 해결할 수 있었던 것 같습니다. 무엇보다 팀원분들이 다들 적극적이고, 재밌으셔가지고 많이 웃으면서 재밌게 프로젝트를 할 수 있었던 것 같습니다!
* 부스트캠프 시작하고 나서 이정도로 빵빵 웃음이 터졌던적은 처음이었습니다. 다들 너무 실력도 좋으시고 유쾌하셔서 피곤함도 잊고 즐겁게 진행할 수 있었고 배워가는 것도 많아 너무 좋았습니다.
* 자기소개를 엄청 길게 한 프로젝트는 처음이라 너무 재밌었습니다! 중간 중간 질문도 많이 하셔서 서로 잘 알아가는 시간이었습니다 ! :smiley: 프론트랑 백으로 나누는 릴레이 프로젝트는 처음이어서 신기했어요! 비전이 젤 걱정이 많았는데 능력자분들이 많아서 정말 다행이었습니다~!!

**`기능 C 구현`**

<br>

>  2020 부스트캠프 챌린지 릴레이 프로젝트 04
