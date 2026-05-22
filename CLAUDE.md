# CLAUDE.md - Rinex UI 组件库项目指南

## 项目概览

Rinex UI 是一个基于 React + TypeScript + TailwindCSS 构建的现代化组件库，采用 Monorepo 架构管理。

### 技术栈

- **框架**: React 18 + TypeScript
- **样式**: TailwindCSS + class-variance-authority
- **构建工具**: tsup
- **包管理器**: pnpm
- **开发工具**: Vite
- **代码质量**: ESLint + Prettier + Husky + Commitlint
- **提交规范**: Commitizen + cz-git

## 项目结构

```
rinex-ui/
├── components/           # 组件库核心代码
│   ├── src/
│   │   ├── _utils/      # 工具函数
│   │   ├── other/       # 其他组件
│   └── package.json
├── demo/                # 演示应用
├── docs/                # 文档站点
├── .husky/             # Git hooks配置
├── .cspell/            # 拼写检查配置
└── package.json        # 根包配置
```

## 开发规范

### 1. 代码风格

- **缩进**: 使用 Tab 缩进
- **引号**: 统一使用单引号 `'`
- **分号**: 语句末尾必须加分号
- **行宽**: 最大 100 字符
- **组件命名**: PascalCase (如 `Button`, `InputGroup`)
- **文件命名**: 小写 + 连字符 (如 `button.tsx`, `input-group.tsx`)

### 2. 组件开发规范

#### 组件结构

```tsx
import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { componentVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';

// 类型定义
export interface ComponentProps extends PropsWithChildren, VariantProps<typeof componentVariants> {
	className?: string;
	// 其他props
}

// 组件实现
const Component = memo(({ children, className, ...props }: ComponentProps) => {
	return (
		<div data-slot="component" className={cn(componentVariants({ className }))} {...props}>
			{children}
		</div>
	);
});

Component.displayName = 'Component';
export { Component };
```

#### 样式规范

- 使用 `class-variance-authority` 管理组件变体
- 通过 `cn()` 工具函数合并类名
- 遵循 TailwindCSS 的实用类优先原则
- 组件样式必须支持主题配置

#### Props 设计原则

- 扩展原生 HTML 元素属性
- 使用 TypeScript 接口明确定义类型
- 提供合理的默认值
- 支持 `className` 属性用于自定义样式

### 3. Git 提交规范

使用 emoji 前缀的约定式提交格式：

```
feat: ✨ 新增功能
fix: 🐛 修复 bug
docs: 📝 文档变更
style: 💄 代码格式
refactor: ♻️ 代码重构
perf: ⚡️ 性能优化
test: ✅ 测试用例
build: 📦 构建流程、外部依赖变更
chore: 🔨 构建过程、辅助工具变更
revert: ⏪ 回滚到上一个提交
```

### 依赖要求

- React 18+
- TailwindCSS 3+
- TypeScript 4+

## 最佳实践

### 1. 性能优化

- 使用 `memo()` 包装组件避免不必要的重渲染
- 合理使用 `useMemo` 和 `useCallback`
- 避免在 render 中进行复杂计算

### 2. 可访问性

- 为交互元素添加适当的 ARIA 属性
- 确保键盘导航支持
- 提供清晰的焦点状态

### 3. TypeScript 使用

- 充分利用类型系统提供良好的开发体验
- 避免使用 `any` 类型
- 为组件 props 提供详细的类型定义

## 常见问题

### Q: 如何添加新的组件变体？

A: 在组件的 `variants.ts` 文件中使用 `cva()` 函数定义新的变体，然后在组件中通过 props 控制。

### Q: 如何处理组件间的依赖关系？

A: 通过 `config-provider` 组件提供全局配置，子组件使用 `useConfigContext()` hook 获取配置。

### Q: 如何确保样式不会与其他组件库冲突？

A: 使用 `data-slot` 属性作为样式隔离的命名空间，避免全局类名冲突。

## 参考资料

- [React 官方文档](https://react.dev/)
- [TailwindCSS 文档](https://tailwindcss.com/)
- [class-variance-authority 文档](https://cva.style/)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)
