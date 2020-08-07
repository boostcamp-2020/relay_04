- 사용 API
	ADAMS.ai 에서 제공하는 형태소 분석 API
	[https://www.adams.ai/apiPage?tms=pos](https://www.adams.ai/apiPage?tms=pos)

- API 호출시에 key값이 필요한데 한 계정당 월 1000회 제한
- 1000 건 넘으면 새로 ADAMS.AI 회원가입 후 Open API 사용신청을 통해 key를 새로 받을 수 있다.
- safeCheck 모듈 사용 위해서 nodejs의 sync-request 설치 필요
```
npm install sync-request 
```

- API url 호출 예시
```
http://api.adams.ai/datamixiApi/tms?key=8571616425836319259&query=저는 홍길동 입니다.&lang=kor&analysis=pos
```
응답 JSON:
```
{
   "request_id": "0",
   "return_type": "tms",
   "result": "0",
   "return_object": {
      "text": "저는 홍길동 입니다.",
      "sentence": [
         {
            "text": "저는 홍길동 입니다.",
            "id": -1,
            "morp": [
               {
                  "id": 0,
                  "lemma": "저",
                  "type": "NP"
               },
               {
                  "id": 1,
                  "lemma": "는",
                  "type": "JX"
               },
               {
                  "id": 2,
                  "lemma": "홍길동",
                  "type": "NNP"
               },
               {
                  "id": 3,
                  "lemma": "입",
                  "type": "NNG"
               },
               {
                  "id": 4,
                  "lemma": "니다",
                  "type": "EF"
               },
               {
                  "id": 5,
                  "lemma": ".",
                  "type": "SF"
               }
            ],
            "word": [
               {
                  "id": 0,
                  "text": "저는",
                  "tagged_text": "저/NP 는/JX",
                  "begin": 0,
                  "end": 1
               },
               {
                  "id": 1,
                  "text": "홍길동",
                  "tagged_text": "홍길동/NNP",
                  "begin": 2,
                  "end": 2
               },
               {
                  "id": 2,
                  "text": "입니다.",
                  "tagged_text": "입/NNG 니다/EF ./SF",
                  "begin": 3,
                  "end": 5
               }
            ],
            "dependency": [],
            "ne": []
         }
      ]
   },
   "result_code": "success"
}
```