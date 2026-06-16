# cursor-demo

사용자 배열에서 이메일을 추출·검증·중복 제거하는 JavaScript 유틸리티입니다.

## 사용법

```bash
npm test
```

```js
import { extractEmails, getValidEmails, uniqueValidEmails, isValidEmail } from './src/email.js';

const users = [
  { email: 'a@b.com' },
  { email: 'not-an-email' },
  { email: 'a@b.com' },
];

uniqueValidEmails(users); // ['a@b.com']
```

## 릴리스 노트

### v1.0.0

사용자 배열에서 이메일을 추출·검증·중복 제거하는 유틸리티 모듈과 RFC 5322 기반 검증기를 포함한 첫 정식 릴리스입니다.

#### ✨ 기능

- `extractEmails` — 사용자 객체 배열에서 `email` 필드 추출
- `getValidEmails` — 유효한 이메일만 필터링
- `uniqueValidEmails` — 유효 이메일 중복 제거
- `isValidEmail` — RFC 5322 정규식 및 길이 제한(로컬 64자, 전체 254자) 기반 검증
- `node:test` 단위 테스트 5건 추가 (`npm test`)

#### 🐛 버그 수정

- (해당 없음)

#### 🧹 기타

- ES Module(`"type": "module"`)로 전환
- `docs/validator.md` 검증기 스펙 문서 추가
- `.cursor/commands/prep-pr` PR 준비 슬래시 커맨드 추가
- `.cursor/skills/release-notes` 릴리스 노트 작성 스킬 및 `collect_commits.sh` 추가
- `.cursor/rules/coding-style.mdc` 코딩 스타일 규칙 추가
- `src/index.js` 문자열 리터럴 오타 수정
