
# 🤗코드 가이드

안녕하십니까 SGS DEV CAMP NCNS팀의 프론트 개발자 성종현 인턴입니다!
전체적으로 파일을 보시기에 힘든 부분을 덜어드리기 위해서
제가 **패턴을 적용한 원칙**과 **생각을 많이 하여 구현한 부분**에 대해서 알려드리겠습니다.


# 🙌시작하기에 앞서..

- 프론트엔드 공부를 시작하고 진행한 첫 프로젝트였기에 디자인 패턴에 대한 정보가 부족했습니다. STOVE에서는 Atomic Design Pattern을 사용하는 것을 전해 들었고, 익숙해지기 위해 채택하였습니다.
- 캠프장님께 프론트엔드 개발자는 TypeScript에 익숙해져야 한다는 강의를 듣고 TypeScript 언어에 대해 도전해보게 되었습니다. 외부 라이브러리 또는 React Hook들과 같은 에러가 발생했던 곳은 반환 타입에 대한 정보가 확실하지 않아 생산성을 위해 우선 any 처리를 하고 하나씩 구체화된 타입을 작성 중입니다.
- 전역 상태 관리 라이브러리는 Redux를 사용하였습니다. 아토믹 디자인 패턴을 적용하고 props drilling이 곳곳에서 일어나고 있음을 인지하였습니다. 이 부분에 대해서 고민을 상당히 많이 하였습니다. 하지만 모든 데이터를 관리하기엔 무리였기 때문에 상태 값 관리가 힘든 부분들에 한해서 적용하였습니다.


## 🗂패턴 적용 원칙

### Atom

- html 태그 단위
- 다양한 state를 통해 어떠한 문맥에서도 접근이 가능하도록 설계하였습니다.

### Molecule

- 원자 + 원자 또는 원자 + 재사용 되지 않는 요소로 구성 되어 있습니다.
- 추후 재사용 된다면, 따로 분리 시키기 편하도록 구현하였습니다.

### Organism

- 실질적으로 화면에 바로 표시될 수 있는 형태로 Atom과 Molecule의 조합입니다.

### Templates

- 템플릿은 단지 화면의 배치 형식만 잡을 수 있게 구현하였습니다.

### Page

- 실질적 통신이 일어나는 곳이며 통신값을 Organism을 호출하여 파싱하고, 파싱된 값을 Templates에게 props로써 전달할 예정입니다.

## 🤔이 부분 고민 많이 했어요!

### 모달 구현 부분입니다.

- 모달 및 드롭다운 컴포넌트 위치

