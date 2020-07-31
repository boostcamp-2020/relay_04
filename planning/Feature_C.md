# 기능 C : 테이블 데이터 분석

## 기능 설명

### 목적
  아이러브스쿨은 인터넷에서 학교 동문을 찾아주는 사이트로 큰 인기를 끌었지만, 사용자들은 아이러브스쿨을 통해 동창을 찾은 후 다시 찾을 필요성을 느끼지 못하며 인기는 오래가지 않았다.

 -> 이를 보완하고 사용자들이 자신과 성향이 비슷한 새로운 사람을 만날 수 있도록 친구 추천 기능을 구현하고자 한다.


### 기능 
 사용자가 입력한 정보와 문항에 대한 답변 기반으로 친구 추천 기능

 - 회원가입 시 이름, 학교, 나이, 성별, 사는 지역 등 정보를 입력한다
- 본인의 성향을 파악하는 설문조사를 실시한다
    * 다음 중 내일 점심 메뉴를 고르면?  `짬뽕` vs `짜장면`
    * 다음 중 주말에 하고 싶은 것은? `집에서 휴식` vs `여행`
    * 다음 중 가장 관심 있는 것을 고르면? `연예인`, `스포츠`, `게임`, `요리`
    * 등등... 
- 회원 정보와 성향을 바탕으로 추천 시스템을 통해 만날 사람을 추천한다
    * 동창/동문만 검색 가능하도록 체크박스 배치
    * 사는 지역을 제한할 수 있도록 드롭다운 배치
- 회원 정보와 설문조사 결과를 테이블에 추가한다

## Flow chart

![flow_chart](https://user-images.githubusercontent.com/61968474/89038562-8db35600-d37b-11ea-9a56-a2d1beee0b68.PNG)


## 데이터 구조 예시

- 출신 학교(초/중/고/대) -> 친구 찾기 시 체크박스로 선택(동문/동창만 찾기도 가능)
- 나이
- 성별
- 사는 지역
- 여가 시간(평일 저녁, 주말 오후 등)
- 설문조사 문항 답변


## 예상 UI 및 프로토타입

![ex1](https://user-images.githubusercontent.com/61968474/89035873-a0775c00-d376-11ea-9f6f-fb7171afc231.PNG)

![ex2](https://user-images.githubusercontent.com/61968474/89035869-9ead9880-d376-11ea-8a15-96fa8e8bc443.PNG)


## 관련 라이브러리 및 API

### 파이썬 surprise

> http://surpriselib.com/

추천시스템을 위한 Python 라이브러리
- [활용 예제 : Python Surprise lib에서 제공하는 추천 알고리즘을 코드와 함께 살펴보자](https://danthetech.netlify.app/DataScience/how-does-recommendation-algorithms-work-using-surpriselib)


## 참고자료

- [추천 시스템을 모아놓은 저장소](https://github.com/grahamjenson/list_of_recommender_systems)
- [영화 추천 시스템 예제](https://yumere.tistory.com/70?category=430507)
