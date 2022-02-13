
# 🤗코드 리뷰

안녕하십니까 SGS DEV CAMP NCNS팀의 프론트 개발자 성종현 인턴입니다!

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

- 실질적 통신이 일어나는 곳이며 통신값을 Organism을 호출하여 파싱하고, 파싱된 값을 Templates에게 props로써 전달합니다.

## 🤔이 부분 고민 많이 했어요!

---

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

### 페이지 접근 제한 구현 부분입니다.

- 인스타그램은 기본적으로 로그인이 되어 있지 않으면 모든 컨텐츠를 확인할 수 없는 구조입니다.
- 라우터 위치

[NCNS-Web/src/router at master · sgs-ncns/NCNS-Web](https://github.com/sgs-ncns/NCNS-Web/tree/master/src/router)

우선적으로 확인하시기 편하게 router 파트에 필요한 파일들을 모아놨습니다. router를 제외한 파일은 전부 util 폴더로 옮겨질 예정입니다.

접근 제한을 편하게 페이지마다 redux의 user가 존재하는 지를 확인하여 처리할 수 있었습니다.

하지만 정석적으로 구현을 하고 싶었고 여러 검색 과정을 통해 context api로 처리하는 것을 알게 되었습니다.

context api로 처리하는 도중 context api와 redux의 차이점이 궁금하게 되었고, 아래 링크를 통해 명확하게 이해를 하게 되었습니다.

[https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b8](https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b8)

하지만 react-router-dom이 v6로 업데이트 됨에 따라 레퍼런스가 존재하지 않게 되었고, 추가적으로 v6에 대한 공부를 진행하여 **제가 다른 사람들에게 레퍼런스가 될 수 있는 코드를 작성하게 되었다고 생각합니다.**

결론적으로, 제 페이지 접근 제한 구조는 Redux + Context api 구조이며 Redux는 상태값 저장을 Context api는 종속성 주입을 시키는 형태로 구현하였습니다.
