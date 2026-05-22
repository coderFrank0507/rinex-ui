# Rinex UI 开发快速参考指南

## 🚀 快速开始

### 开发环境

```bash
# 安装依赖
pnpm install

# 启动开发
pnpm dev:ui      # 组件库编译
pnpm dev:docs    # 文档站点
pnpm dev:demo    # 演示应用

# 代码检查
pnpm lint        # ESLint 检查
pnpm spell       # 拼写检查
```

## 📝 组件开发速查

### 基本组件模板

```tsx
import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { componentVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';

export interface ComponentProps
	extends PropsWithChildren, VariantProps<typeof componentVariants>, React.ComponentProps<'div'> {
	className?: string;
}

const Component = memo(({ className, ...props }: ComponentProps) => {
	return <div data-slot="component" className={cn(componentVariants({ className }))} {...props} />;
});

Component.displayName = 'Component';
export { Component };
```

### 样式变体模板

```ts
import { cva } from 'class-variance-authority';

export const componentVariants = cva('base-styles', {
	variants: {
		variant: {
			default: 'default-variant',
			primary: 'primary-variant'
		},
		size: {
			sm: 'small-size',
			default: 'medium-size',
			lg: 'large-size'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});
```

## 🎨 代码风格速查

### 格式化规则

- ✅ **缩进**: 使用 Tab（不是空格）
- ✅ **引号**: 字符串用单引号 `'`
- ✅ **分号**: 语句末尾必须加分号
- ✅ **行宽**: 最大 100 字符
- ✅ **命名**: 组件 PascalCase，文件 kebab-case

### 类型定义

```ts
// ✅ 正确
export interface ComponentProps extends PropsWithChildren {
	className?: string;
}

// ❌ 避免
type Props = { className?: string };
```

## 📝 Git 提交速查

### 提交类型

| 类型       | Emoji | 用途     |
| ---------- | ----- | -------- |
| `feat`     | ✨    | 新增功能 |
| `fix`      | 🐛    | 修复 bug |
| `docs`     | 📝    | 文档变更 |
| `style`    | 💄    | 代码格式 |
| `refactor` | ♻️    | 代码重构 |
| `perf`     | ⚡️    | 性能优化 |
| `test`     | ✅    | 测试用例 |
| `build`    | 📦    | 构建变更 |
| `chore`    | 🔨    | 辅助工具 |
| `revert`   | ⏪    | 回滚提交 |

### 提交示例

```bash
# 新功能
feat: ✨ 新增 Button 组件

# 修复问题
fix(button): 🐛 修复按钮点击状态异常

# 重构代码
refactor(components): ♻️ 重构组件内部实现
```

## 🔧 工具函数速查

### 常用工具函数

```ts
// 类名合并
import { cn } from '../_utils';
const className = cn('base', 'conditional', className);

// 类型检查
import { isObject, isFunction, isString } from '../_utils';

// 性能工具
import { useUID, hasChanged } from '../_utils';
```

### 自定义 Hook 模板

```ts
import { useState, useEffect } from 'react';

export function useCustomHook(dependency: any) {
	const [state, setState] = useState(null);

	useEffect(() => {
		// 副作用逻辑
	}, [dependency]);

	return state;
}
```

## 🎯 性能优化要点

### React 优化

- ✅ 使用 `React.memo()` 包装组件
- ✅ 使用 `useMemo()` 缓存计算结果
- ✅ 使用 `useCallback()` 缓存函数
- ✅ 设置正确的 `displayName`

### 代码优化

- ✅ 避免在 render 中创建新对象
- ✅ 使用提前返回减少嵌套
- ✅ 合理使用 key 属性
- ✅ 及时清理副作用

## ♿ 可访问性要点

### ARIA 属性

```tsx
// ✅ 正确
<button
  aria-label="关闭对话框"
  aria-expanded={isOpen}
  role="button"
/>

// ✅ 正确
<input
  aria-describedby="error-message"
  aria-invalid={hasError}
/>
```

### 键盘导航

- ✅ 支持 Tab 键导航
- ✅ 提供清晰的焦点状态
- ✅ 支持 Enter 和 Space 键操作

## 🧪 测试要点

### 测试覆盖

- ✅ 组件渲染测试
- ✅ Props 变化测试
- ✅ 用户交互测试
- ✅ 可访问性测试

### 测试文件位置

```
component-name/
├── __tests__/
│   └── component.test.tsx
└── component.tsx
```

## 📚 常用导入

### React 导入

```ts
import React, { memo, useState, useEffect, useMemo, useCallback } from 'react';
```

### 项目工具导入

```ts
import { cn } from '../_utils';
import { useConfigContext } from '../_utils/hooks';
import type { VariantProps } from 'class-variance-authority';
```

### 类型导入

```ts
import type { PropsWithChildren } from 'react';
import type { ComponentProps } from 'react';
```

## 🚨 常见错误避免

### 类型错误

```ts
// ❌ 避免 any 类型
function bad(value: any) {}

// ✅ 使用具体类型
function good(value: string) {}

// ✅ 或使用泛型
function better<T>(value: T): T {
	return value;
}
```

### 性能错误

```tsx
// ❌ 避免在 render 中创建对象
const Component = () => {
	const styles = { color: 'red' }; // 每次 render 都创建新对象
	return <div style={styles} />;
};

// ✅ 使用 useMemo 缓存
const Component = () => {
	const styles = useMemo(() => ({ color: 'red' }), []);
	return <div style={styles} />;
};
```

### 内存泄漏

```ts
// ❌ 避免不清理副作用
useEffect(() => {
	setInterval(() => {}, 1000);
}, []);

// ✅ 清理副作用
useEffect(() => {
	const timer = setInterval(() => {}, 1000);
	return () => clearInterval(timer);
}, []);
```

## 📖 参考资源

### 官方文档

- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [TailwindCSS 文档](https://tailwindcss.com/)
- [class-variance-authority](https://cva.style/)

### 项目文档

- `CLAUDE.md` - 项目完整规范
- `.claude/rules/` - 详细规则文件
- `README.md` - 项目说明

## 🔍 快速定位

### 查找文件

- 组件实现: `components/src/[组件名]/component.tsx`
- 样式变体: `components/src/[组件名]/variants.ts`
- 组件导出: `components/src/[组件名]/index.ts`
- 工具函数: `components/src/_utils/`

### 配置查找

- 包配置: `package.json`
- 构建配置: `tsup.config.ts`
- TypeScript 配置: `tsconfig.json`
- ESLint 配置: `eslint.config.ts`
- Prettier 配置: `.prettierrc`

## 💡 最佳实践总结

### 开发流程

1. **计划** → 分析需求，设计 API
2. **实现** → 遵循规范，编写代码
3. **测试** → 编写测试，验证功能
4. **优化** → 性能优化，代码审查
5. **文档** → 更新文档，说明用法

### 质量保证

- ✅ 代码清晰易读
- ✅ 类型安全完整
- ✅ 性能优化到位
- ✅ 可访问性支持
- ✅ 文档完整准确

### 团队协作

- ✅ 遵循统一规范
- ✅ 保持代码一致
- ✅ 及时沟通交流
- ✅ 互相审查代码
