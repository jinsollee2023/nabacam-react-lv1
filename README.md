# TodoList
리액트를 이용한 투두리스트

</br>

## 프로젝트 소개
<img width="903" alt="스크린샷 2023-06-16 오전 9 17 21" src="https://github.com/jinsollee2023/react-todo/assets/130551771/673f194b-eea0-427f-9b70-65fce7455c02">
</br></br>

- 새로운 투두리스트를 추가하고 완료,취소 상태를 변경하고 삭제가 가능함
- 로컬스토리지를 사용하여 새로고침을 해도 리스트가 없어지지 않음
  
</br>

## 컴포넌트 구성
총 4개의 컴포넌트로 구성됨
- App.js : 최상위 부모 컴포넌트로 todos의 useState를 갖고 있으며 전체적인 화면을 구성함 
- AddTodo.jsx : 인풋창을 통해 받을 title, content의 useState를 갖고 있으며 투두리스트를 추가함
- PaintWorkingTodo.jsx : Todos를 Working 섹션에 그려주는 역할을 함
- PaintDoneTodo.jsx : Working 상태의 todos 중 완료된 todos를 Done 섹션에 그려주는 역할을 함
# nabacam-typescript-lv1
