# Scaffold2022

This scaffold is using for init FE project in ``, created by [`yeoman`](https://yeoman.io/)


#### Tech lib

- React@18
- Antd@4
- react-route@6
- ahooks [link](https://ahooks.js.org/)
- tinyStore [Link](https://github.com/liuxiaocong/tinyStore)
- useSWR (not confirm)


#### Style

- css module
- less

#### Code style

- Eslint
- husky (pending)

#### Test

- jest, focus on unit test and little snap test


#### Project structure

```shell
── src
    ├── pages
    │   ├── HomePage
    │   │   │   ├── components
    │   │   │   │  │      ├── Header
    │   │   │   │  │      │       ├── index.tsx
    │   │   │   │  │      │       ├── s.module.css
    │   │   │   │── index.tsx
    │   │   │   │── s.module.css
    │   ├── AboutPage
    │   │   │   ├── components
    │   │   │   │      ├── SearchForm
    │   │   │   │      │       ├── index.tsx
    │   │   │   │      │       ├── s.module.css
    │   │   │   ├── index.tsx
    │   │   │   ├── s.module.css
    ├── apis
    │   ├── server.ts
    │   ├── job.ts
    │   ├── workflow.ts
    ├── localstorages
    │   ├── server.ts
    │   ├── job.ts
    │   ├── workflow.ts
    ├── helpers
    │   ├── stringUtils.ts
    │   ├── tagKeyUtils.ts
    ├── types
    │   ├── server.ts
    │   ├── job.ts
    │   ├── workflow.ts
    ├── hooks
    │   ├── usePartners.ts
    │   ├── useCountries.ts
    ├── store
    │   ├── User.ts
    ├── lib
    │   ├── tinyStore
    │   │   ├── index.ts
    ├── components
    │   │   ├── CommonTable
    │   │   │       ├── index.tsx
    │   │   │       ├── s.module.css
    │   │   ├── PageContent
    │   │   │       ├── index.tsx
    │   │   │       ├── s.module.css
    |── index.tsx
```
