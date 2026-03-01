# Rinex UI

### 安装

```shell
npm add rinex-ui
```

>💡 **Tip**
>
>组件库由 React + TailwindCSS 构建，所以要求宿主应用已经安装了 React 和 TailwindCSS。并且组件内用到的css类名最终产生的css样式应与宿主应用的Tailwind产出保持一致，所以宿主应用需要通过 `tailwind.config.js` 对依赖包进行扫描，这样宿主应用会把自身和组件库的类名统一编译，实现css体积优化。

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... other content files,
    './node_modules/rinex-ui/**/*.{js,jsx,ts,tsx}',
  ],
}
```



---

### 开发环境调试组件

编译组件

```shell
pnpm dev:ui
```

文档站点

```shell
pnpm dev:docs
```

调试 demo

```shell
pnpm dev:demo
```

