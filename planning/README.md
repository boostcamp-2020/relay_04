# 릴레이 프로젝트 <다시모임> 기획을 위한 회의록

> [라떼 챌린지](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Latte_challenge.md) 이후 결정된 아이러브스쿨 / 다모임 리뉴얼 -> 기능 기획

### 서비스 이름 정하기
- 서비스 이름 : 다시모임
- 이름 후보 : 향수, 모임사랑, **다시모임**, 또모임

### 예상 사용자 선정
**동문**을 찾고 싶어하는 **40대 이상**, 특히 동문과 함께 **모임을 만들어 나가고 싶은** 사람


## 기능 선정 과정
> 각 기능은 기능별 설명을 참고해주세요 🙌

### [A. 자연어 처리](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_A.md)
1. **게시글 분석을 통해 부적합한 게시글 판단** ✔️
    - 데이터 셋 만들기
2. 중장년층의 게시글 맞춤법 교정 -> API 찾기 어려움
3. 각 그룹 별로 자주 사용하는 키워드 분석하여 이벤트 데이터로 활용
4. 챗봇 기능 구현


### [B. 영상 처리](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_B.md)
1. 회원가입 시 촬영, 업로드한 이미지에서 얼굴 추출하여 프로필 이미지
2. 가입 권한을 위해 공통되는 이미지를 선택하도록
3. 추억의 흑백 이미지를 컬러 이미지로 변경해주기, 또는 화질 개선
4. 현재의 사진을 바탕으로 과거 얼굴을 생성해서 사용할 수 있게 -> API 찾기 어려움
5. **동창들이 같이 찍은 사진에서 인물 태그를 자동으로** ✔️
    - 각 사용자의 얼굴 데이터셋이 부족해서 정확도가 낮을 수 있음
    - 정확도가 낮음에도 가장 유사한 데이터를 태깅할 수 있음 : 기준이 되는 유사도 미만일 경우 태깅하지 않는 식으로 해결해야 할 듯함
                                     
### [C. 테이블 데이터](https://github.com/boostcamp-2020/relay_04/blob/master/planning/Feature_C.md)
1. 게시글을 기반으로 키워드 및 관심사 분석, 결과를 통해 게시판 추천
2. 프로필에 맞는 게시판 추천 서비스, 프로필 항목의 목록화로 비슷한 사용자를 군집화, 결과를 바탕으로 동호회 연결
3. **학교에만 국한하지 않고 동네 친구들도 찾을 수 있는 기능** ✔️

---

### 📃 문서화 해야 할 것들
- 참고할 만한 사례, 라이브러리나 예제 및 사용할 만한 데이터 셋 정리
- 각 기능 별로 예상되는 문제점에 대해 정리해서 넘기기
- 대략적인 레이아웃 (프로토타이핑 oven 사용)

### ✍️ 회의 기록
- 1시 회의 : 대략적인 주제 선정
- 3시 회의 : A, B, C 팀 별로 기능 생각해서 발표하기
- 6시 회의 : 각자 팀 별로 조사한 문서화(1,2) 정리, README 작성
- 10시 30분 회의 : 팀 별로 README에 Flowchart 및 프로토타입 추가

### 👥 기획 참여자 (아이디 순)

기능 A 참여자 | 기능 B 참여자 | 기능 C 참여자
--- | --- | --- |
[J109 안샛별](https://github.com/sbyeol3) | [J112 안치현](https://github.com/enhakkore) | [J110 안소희](https://github.com/ahnsoheee)
[J113 양아림](https://github.com/ahrimy) | [J115 오원택](https://github.com/dotaku1992) | [J114 양예진](https://github.com/yejineee)
[J116 오정석](https://github.com/o-star) | [J119 오해성](https://github.com/ohsolution) | [J117 오지현](https://github.com/joh16)
[J118 오지훈](https://github.com/hoo00nn) | | [J120 우승윤](https://github.com/woosy0308)

> 기획일자 : 2020.07.31