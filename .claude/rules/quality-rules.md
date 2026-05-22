# 代码质量保障规则

## TypeScript 规范

### 类型定义要求

1. **严格类型模式**
   - 启用 `strict: true` 配置
   - 避免使用 `any` 类型
   - 使用类型推断而非显式类型声明（当显而易见时）

2. **接口定义规范**

   ```ts
   // ✅ 正确：使用 interface 定义对象类型
   export interface ComponentProps {
   	className?: string;
   	children?: React.ReactNode;
   }

   // ❌ 避免：使用 type 定义简单类型
   type Props = {
   	className?: string;
   };
   ```

3. **泛型使用**
   - 在适当场景使用泛型提高类型复用性
   - 为自定义 hooks 提供泛型支持
   - 避免过度复杂的泛型嵌套

### 类型安全检查

- 所有函数参数必须有类型注解
- 所有返回值必须有类型注解
- 禁止使用 `// @ts-ignore` 忽略类型错误
- 使用 `unknown` 替代 `any` 处理不确定类型

## ESLint 规则遵守

### React 规则

1. **Hooks 规则**
   - 遵循 Hooks 调用顺序规则
   - 所有 Hook 依赖项必须正确声明
   - 自定义 Hook 名称必须以 `use` 开头

2. **组件规则**
   - 函数组件必须返回 JSX 或 null
   - 避免在 render 中进行副作用操作
   - 使用 React.memo 优化性能

### TypeScript 规则

1. **类型检查**
   - `@typescript-eslint/no-explicit-any`: 禁止使用 any
   - `@typescript-eslint/explicit-function-return-type`: 函数必须显式声明返回类型
   - `@typescript-eslint/no-unused-vars`: 禁止使用未定义的变量

2. **最佳实践**
   - `@typescript-eslint/prefer-readonly`: 优先使用 readonly 修饰符
   - `@typescript-eslint/no-non-null-assertion`: 避免使用非空断言操作符

## Prettier 代码格式化

### 格式化配置

```json
{
	"printWidth": 100,
	"tabWidth": 2,
	"useTabs": true,
	"semi": true,
	"singleQuote": true,
	"quoteProps": "as-needed",
	"bracketSpacing": true,
	"trailingComma": "none",
	"jsxBracketSameLine": false,
	"jsxSingleQuote": false,
	"arrowParens": "always"
}
```

### 格式化要求

1. **缩进**
   - 使用 Tab 缩进，不使用空格
   - 保持一致的缩进层级

2. **引号**
   - 字符串统一使用单引号 `'`
   - JSX 属性使用双引号 `"`

3. **分号和逗号**
   - 语句末尾必须加分号
   - 对象和数组最后一项不加逗号

4. **行宽**
   - 单行代码不超过 100 字符
   - 超长代码需要合理换行

## 性能优化规范

### React 性能优化

1. **组件优化**

   ```tsx
   // ✅ 正确：使用 memo 优化组件
   const Component = memo((props: Props) => {
   	return <div>{props.children}</div>;
   });

   // ✅ 正确：使用 useMemo 缓存计算结果
   const expensiveValue = useMemo(() => {
   	return computeExpensiveValue(dependency);
   }, [dependency]);

   // ✅ 正确：使用 useCallback 缓存函数
   const handleClick = useCallback(() => {
   	// 处理点击事件
   }, [dependency]);
   ```

2. **避免常见性能问题**
   - 避免在 render 中创建新对象或函数
   - 避免不必要的状态更新
   - 合理使用 key 属性优化列表渲染

### 代码层面优化

1. **循环和条件优化**
   - 避免深层嵌套的条件语句
   - 使用提前返回减少嵌套层级
   - 优化循环性能，避免在循环中进行复杂计算

2. **内存管理**
   - 及时清理定时器和事件监听器
   - 避免内存泄漏
   - 合理使用 WeakMap 和 WeakSet

## 可访问性规范

### ARIA 属性

1. **语义化标签**
   - 优先使用语义化 HTML 标签
   - 为自定义组件添加适当的 ARIA 属性

2. **键盘导航**
   - 所有交互元素必须支持键盘操作
   - 提供清晰的焦点状态
   - 支持 Tab 键导航顺序

3. **屏幕阅读器支持**
   - 提供有意义的标签文本
   - 使用 aria-label 和 aria-labelledby
   - 正确设置 role 属性

## 代码组织规范

### 文件结构

1. **组件文件组织**

   ```
   component-name/
   ├── index.ts          # 导出入口
   ├── component.tsx     # 组件实现
   ├── variants.ts       # 样式变体
   ├── types.ts          # 类型定义（可选）
   └── utils.ts          # 组件特定工具函数（可选）
   ```

2. **工具函数组织**
   - 通用工具函数放在 `_utils/` 目录
   - 组件特定工具函数放在组件目录内
   - 避免重复的工具函数

### 导入导出规范

1. **导入顺序**

   ```ts
   // 1. React 相关
   import React from 'react';

   // 2. 第三方库
   import { cva } from 'class-variance-authority';

   // 3. 项目内部模块
   import { cn } from '../_utils';

   // 4. 相对路径导入
   import { componentVariants } from './variants';
   ```

2. **导出规范**
   - 使用具名导出而非默认导出
   - 在 index.ts 中统一导出
   - 避免循环依赖

## 错误处理和边界情况

### 错误处理

1. **输入验证**

   ```tsx
   // ✅ 正确：验证 props
   const Component = ({ value }: { value?: string }) => {
   	if (typeof value !== 'string') {
   		console.warn('Component: value prop must be a string');
   		return null;
   	}
   	return <div>{value}</div>;
   };
   ```

2. **错误边界**
   - 考虑添加 React 错误边界组件
   - 提供优雅的错误降级方案
   - 记录错误信息用于调试

### 边界情况处理

1. **空值处理**
   - 正确处理 null 和 undefined
   - 为可选 props 提供合理的默认值
   - 避免空指针异常

2. **异步操作**
   - 正确处理加载状态
   - 处理错误状态
   - 清理异步操作

## 文档规范

### 代码注释

1. **JSDoc 注释**

   ```ts
   /**
    * 组件功能描述
    * @param props - 组件属性
    * @returns React 元素
    */
   const Component = (props: Props) => {
   	// 实现逻辑
   };
   ```

2. **内联注释**
   - 解释复杂逻辑
   - 说明业务规则
   - 标记待办事项（TODO）

### README 文档

每个组件必须包含完整的文档：

1. **使用说明**
2. **Props 表格**
3. **代码示例**
4. **注意事项**

## 代码审查清单

### 审查重点

1. **功能性**
   - 功能实现是否正确
   - 边界情况是否处理
   - 错误处理是否完善

2. **代码质量**
   - 代码是否清晰易读
   - 是否有重复代码
   - 性能是否优化

3. **规范性**
   - 是否符合项目规范
   - 命名是否规范
   - 文档是否完整

## 持续改进

### 代码质量监控

1. **自动化检查**
   - 集成 CI/CD 流程
   - 自动运行代码检查
   - 生成代码质量报告

2. **定期审查**
   - 定期进行代码审查
   - 更新编码规范
   - 优化最佳实践

### 技术债务管理

1. **识别技术债务**
   - 标记待重构代码
   - 记录已知问题
   - 制定改进计划

2. **逐步改进**
   - 制定优先级
   - 分阶段改进
   - 持续监控进展
