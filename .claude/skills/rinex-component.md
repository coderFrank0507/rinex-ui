# Rinex 组件生成技能

## 功能描述

该技能用于根据用户需求自动生成符合 Rinex UI 设计规范和代码标准的 React 组件。技能将创建完整的组件文件结构，包括组件实现、样式变体、类型定义和导出配置。

## 触发条件

当用户表达以下意图时触发此技能：

- "创建一个...组件"
- "帮我生成一个...组件"
- "需要实现...功能组件"
- "添加一个新的...组件"
- 描述组件功能和需求

## 输入参数

技能将从用户输入中提取以下参数：

- **componentName**: 组件名称（将自动转换为 PascalCase）
- **elementType**: 基础 HTML 元素类型（如 'div', 'button', 'input' 等）
- **description**: 组件功能描述
- **variants**: 需要的样式变体（如 'primary', 'secondary', 'outline' 等）
- **sizes**: 需要的尺寸选项（如 'sm', 'md', 'lg' 等）
- **props**: 自定义属性需求
- **hasChildren**: 是否支持子元素
- **isInteractive**: 是否为交互组件

## 实现逻辑

### 1. 需求解析阶段

```typescript
// 解析用户输入，提取组件需求
function parseComponentRequirements(userInput: string) {
	// 提取组件名称
	const componentName = extractComponentName(userInput);

	// 确定基础元素类型
	const elementType = determineElementType(userInput);

	// 分析功能需求
	const features = analyzeFeatures(userInput);

	return {
		componentName,
		elementType,
		features,
		variants: extractVariants(userInput),
		sizes: extractSizes(userInput),
		props: extractProps(userInput)
	};
}
```

### 2. 文件生成阶段

```typescript
// 生成完整的组件文件结构
function generateComponentFiles(requirements) {
	const files = {
		// 组件主文件
		[`${requirements.componentName}/index.ts`]: generateIndexFile(requirements),

		// 组件实现文件
		[`${requirements.componentName}/${requirements.componentName}.tsx`]:
			generateComponentFile(requirements),

		// 样式变体文件
		[`${requirements.componentName}/variants.ts`]: generateVariantsFile(requirements),

		// 类型定义文件（可选）
		[`${requirements.componentName}/types.ts`]: generateTypesFile(requirements)
	};

	return files;
}
```

### 3. 代码生成模板

#### 组件主文件模板 (index.ts)

```typescript
export { ${ComponentName}, type ${ComponentName}Props } from './${componentName}';
export { ${componentName}Variants } from './variants';
```

#### 组件实现模板 (${ComponentName}.tsx)

```tsx
import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { ${componentName}Variants } from './variants';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';

export interface ${ComponentName}Props
  extends PropsWithChildren,
          VariantProps<typeof ${componentName}Variants>,
          React.ComponentProps<'${elementType}'> {
  className?: string;
  // 自定义属性将在这里添加
}

const ${ComponentName} = memo(({
  className,
  variant,
  size,
  children,
  ...props
}: ${ComponentName}Props) => {
  const context = useConfigContext();

  return (
    <${elementType}
      data-slot="${component-name}"
      data-variant={variant}
      data-size={size || context.size}
      className={cn(${componentName}Variants({
        variant,
        size: size || context.size,
        className
      }))}
      {...props}
    >
      {children}
    </${elementType}>
  );
});

${ComponentName}.displayName = '${ComponentName}';
export { ${ComponentName} };
```

#### 样式变体模板 (variants.ts)

```ts
import { cva } from 'class-variance-authority';

export const ${componentName}Variants = cva(
  // 基础样式
  'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);
```

## 具体实现示例

### 示例 1: 创建 Button 组件

**用户输入:** "帮我创建一个按钮组件，需要有 primary、secondary 和 outline 三种样式，支持 sm、md、lg 三种尺寸"

**技能响应:** 我将为您创建一个完整的 Button 组件，包含您要求的功能。

**生成的文件结构:**

```
button/
├── index.ts
├── button.tsx
└── variants.ts
```

**生成的代码:**

#### button/index.ts

```ts
export { Button, type ButtonProps } from './button';
export { buttonVariants } from './variants';
```

#### button/button.tsx

```tsx
import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { buttonVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';

export interface ButtonProps
	extends PropsWithChildren, VariantProps<typeof buttonVariants>, React.ComponentProps<'button'> {
	className?: string;
}

const Button = memo(({ className, variant, size, children, ...props }: ButtonProps) => {
	const context = useConfigContext();

	return (
		<button
			data-slot="button"
			data-variant={variant}
			data-size={size || context.size}
			className={cn(
				buttonVariants({
					variant,
					size: size || context.size,
					className
				})
			)}
			{...props}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
export { Button };
```

