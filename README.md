# Base Vue3 simple structure

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

---

## Project Rules

### Commitlint

#### 當您在 git commit 時，內容格式應如下，否則將會被阻擋

```
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

#### 示例

```
feat(blog): add comment section
```

```
fix(server): send cors headers
```

```
chore: run tests on travis ci
```

#### 分類

```
- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test
```
