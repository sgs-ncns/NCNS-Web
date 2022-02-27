# NCNS Frontend

## ****📚****사용 기술 및 언어

### 환경

- React

### 언어

- Typescript

### 개발 도구

- VS Code

## 설치 방법

```tsx
npm install
```

## 실행 방법

```tsx
npm start
```

## 🥰목표

- 프론트엔드 개발자로써의 첫 프로젝트인만큼 **디자인 패턴**에 대해 고민해보고 **깔끔한 코드**를 짜도록 노력한다.
    - 인스타그램 개발에 가장 적합한 디자인 패턴은 무엇인가 생각해보기
    - 실제 디자인 패턴을 적용하고 주기적인 리팩토링을 통해 결국에는 깔끔한 코드를 생산한다.
- **전역 상태 관리**는 어디에 필요한 것인지 진지하게 고민해보고 완벽한 이해 후 적용하기
    - 전역 상태 관리 툴인 Redux에 대한 스터디
    - 전역 상태 관리가 필요한 상태 값들에 대한 고민하기
- 비동기 처리에 대한 스터디와 적용을 통해 실제로 어디에 필요한 지 확인하기
    - Promise 구조 완벽히 이해하기
    - async / await 함수를 통해 흐름을 제어하는 법 익히기

## 디렉토리 구조

```markdown
├─common
├─components
│  ├─atoms
│  │  ├─Count
│  │  ├─GoogleOAuth
│  │  └─ . . . 
│  ├─molecules
│  │  ├─ButtonIcon
│  │  ├─Comment
│  │  └─ . . .
│  ├─organisms
│  │  ├─Feed
│  │  ├─Login
│  │  └─ . . . 
│  └─templates
│      ├─Home
│      ├─Login
│      └─ . . .
├─hooks
├─lib
│  ├─auth
│  └─request
├─mocks
├─pages
│  ├─Login
│  ├─Profile
│  ├─Search
│  └─SignUp
├─reducers
├─router
├─static
│  └─imgs
└─utils
```

## 실행 화면
- 일반 피드
![image](https://user-images.githubusercontent.com/68458245/155869802-68d636e6-d177-4ef0-8ec9-9016a3ed7e8a.png)
- 깐부 피드
![image](https://user-images.githubusercontent.com/68458245/155869808-436ed160-66b8-476a-a994-cf6bbbf91c68.png)
- 프로필 페이지
![image](https://user-images.githubusercontent.com/68458245/155869818-a58e9bc6-4fa2-4287-b92f-cefbd9279eca.png)
- 해시태그 검색
![image](https://user-images.githubusercontent.com/68458245/155869852-e1987790-f89d-4ed1-833f-a5a912bb1505.png)

- 사진 업로드 모달
![image](https://user-images.githubusercontent.com/68458245/155869857-2188b612-4709-4d18-949f-c15d40bed934.png)
- 팔로잉/팔로워 모달
![image](https://user-images.githubusercontent.com/68458245/155869864-98c43722-715f-4137-aef2-dce130d9f8e7.png)
- 피드 모달
![image](https://user-images.githubusercontent.com/68458245/155869868-3e3439cc-22dc-4521-8e8c-064392977f0b.png)

## 달성한 것
- 아토믹 디자인 패턴에 대한 이해를 진행함.
- 비동기 순차 처리를 성공적으로 진행함.
- Redux와 Context api에 대한 이해를 진행함.
- typescript에 대한 중요성과 사용법을 몸소 익힘.
- custom hook을 만들어 봄.

## 아쉬운 점
- 배울 것이 너무 많아 기록을 병행하지 못함.
- 설계를 꼼꼼히 하지 않아 리팩토링에 대한 시간이 많이 투자됨.

## TODO
- UI에 있는 hook들을 custom hook으로 분리하여 완벽한 UI 컴포넌트를 만들기.
- 산발적으로 흩어져 있는 Redux를 필요한 것으로 합치기
    - ![image](https://user-images.githubusercontent.com/68458245/155870004-45ee9029-fee2-49ab-8fdb-b870da0af5ff.png)
- context api를 사용하여 props drilling 된 부분들 해결하기

## 느낀 점
- 세달 간 프론트엔드 개발자로써 첫 프로젝트를 진행하며, 정말 성장에 간절한만큼 많은 것을 얻어가려고 노력했던 것 같습니다. 이에 따라 많은 부분들을 얻었고 힘들었지만 보람찬 시간을 보내게 되었습니다. 
실무에 투입을 위한 기술은 실무에 투입 되고 배워도 늦지 않다고 생각하였고, 투입 되기 위한 기초적인 준비가 진행 된 프로젝트를 진행하고 싶었습니다.
이 부분에 있어 프론트엔드란 '데이터를 백엔드로부터 받아 사용자에게 보여준다'라는 생각으로 진행하였고, 제가 얻고자 했던 부분에 있어서는 확실히 얻을 수 있었던 프로젝트였습니다.
공부가 부족했던 부분들을 추후 메꿔서 프로젝트 리팩토링을 진행할 예정이며, STOVE DEV CAMP 2기!! 성장할 기회를 주셔서 감사합니다!!
