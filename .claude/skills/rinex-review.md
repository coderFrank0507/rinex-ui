# Rinex 代码审查技能

## 功能描述

该技能用于对 Rinex UI 项目中的代码进行自动化审查，确保代码质量、性能优化、可访问性和规范性。技能将分析代码并提供具体的改进建议。

## 触发条件

当用户表达以下意图时触发此技能：

- "帮我审查这段代码"
- "检查代码质量"
- "优化这个组件"
- "看看有没有性能问题"
- "检查可访问性"
- "代码 review"
- 用户分享代码片段并寻求反馈

## 输入参数

技能将从用户输入中提取以下信息：

- **codeSnippet**: 要审查的代码片段
- **codeType**: 代码类型（React 组件、工具函数、Hook 等）
- **reviewFocus**: 审查重点（性能、可访问性、规范、类型安全等）
- **componentName**: 组件名称（如果是组件代码）
- **existingContext**: 现有项目上下文信息

## 审查维度

### 1. TypeScript 类型安全审查

```typescript
// 类型安全检查清单
interface TypeSafetyCheck {
  hasExplicitTypes: boolean;           // 是否有显式类型定义
  avoidsAny: boolean;                  // 是否避免使用 any
  properGenerics: boolean;             // 是否正确使用泛型
  completePropsInterface: boolean;     // Props 接口是否完整
  properReturnTypes: boolean;          // 返回类型是否明确
}
```

**审查要点：**
- 检查是否所有函数参数都有类型注解
- 验证是否避免使用 `any` 类型
- 确保组件 Props 接口完整且准确
- 检查泛型的正确使用
- 验证返回类型的准确性

### 2. React 最佳实践审查

```typescript
// React 最佳实践检查清单
interface ReactBestPracticesCheck {
  usesMemo: boolean;                   // 是否使用 React.memo
  hasDisplayName: boolean;             // 是否设置 displayName
  properHooks: boolean;                // Hook 使用是否正确
  avoidsUnnecessaryRerenders: boolean; // 是否避免不必要的重渲染
  properEventHandlers: boolean;        // 事件处理是否正确
}
```

**审查要点：**
- 组件是否使用 `React.memo` 进行性能优化
- 是否正确设置 `displayName`
- Hook 依赖项是否正确声明
- 是否避免在 render 中创建新对象
- 事件处理函数是否正确使用 `useCallback`

### 3. 性能优化审查

```typescript
// 性能优化检查清单
interface PerformanceCheck {
  usesMemoization: boolean;            // 是否使用记忆化
  properKeyUsage: boolean;             // key 使用是否正确
  avoidsDeepNesting: boolean;          // 是否避免深层嵌套
  optimizedLists: boolean;             // 列表渲染是否优化
  properStateUpdates: boolean;         // 状态更新是否优化
}
```

**审查要点：**
- 是否合理使用 `useMemo` 和 `useCallback`
- 列表渲染是否使用合适的 key
- 是否避免深层嵌套的条件语句
- 状态更新是否批量处理
- 是否避免不必要的计算和渲染

### 4. 可访问性审查

```typescript
// 可访问性检查清单
interface AccessibilityCheck {
  hasAriaLabels: boolean;              // 是否有 ARIA 标签
  keyboardNavigation: boolean;         // 是否支持键盘导航
  properRoles: boolean;                // 是否使用正确的角色
  screenReaderSupport: boolean;        // 是否支持屏幕阅读器
  focusManagement: boolean;            // 焦点管理是否正确
}
```

**审查要点：**
- 交互元素是否有适当的 ARIA 属性
- 是否支持键盘导航（Tab、Enter、Space）
- 是否使用正确的语义化标签
- 是否提供清晰的焦点状态
- 是否支持屏幕阅读器

### 5. 代码规范性审查

```typescript
// 代码规范检查清单
interface CodeStyleCheck {
  followsNamingConventions: boolean;  // 是否遵循命名规范
  properImports: boolean;              // 导入语句是否规范
  consistentFormatting: boolean;       // 格式是否一致
  properComments: boolean;             // 注释是否恰当
  followsProjectStructure: boolean;    // 是否遵循项目结构
}
```

**审查要点：**
- 命名是否符合项目规范（PascalCase、kebab-case）
- 导入语句是否按规范排序
- 代码格式是否符合 Prettier 配置
- 是否有适当的注释和文档
- 文件结构是否符合项目约定

## 审查流程

### 1. 代码解析阶段

```typescript
function analyzeCode(codeSnippet: string, codeType: string) {
  const analysis = {
    syntaxValid: checkSyntax(codeSnippet),
    imports: extractImports(codeSnippet),
    exports: extractExports(codeSnippet),
    components: extractComponents(codeSnippet),
    hooks: extractHooks(codeSnippet),
    types: extractTypes(codeSnippet)
  };

  return analysis;
}
```

### 2. 多维度审查阶段

```typescript
function performMultiDimensionalReview(analysis: CodeAnalysis) {
  const reviews = {
    typeSafety: reviewTypeSafety(analysis),
    reactBestPractices: reviewReactBestPractices(analysis),
    performance: reviewPerformance(analysis),
    accessibility: reviewAccessibility(analysis),
    codeStyle: reviewCodeStyle(analysis)
  };

  return reviews;
}
```

### 3. 建议生成阶段