#### button/variants.ts

```ts
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
			},
			size: {
				sm: 'h-8 px-3 text-xs',
				default: 'h-10 px-4 py-2',
				lg: 'h-12 px-8'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
		}
	}
);
```

### 示例 2: 创建 Card 组件

**用户输入:** "创建一个卡片组件，需要有标题和内容区域，支持不同的阴影效果"

**技能响应:** 我将为您创建一个 Card 组件，包含标题、内容和阴影变体。

**生成的代码:**

#### card/card.tsx

```tsx
import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { cardVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';

export interface CardProps
	extends PropsWithChildren, VariantProps<typeof cardVariants>, React.ComponentProps<'div'> {
	className?: string;
	title?: string;
}

const Card = memo(({ className, variant, title, children, ...props }: CardProps) => {
	return (
		<div
			data-slot="card"
			data-variant={variant}
			className={cn(cardVariants({ variant, className }))}
			{...props}
		>
			{title && (
				<div className="p-6 pb-0">
					<h3 className="font-semibold leading-none tracking-tight">{title}</h3>
				</div>
			)}
			<div className="p-6">{children}</div>
		</div>
	);
});

Card.displayName = 'Card';
export { Card };
```

## 最佳实践

### 1. 组件设计原则

- **单一职责** - 每个组件只负责一个功能
- **可复用性** - 设计通用的组件接口
- **可组合性** - 支持组件的组合使用
- **可访问性** - 内置可访问性支持

### 2. 性能优化

- **React.memo** - 所有组件都使用 memo 包装
- **useMemo/useCallback** - 合理使用性能优化 Hooks
- **条件渲染** - 避免不必要的渲染

### 3. 类型安全

- **完整的类型定义** - 提供详细的 TypeScript 类型
- **泛型支持** - 在适当场景使用泛型
- **类型推断** - 充分利用 TypeScript 的类型推断

## 注意事项

### 1. 命名规范

- 组件名称使用 PascalCase
- 文件名使用 kebab-case
- 变体名称使用小写

### 2. 文件结构

- 每个组件独立目录
- 统一的文件命名规范
- 清晰的导入导出结构

### 3. 样式规范

- 使用 TailwindCSS 实用类
- 遵循设计系统规范
- 支持主题配置

### 4. 兼容性考虑

- 与现有组件库兼容
- 遵循项目架构规范
- 考虑浏览器兼容性

## 错误处理

### 常见错误场景

1. **组件名称冲突** - 检查是否已存在同名组件
2. **无效的元素类型** - 验证 HTML 元素类型的有效性
3. **样式冲突** - 确保样式类名不会冲突

### 错误处理策略

```typescript
// 验证组件名称
function validateComponentName(name: string): boolean {
	const existingComponents = ['Button', 'Input', 'Card']; // 从项目获取
	return !existingComponents.includes(name);
}

// 验证元素类型
function validateElementType(type: string): boolean {
	const validElements = ['div', 'button', 'input', 'span', 'a', 'img'];
	return validElements.includes(type);
}
```

## 扩展性

### 支持的自定义选项

- **主题支持** - 添加主题相关的变体
- **动画效果** - 支持不同的动画和过渡效果
- **国际化** - 支持多语言文本
- **状态管理** - 集成状态管理功能

### 插件化架构

```typescript
// 可扩展的组件生成器
interface ComponentGenerator {
	generateComponent(requirements: ComponentRequirements): ComponentFiles;
	validateRequirements(requirements: ComponentRequirements): ValidationResult;
	getTemplates(): ComponentTemplates;
}
```

## 调试和测试

### 调试技巧

1. **验证生成的代码** - 确保代码符合 TypeScript 编译要求
2. **测试组件渲染** - 验证组件能够正确渲染
3. **检查样式应用** - 确认样式变体正常工作

### 测试策略

```typescript
// 组件测试示例
describe('Generated Component', () => {
	it('should render correctly', () => {
		// 测试组件渲染
	});

	it('should apply variants correctly', () => {
		// 测试样式变体
	});

	it('should handle props correctly', () => {
		// 测试属性处理
	});
});
```

---

**技能版本:** 1.0.0 **最后更新:** 2026年5月21日 **适用项目:** Rinex UI 组件库
