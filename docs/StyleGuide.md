# Style Guide

> 프로젝트의 기여를 위해 아래의 스타일 가이드를 참고해주세요.
>
> 이 프로젝트에서는 다음과 같은 컨벤션을 지키고 있습니다.

- [Coding Style](#coding-style)
- [Git Convention (Branch, Commit 규칙)](#git-convention)
- [PR, Issue Template](#pr-issue-template)

## Coding Style

### 변수명

- 변수명은 기본적으로 `camelCase`를 사용한다.
  - 단, 기존의 검색서버와 연동된 부분은 `snake_case` 를 사용한다.
- boolean 형을 갖는 변수는 앞에 `is`를 붙인다.
- css는 기본적으로 `kebab-case`를 사용한다.
- 타입 이름은 type은 `~Types`로 한다.
- 인터페이스 이름은 props type은 `~Props`로 한다.

  - API : 응답 `~Response`, `~Request`
  - **예시 코드**

    ```tsx
    //댓글 조회
    export interface CommentReadResponse extends BaseResponse {
      data?: PaginationResponse<CommentProps>;
    }
    ```

    ```tsx
    // base
    export interface BaseResponse {
      message?: string;
      status?: number;
      code?: string;
    }

    export interface PaginationResponse<T> {
      content: T[];
      numberOfElements: number; //content의 요소가 몇개인지
      offset: number; // 현재 페이지에서 시작하는 요소의 index 번호
      pageNumber: number; //페이지 넘버
      pageSize: number; //페이지 사이즈
      totalElements: number; // 전체 요소 수
      totalPage: number;
    }
    ```

- props로 받는 className string은 `styleClass`로 통일한다.
  - className 여러 개 사용하는 컴포넌트는 `컴포넌트 + style`로 통일한다.

### 함수명

- 함수명은 기본적으로 `camelCase`를 사용한다.
- 가능한 **동사 + 명사의 형태**를 사용한다.

## Git Convention

### Commit Message

#### commit prefix-convention

- 그 외, 내용에 따라 유동적으로 commit message를 사용한다.

| prefix      | 설명                                                            |
| ----------- | --------------------------------------------------------------- |
| ✨ feat     | 새로운 기능을 추가할 경우                                       |
| 🐛 fix      | 버그를 고친 경우                                                |
| 💄 design   | CSS 등 사용자 UI 디자인 변경                                    |
| 🚑 hotfix   | 급하게 치명적인 버그를 고쳐야 하는 경우                         |
| 🎨 style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우           |
| ♻️ refactor | 프로덕션 코드 리팩터링                                          |
| 💡 comment  | 필요한 주석 추가 및 변경                                        |
| 📝 docs     | 문서를 수정한 경우                                              |
| ✅ test     | 테스트 추가, 테스트 리팩터링 (프로덕션 코드 변경 X)             |
| 🔧 env      | 프로젝트 환경 설정                                              |
| 🤡 mock     | msw 관련                                                        |
| 🎉 init     | 프로젝트 첫 설정                                                |
| 🚚 rename   | 파일 혹은 폴더 명을 수정했거나 옮기는 작업만인 경우             |
| 🔥 remove   | 파일을 삭제하는 작업만 수행한 경우                              |
| 📦 chore    | 빌드 태스트 업데이트, 패키지 매니저 설정 (프로덕션 코드 변경 X) |
| 🍱 asset    | asset 관련 파일(favicon, font) 업데이트 작업만 수행했을 경우    |

### Branch strategy

- `develop` : 개발용 브랜치
- 기본적으로 commit prefix 에 따라 기능을 나누고 이에 따른 기능 branch를 만들어 사용한다.
  - 예시 : `feature/{issue-number}` : 기능 구현 branch, `fix/{issue-number}` : 버그 수정 branch
- 기능 브랜치를 `develop` 브랜치로 머지할 때는 `squash and merge` 를 사용한다.
- 개발이 완료되고, `develop` 브랜치를 `main` 브랜치로 머지할 때는 `rebase and merge` 를 사용한다.

## PR, Issue Template

- [PR Template](https://github.com/Memento-Makers/Emopic-FE/blob/develop/.github/pull_request_template.md)
- [Issue Template](https://github.com/Memento-Makers/Emopic-FE/tree/develop/.github/ISSUE_TEMPLATE)