[NCNS-Web/index.tsx at master · sgs-ncns/NCNS-Web](https://github.com/sgs-ncns/NCNS-Web/blob/master/src/router/index.tsx)

- 모달 컴포넌트

[NCNS-Web/src/components/organisms/Modal at master · sgs-ncns/NCNS-Web](https://github.com/sgs-ncns/NCNS-Web/tree/master/src/components/organisms/Modal)

- 모달 관리 reducer

[NCNS-Web/modalReducer.ts at master · sgs-ncns/NCNS-Web](https://github.com/sgs-ncns/NCNS-Web/blob/master/src/reducers/modalReducer.ts)

- 드롭다운 컴포넌트

[NCNS-Web/index.tsx at master · sgs-ncns/NCNS-Web](https://github.com/sgs-ncns/NCNS-Web/blob/master/src/components/molecules/Dropdown/index.tsx)

- 드롭다운 관리 reducer

[NCNS-Web/dropReducer.ts at master · sgs-ncns/NCNS-Web](https://github.com/sgs-ncns/NCNS-Web/blob/master/src/reducers/dropReducer.ts)

모달 구현과 드롭다운 구현에 있어, 컴포넌트들간의 상태값 관리가 버거워 Redux로 리모콘 형태로 관리하는 것을 생각해보았습니다.

이 부분에서 드롭다운 파트는 조건부 렌더링을 시켜보았으며, 모달에서는 전부 따로 구현을 해보았습니다.

모달은 통신이 일어나기 때문에 차장님께 질문을 통해 1차적으로 결합도를 낮추는 방법으로 구현을 하였지만, 단일 모달로써의 관리 기능 부분(reducer에 isOpen을 하나만 두는 것)은 아직 배움이 부족한 것 같습니다.

드롭다운은 기본적으로 통신이 일어나지 않는다는 전제하에 조건부 렌더링을 통해 구현하였고, 통신이 필요한 부분이 생겨 조건부 렌더링은 효율적이지 못하다는 결론이 나게 되어서 리팩토링 예정입니다.

이렇게 완벽하지는 않지만 생각을 많이 해보고 실제 적용해보며 문제점이 무엇인지 파악하고 발전하는 형태의 코드임을 보여드리고 싶습니다!


### 페이지 접근 제한 구현 부분입니다.

- 인스타그램은 기본적으로 로그인이 되어 있지 않으면 모든 컨텐츠를 확인할 수 없는 구조입니다.
- 라우터 위치

[NCNS-Web/src/router at master · sgs-ncns/NCNS-Web](https://github.com/sgs-ncns/NCNS-Web/tree/master/src/router)

우선적으로 확인하시기 편하게 router 파트에 필요한 파일들을 모아놨습니다. router를 제외한 파일은 전부 util 폴더로 옮겨질 예정입니다.

접근 제한을 편하게 페이지마다 redux의 user가 존재하는 지를 확인하여 처리할 수 있었습니다.

하지만 정석적으로 구현을 하고 싶었고 여러 검색 과정을 통해 context api로 처리하는 것을 알게 되었습니다.

context api로 처리하는 도중 context api와 redux의 차이점이 궁금하게 되었고, 아래 링크를 통해 명확하게 이해를 하게 되었습니다.

[https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b8](https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b8)

하지만 react-router-dom이 v6로 업데이트 됨에 따라 레퍼런스가 존재하지 않게 되었고, 추가적으로 v6에 대한 공부를 진행하여
**제가 다른 사람들에게 레퍼런스가 될 수 있는 코드를 작성하게 되었다고 생각합니다.**

진행 흐름은 로그인 -> 서버 제공 정보를 토대로 유저 정보를 redux에 저장 -> context api

결론적으로, 제 페이지 접근 제한 구조는 Redux + Context api 구조이며 Redux는 상태값 저장을 Context api는 종속성 주입을 시키는 형태로 구현하였습니다.

# 🤗코드 리뷰

안녕하십니까 SGS DEV CAMP NCNS팀의 프론트 개발자 성종현 인턴, iOS 개발자 한상혁 인턴입니다!

# 🙌시작하기에 앞서..

- 서버의 기능이 많아 백엔드 팀원들의 수고로움을 덜기 위해서 프론트엔드 개발자끼리 고심해서 만든 서버입니다!

### 사용 프레임워크

- 성종현 인턴의 타입스크립트 사용 가능함, 생산성과 빠른 구현을 위해 **Express 프레임워크**를 채택하였습니다.

### 디자인 패턴

- 백엔드 팀원들이 보다 쉽게 이해할 수 있도록 Spring과 마찬가지 패턴인 **MVC 패턴**을 사용하였습니다.

### 사용 DB

- DB 설계가 능숙하지 못하여 설계에 시간이 많이 투자되고 있어서 관계 설정이 필요 없고 빠른 읽기와 쓰기가 가능한 NoSQL 중 **MongoDB**를 채택하게 되었습니다.

### 사용 푸시 라이브러리

- FCM
- AMQP (MQTT)

## 🗂패턴 적용 원칙

### Model

- Mongo DB의 document의 형태를 정의합니다.

### Controller(routes)

- 엔드 포인트로써 담겨온 정보를 서비스 로직 함수를 호출하여 수행합니다.

### Service

- 컨트롤러에 들어온 정보들을 받아 DB값을 읽고 쓰는 로직을 수행합니다.

### Utils

- 저희가 구현한 배치 처리 로직이 담겨 있습니다.

## 🤔이 부분 고민 많이 했어요!

### 1분간 모아서 알림을 전송하는 부분입니다.

- 배치 처리가 필요한 이유
    - 저희 프로젝트에 인스타그램의 팔로우 기능 뿐 아니라 좀 더 깊은 관계를 맺을 수 있는 깐부(구독) 기능을 추가하였습니다.
    - 이에 따라 깐부 알림은 정말 빠르게 받아야 하지만, 일반 알림까지 빠르게 받게 된다면 사용자는 수많은 푸시를 받게 될 것이라고 생각하였습니다.
    - 또한, 인스타그램을 사용하며 게시물 업로드 시 좋아요와 댓글에 대한 푸시 알림이 계속 뜨게 되는 불편함을 방지하고자 배치 처리를 추가하게 되었습니다.
- 파일 위치
    - [https://github.com/sgs-ncns/NCNS-notification/blob/master/src/services/schedular.ts](https://github.com/sgs-ncns/NCNS-notification/blob/master/src/services/schedular.ts)

배치 처리를 위해 처음엔 캐시를 생각하였습니다.

캠프장님 강의에서 IO 연산보다 CPU 연산이 빠르다는 강의를 듣게 되었고, IO 연산인 캐시 사용보다 CPU를 사용할 수 있는 로직 처리에 대해서 고민해보았습니다.

자바스크립트에서 지원하는 컬렉션 Map을 사용하여 좋아요나 댓글이 눌린 id에 대한 키 값이 현재 Map상에 존재하면 Map에서 해당하는 id 값을 찾아 숫자를 1 늘려줍니다. 

존재하지 않으면 새로 생성을 하고, setTimeout 함수를 통해 1분 뒤에 내부에 작성된 FCM에 1분간 모아진 좋아요 개수와 댓글 개수를 보내는 콜백 함수를 호출합니다. 

### MQTT 프로토콜을 사용한 깐부 알림입니다.

- 파일 위치
    - [https://github.com/sgs-ncns/NCNS-notification/blob/master/src/services/MQPubService.ts](https://github.com/sgs-ncns/NCNS-notification/blob/master/src/services/MQPubService.ts)

저희는 깐부 푸시에 대한 목표 설정이 “누구보다 빠른 알림”이었습니다.

FCM과 Kafka 등과 같이 여러 가지 메시징 라이브러리에 대해 고민하였으며, 여러 방면으로 비교를 해보다가 IoT 분야에서 많이 사용되고 있는 MQTT라는 프로토콜에 대해 알게 되었습니다.

MQTT는 FCM이 사용하는 HTTP 프로토콜보다 신뢰성이 높으며 가볍고 대용량 전송에 특화되어 있는 것으로 조사되었습니다.

[https://stackshare.io/stackups/firebase-cloud-messaging-vs-mqtt](https://stackshare.io/stackups/firebase-cloud-messaging-vs-mqtt)

오픈 소스로 잘 정리되어 있음을 확인한 저희는 가시성이 좋은 Rabbit MQ에서 지원하는 AMQP 라이브러리를 이용하여 사용자에게 큐를 할당하여 메시징 처리를 하는 방법을 선택하게 되었습니다.

# 긴 글 확인 해주셔서 감사드립니다.

# 이상 성종현 인턴. 고생하셨습니다!👏👏👏
