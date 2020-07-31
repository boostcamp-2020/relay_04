# 기능 B : 영상 비전 처리

## 기능 설명

### 목적

`다시모임`은 예전의 동창을 만나게 하는 웹 서비스이다.
과거의 동창을 만나게 되면 세월이 흘러 사진만 보고는 누구인지 식별하기가 힘들 수 있다.
이를 위해 **인공지능 기반 Face Recognition 기술**을 사용하여 직접 만나 대화하지 않아도 단체 사진에 각 사용자를 태그하여 서로 알아볼 수 있도록 한다.

### 로직

- 회원가입 시 등록되는 프로필 사진을 개개인의 고유 정보로 저장한다.
- 게시글에 여러명의 사람이 포함된 사진이 올라오는 경우 그룹 유저들의 프로필사진과 해당 이미지에서 뽑아낸 얼굴 정보를 매칭시킨다.
- 매칭된 결과에 따라 이름(ID)를 태깅한다.

### 예상 문제점
- 각 사용자의 얼굴 데이터셋이 부족해서 정확도가 낮을 수 있음
- 정확도가 낮음에도 가장 유사한 데이터를 태깅할 수 있음 : 기준이 되는 유사도 미만일 경우 태깅하지 않는 식으로 해결해야 할 듯함


## Flow chart  
![image](https://user-images.githubusercontent.com/46911854/89036966-abcb8700-d378-11ea-8dc1-4dae62008517.png)  

## 예상 UI

![image](https://user-images.githubusercontent.com/43700074/89024829-b843e580-d360-11ea-9978-943d8bae130c.png)


## 관련 라이브러리 및 API

### Simple Face Recognition Model

> https://github.com/kairess/simple_face_recognition

데이터 셋 내의 인물의 얼굴을 입력된 사진에서 매칭시켜주는 오픈소스 모델

### Clova Face Recognition(CFR) API : face

> https://apidocs.ncloud.com/ko/ai-naver/clova_face_recognition/face/

입력받은 이미지로부터 얼굴을 감지하고 입력된 이미지에서 얼마나 많은 얼굴이 감지되었고 각 얼굴이 어디에 어떤 크기로 위치하며 어떤 모습을 하고 있는지 반환하는 REST API
- 감지된 얼굴의 수, 감지된 얼굴을 분석한 정보

### Open Face DataSet (face) 🙂

> [PubFig (Public Figures Face Database)](https://www.cs.columbia.edu/CAVE/databases/pubfig)

> https://analyticsindiamag.com/10-face-datasets-to-start-facial-recognition-projects/


### 읽어보면 좋을 자료

- [얼굴 랜드마크 탐지 모델](https://blog.naver.com/PostView.nhn?blogId=chandong83&logNo=221487549771&categoryNo=0&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView)
- [dlib](http://dlib.net/python/index.html)
  - C++ 라이브러리지만 python으로 이용 가능한 라이브러리, `face landmark` 추출이 가능
  - [예제 : Python에서 dlib을 이용하여 Facial Landmark 검출하여 데이터를 json 저장하기](https://velog.io/@choiiis/Python%EC%97%90%EC%84%9C-dlib%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-Facial-Landmark-%EA%B2%80%EC%B6%9C%ED%95%98%EC%97%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-json-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0)
