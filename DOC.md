# 다시 모임 



## DB schema



### post

id (auto increment, primary key) : int(10)

writer : int(10)

title : varchar(30)

content : text

bad : bool



### user

id (auto increment, primary key) : int(10)

userid : varchar(20)

userpw : varchar(250)

bad : bool

authority: bool



## API



### 회원가입 (POST)

**URL**

[BASE_URL]/api/user/signup

**REQUEST BODY**

id : [사용자 id] / pw : [사용자 pw]

**RESPONSE**

```
{
    result : true(성공) / false(실패)
}
```



### 로그인 (POST)

**URL**

[BASE_URL]/api/user/signin

**REQUEST BODY**

id : [사용자 id] / pw : [사용자 pw]

**RESPONSE**

```
{
    user : {
        id
        userid
        userpw
        bad
        authority
    }
}
```



### 글 저장 (POST)

**URL**

[BASE_URL]/api/post/write

**REQUEST BODY**

id : [사용자 id] / title : [게시글 제목] / content : [게시글 내용]

**RESPONSE**

```
{
    result : true(성공) / false(실패)
}
```



### 글 목록 불러오기 (GET)

**URL**

[BASE_URL]/api/posts/

**REQUEST PARAMETER**

page : [페이지 번호] ---> 기능 보류

**RESPONSE**

```
{
    postList : [
        {
            id : int(10)
            User : {
                id : int(10)
                userid : varchar(20)
                userpw : varchar(250)
                bad : bool
	        }
            title : varchar(30)
            content : text
            bad : bool
        },
        {
            id : int(10)
            User : {
	            id : int(10)
                userid : varchar(20)
                userpw : varchar(250)
                bad : bool
	        }
            title : varchar(30)
            content : text
            bad : bool
        }
    ]
}
```



### 글 불러오기 (GET)

**URL**

[BASE_URL]/api/post/[게시글id]

**REQUEST BODY**

id : [게시글 id]

**RESPONSE**

```
{
    post : {
        id : int(10)
        User : {
	        id : int(10)
            userid : varchar(20)
            userpw : varchar(250)
            bad : bool
	    }
        title : varchar(30)
        content : text
        bad : bool
    }
}
```

### 게시글 bad를 공개로 수정하기 (POST)

**URL**
[BASE_URL]/api/post/update/[게시글id]

**REQUEST BODY**

id : [게시글 id]

**RESPONSE**


```
{
    result : true(성공) / false(실패)
}
```

### 게시글 삭제하기 (DELETE)

**URL**
[BASE_URL]/api/post/delete/[게시글id]

**REQUEST BODY**

id : [게시글 id]

**RESPONSE**

```
{
    result : true(성공) / false(실패)
}
```



### 얼굴 인식 요청 보내기 (POST)

**URL**

[BASE_URL]/api/image/

**REQUEST BODY**

```json
// formData
{
    image : imageFile 
}
```

**RESPONSE**

```json
{
  rois: [
    { x: x, y: y, width: width, height: heigth },
  ]
}
```

