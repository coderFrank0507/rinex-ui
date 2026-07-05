# Rinex UI 组件开发规则

## 组件结构要求

### 文件组织

每个组件必须按照以下结构组织：

```
component-name/
├── index.ts          # 组件导出
├── component.tsx     # 组件实现
├── variants.ts       # 样式变体定义
└── README.md         # 组件文档（可选）
```

### 必需文件说明

当一个组件是由多个子组件组成时，每个组件单独创建一个文件来实现，文件名与组件名相同。

1. **index.ts** - 组件入口文件

当组件只有一个tsx文件时，直接导出组件和类型。

```ts
export { Component, type ComponentProps } from './component';
```

当组件由多个tsx文件组成时，每个文件对应一个子组件。

```ts
import { Component as Root, type ComponentProps } from './collapse';
import { ComponentA, type ComponentAProps } from './item';
import { ComponentB, type ComponentBProps } from './trigger';

const Component = Root as typeof Root & {
	A: typeof ComponentA;
	B: typeof ComponentB;
};

Component.A = ComponentA;
Component.B = ComponentB;

export { Component, type ComponentProps, type ComponentAProps, type ComponentBProps };
```

2. **component.tsx** - 组件实现

   ```tsx
   import React, { memo, type PropsWithChildren } from 'react';
   import { cn } from '../_utils';
   import { componentVariants } from './variants';
   import type { VariantProps } from 'class-variance-authority';
   import { useConfigContext } from '../_utils/hooks';

   export interface ComponentProps
   	extends PropsWithChildren, VariantProps<typeof componentVariants> {
   	className?: string;
   }

   const Component = memo(({ className, ...props }: ComponentProps) => {
   	const context = useConfigContext();

   	return (
   		<div data-slot="component" className={cn(componentVariants({ className }))} {...props} />
   	);
   });

   Component.displayName = 'Component';
   export { Component };
   ```

3. **variants.ts** - 样式变体

   ```ts
   import { cva } from 'class-variance-authority';

   export const componentVariants = cva(
   	// 基础样式
   	'base-styles',
   	{
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
   	}
   );
   ```

## TypeScript 规范

### Props 类型定义

1. 必须使用 `interface` 定义组件 Props
2. 涉及到子元素的 props时，通过 `interface` 继承 `PropsWithChildren` 支持子元素
3. 扩展 `VariantProps` 支持样式变体
4. 扩展原生 HTML 元素属性（如适用）
5. 每个属性用 /\*\* \*/ 注释说明其作用、类型、默认值

```ts
export interface ComponentProps
	extends PropsWithChildren, VariantProps<typeof componentVariants>, React.ComponentProps<'div'> {
	className?: string;
	// 自定义 props
}
```

### 类型导出

- 必须导出组件 Props 类型
- 使用具名导出而非默认导出
- 提供完整的类型文档注释

## React 最佳实践

### 性能优化

1. **必须使用 `memo()`**

   ```tsx
   const Component = memo((props: ComponentProps) => {
   	// 组件逻辑
   });
   ```

2. **设置 `displayName`**

   ```tsx
   Component.displayName = 'Component';
   ```

3. **避免不必要的重新渲染**
   - 合理使用 `useMemo` 缓存计算结果
   - 合理使用 `useCallback` 缓存函数引用
   - 避免在 render 中创建新对象

### 配置上下文

使用 `useConfigContext()` 获取全局配置：

```tsx
const Component = memo(({ size, ...props }: ComponentProps) => {
	const context = useConfigContext();

	return (
		<div
			className={componentVariants({
				size: size || context.size
			})}
		/>
	);
});
```

## 样式规范

### TailwindCSS 使用

1. **实用类优先** - 优先使用 TailwindCSS 实用类而非自定义 CSS
2. **响应式设计** - 使用响应式前缀（sm:, md:, lg:）
3. **状态管理** - 使用状态变体（hover:, focus:, disabled:）

### 类名合并

必须使用 `cn()` 工具函数：

```tsx
import { cn } from '../_utils';

const Component = ({ className, ...props }) => {
	return <div className={cn('base-classes', 'conditional-classes', className)} />;
};
```

### 命名空间隔离

使用 `data-slot` 属性避免样式冲突：

```tsx
<div data-slot="component" data-variant={variant} data-size={size} className={className} />
```

## 可访问性要求

### ARIA 属性

- 为交互元素添加适当的 ARIA 属性
- 确保屏幕阅读器支持
- 提供有意义的标签

```tsx
<button aria-label="关闭对话框" aria-expanded={isOpen} role="button" />
```

### 键盘导航

- 确保所有交互元素可通过键盘访问
- 提供清晰的焦点状态
- 支持 Tab 键导航

## 错误处理

### 组件验证

使用 `hasTargetChild` 验证子组件：

```tsx
import { hasTargetChild } from '../_utils';

const ParentComponent = ({ children }) => {
	useEffect(() => {
		hasTargetChild(children, 'ParentComponent', 'ChildComponent');
	}, [children]);

	return <div>{children}</div>;
};
```

### 错误边界

- 考虑添加错误边界处理
- 提供优雅的降级方案
- 记录错误信息用于调试

## 创建测试demo

### 测试文件位置

```
rinex-ui/
├── demo/
│   ├── src/
│   │   ├── test/
│   │   │   ├── component-name.tsx
```
