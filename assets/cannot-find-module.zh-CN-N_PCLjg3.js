import{j as n}from"./index-3Vf0_yvU.js";const d="/pelement-react/assets/cannot-find-module-001-IO4IuqQz.jpg",s="/pelement-react/assets/cannot-find-module-002-GS1tM54Y.jpg";function o(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"build 构建打包时报错： Cannot find module '../../../packages/Button/index.zh-CN.mdx' or its corresponding type declarations."}),`
`,n.jsx(e.p,{children:"引入mdx，构建生产包的时候，报错如下"}),`
`,n.jsx("img",{src:d,alt:"cannot-find-module-001"}),`
`,n.jsx(e.p,{children:"解决方法："}),`
`,n.jsx(e.p,{children:"在src/vite-env.d.ts文件中添加"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`declare module '*.mdx' {\r
  const mdx: string;\r
  export default mdx;\r
}
`})}),`
`,n.jsx("img",{src:s,alt:"cannot-find-module-002"})]})}function r(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{r as default};