```typescript
function generateImprovementSuggestions(reviews: CodeReviews) {
  const suggestions = [];

  // 生成具体的改进建议
  reviews.typeSafety.issues.forEach(issue => {
    suggestions.push({
      type: 'type-safety',
      severity: issue.severity,
      message: issue.message,
      suggestion: issue.suggestion,
      codeExample: issue.codeExample
    });
  });

  return suggestions;
}
```

## 具体审查示例

### 示例 1: Button 组件审查

**用户输入代码:**
```tsx
import React from 'react';

function Button({ children, onClick, type = 'button' }) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
```

**技能审查结果:**

#### ❌ 发现的问题：

1. **类型安全** (严重)
   - ❌ 缺少 TypeScript 类型定义
   - ❌ Props 参数没有类型注解
   - ❌ 缺少返回类型

2. **React 最佳实践** (中等)
   - ❌ 没有使用 React.memo 优化性能
   - ❌ 缺少 displayName

3. **项目规范** (中等)
   - ❌ 不符合 Rinex UI 组件规范
   - ❌ 缺少样式变体支持
   - ❌ 没有使用项目工具函数

#### ✅ 改进建议：

```tsx
import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { buttonVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends PropsWithChildren,
          VariantProps<typeof buttonVariants>,
          React.ComponentProps<'button'> {
  className?: string;
}

const Button = memo(({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export { Button };
```

### 示例 2: 工具函数审查

**用户输入代码:**
```ts
export function formatDate(date) {
  return date.toLocaleDateString();
}

export function debounce(func, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}
```

**技能审查结果:**

#### ❌ 发现的问题：

1. **类型安全** (严重)
   - ❌ 函数参数缺少类型定义
   - ❌ 返回类型不明确
   - ❌ 泛型支持不足

2. **错误处理** (中等)
   - ❌ 缺少输入验证
   - ❌ 没有错误处理机制

3. **性能优化** (轻微)
   - ❌ debounce 函数缺少 this 绑定
   - ❌ 没有清理机制

#### ✅ 改进建议：

```ts
export function formatDate(date: Date, locale: string = 'zh-CN'): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }
  return date.toLocaleDateString(locale);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
```

## 审查报告格式

### 综合评分

```typescript
interface ReviewReport {
  overallScore: number;        // 总体评分 (0-100)
  categoryScores: {
    typeSafety: number;
    reactBestPractices: number;
    performance: number;
    accessibility: number;
    codeStyle: number;
  };
  issues: Issue[];
  suggestions: Suggestion[];
  codeExamples: CodeExample[];
}
```

### 问题分类

```typescript
interface Issue {
  type: 'error' | 'warning' | 'info';
  category: 'type-safety' | 'performance' | 'accessibility' | 'style';
  message: string;
  lineNumber?: number;
  suggestion: string;
  codeExample?: string;
}
```

## 自动化检查规则

### TypeScript 规则

```typescript
const typeScriptRules = [
  {
    id: 'no-explicit-any',
    message: '避免使用 any 类型',
    severity: 'error',
    fix: '使用具体类型或泛型替代 any'
  },
  {
    id: 'explicit-return-types',
    message: '函数应该有显式的返回类型',
    severity: 'warning',
    fix: '添加 : ReturnType 注解'
  }
];
```

### React 规则

```typescript
const reactRules = [
  {
    id: 'react-memo',
    message: '纯组件应该使用 React.memo',
    severity: 'warning',
    fix: '用 React.memo() 包装组件'
  },
  {
    id: 'display-name',
    message: '组件应该设置 displayName',
    severity: 'warning',
    fix: '添加 Component.displayName = "ComponentName"'
  }
];
```

## 最佳实践建议

### 1. 代码质量提升

- **类型优先** - 始终使用 TypeScript 严格模式
- **测试驱动** - 编写测试用例确保代码质量
- **文档完整** - 为公共 API 提供完整文档

### 2. 性能优化建议

- **合理使用 memo** - 避免过度优化
- **虚拟化长列表** - 处理大量数据时考虑虚拟化
- **代码分割** - 按需加载组件

### 3. 可访问性建议

- **语义化标记** - 使用正确的 HTML 元素
- **键盘支持** - 确保所有功能键盘可访问
- **ARIA 属性** - 提供适当的 ARIA 支持

## 注意事项

### 1. 上下文理解

- 考虑项目的具体需求和约束
- 理解现有代码库的模式和约定
- 避免过于严格的规则导致实用性降低

### 2. 建议可行性

- 提供切实可行的改进建议
- 考虑重构的成本和收益
- 优先处理严重问题

### 3. 教育价值

- 解释问题的原因和影响
- 提供学习资源和参考文档
- 帮助开发者理解最佳实践

## 扩展功能

### 1. 自定义规则

```typescript
interface CustomRule {
  name: string;
  pattern: RegExp | string;
  message: string;
  severity: 'error' | 'warning' | 'info';
  fix?: string;
}
```

### 2. 项目特定规则

- 根据项目特点定制审查规则
- 集成项目的 ESLint 和 Prettier 配置
- 支持项目特定的最佳实践

### 3. 历史分析

- 跟踪代码质量的趋势
- 识别重复出现的问题模式
- 提供长期改进建议

---

**技能版本:** 1.0.0
**最后更新:** 2026年5月21日
**审查标准:** Rinex UI 项目规范
