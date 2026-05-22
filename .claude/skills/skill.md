# Claude Code Skill 开发指南

本指南说明如何为 Rinex UI 组件库项目开发自定义 Claude Code 技能（Skill）。

## 🎯 什么是 Skill？

Skill 是 Claude Code 的扩展功能，允许你为特定项目或工作流程创建定制化的 AI 助手能力。通过 Skill，你可以：

- 定义特定领域的专业知识
- 创建项目特定的代码生成模板
- 实现定制化的开发工作流
- 提供领域特定的最佳实践

## 📁 Skill 文件结构

Skill 文件应放置在 `.claude/skills/` 目录下：

```
.claude/skills/
├── skill.md                 # Skill 开发指南
├── rinex-component.md       # Rinex 组件开发技能
├── rinex-docs.md           # 文档生成技能
└── rinex-review.md         # 代码审查技能
```

## 🛠️ Skill 编写规范

### 基本结构

一个完整的 Skill 文档应包含以下部分：

```markdown
# Skill 名称

## 功能描述

简要描述 Skill 的功能和用途。

## 触发条件

说明在什么情况下应该触发此 Skill。

## 输入输出

描述 Skill 的输入参数和输出格式。

## 实现逻辑

详细说明 Skill 的实现逻辑和步骤。

## 代码示例

提供具体的代码示例。

## 最佳实践

列出使用此 Skill 的最佳实践。

## 注意事项

说明使用时的注意事项和限制。
```

## 📝 Skill 示例

### 示例 1: 组件开发技能

```markdown
# Rinex 组件生成技能

## 功能描述

根据用户需求自动生成符合 Rinex UI 规范的 React 组件。

## 触发条件

- 用户请求创建新的 UI 组件
- 用户提到"创建一个...组件"
- 用户描述组件功能和需求

## 输入参数

- componentName: 组件名称（PascalCase）
- description: 组件功能描述
- props: 组件属性需求
- variants: 样式变体需求

## 实现逻辑

1. 解析用户需求，确定组件类型
2. 生成组件文件结构
3. 创建 TypeScript 类型定义
4. 实现组件逻辑
5. 添加样式变体
6. 生成组件文档

## 代码生成模板

### 组件主文件

```tsx
import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { {componentName}Variants } from './variants';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';

export interface {ComponentName}Props
  extends PropsWithChildren,
          VariantProps<typeof {componentName}Variants>,
          React.ComponentProps<'div'> {
  className?: string;
}

const {ComponentName} = memo(({ className, variant, size, ...props }: {ComponentName}Props) => {
  const context = useConfigContext();

  return (
    <div
      data-slot="{component-name}"
      data-variant={variant}
      data-size={size || context.size}
      className={cn({componentName}Variants({
        variant,
        size: size || context.size,
        className
      }))}
      {...props}
    />
  );
});

{ComponentName}.displayName = '{ComponentName}';
export { {ComponentName} };
```

### 样式变体文件

```ts
import { cva } from 'class-variance-authority';

export const {componentName}Variants = cva(
  // 基础样式
  'inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-900',
        primary: 'bg-blue-600 text-white',
        outline: 'border border-gray-300 bg-transparent',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    }
  }
);
```

## 最佳实践

1. **遵循命名规范** - 组件名使用 PascalCase
2. **类型安全** - 完整的 TypeScript 类型定义
3. **性能优化** - 使用 memo() 包装组件
4. **样式规范** - 使用 class-variance-authority
5. **可访问性** - 添加适当的 ARIA 属性

## 注意事项

- 确保生成的组件符合项目现有架构
- 避免生成重复功能的组件
- 考虑组件的可复用性和扩展性
```

### 示例 2: 文档生成技能

```markdown
# Rinex 文档生成技能

## 功能描述

自动生成组件文档和使用说明。

## 触发条件

- 用户请求生成组件文档
- 创建新组件后需要文档
- 用户提到"文档"、"说明"等关键词

## 文档结构

```markdown
# 组件名称

组件功能描述。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| variant | 'default' | 'primary' | 'outline' | 'default' | 组件变体 |
| size | 'sm' | 'md' | 'lg' | 'md' | 组件尺寸 |
| className | string | - | 自定义类名 |
| disabled | boolean | false | 禁用状态 |

## 基本用法

```tsx
<Component variant="primary" size="lg">
  内容
</Component>
```

## 变体示例

```tsx
{/* 默认变体 */}
<Component>默认按钮</Component>

{/* 主要变体 */}
<Component variant="primary">主要按钮</Component>

{/* 轮廓变体 */}
<Component variant="outline">轮廓按钮</Component>
```

## 尺寸示例

```tsx
<Component size="sm">小尺寸</Component>
<Component size="md">中尺寸</Component>
<Component size="lg">大尺寸</Component>
```

## 禁用状态

```tsx
<Component disabled>禁用状态</Component>
```
```

## 🚀 创建自定义 Skill

### Skill 开发流程

1. **需求分析**
   - 确定 Skill 的目标和用途
   - 分析用户可能的使用场景
   - 定义输入输出格式

2. **设计架构**
   - 设计 Skill 的触发条件
   - 规划实现逻辑和步骤
   - 确定代码生成模板

3. **编写文档**
   - 按照规范编写 Skill 文档
   - 提供详细的代码示例
   - 说明最佳实践和注意事项

4. **测试验证**
   - 验证 Skill 的实际效果
   - 调整优化实现逻辑
   - 收集用户反馈

### Skill 模板

```markdown
# [Skill 名称] 技能

## 功能描述

[详细描述 Skill 的功能和目标]

## 触发条件

- [条件 1]
- [条件 2]
- [条件 3]

## 输入参数

- **参数1**: 参数说明
- **参数2**: 参数说明
- **参数3**: 参数说明

## 实现逻辑

1. **步骤 1**: 详细说明
2. **步骤 2**: 详细说明
3. **步骤 3**: 详细说明

## 代码模板

```tsx
// 代码模板示例
```

## 输出格式

描述 Skill 的输出格式和结构。

## 最佳实践

- 实践 1
- 实践 2
- 实践 3

## 注意事项

- 注意 1
- 注意 2
- 注意 3

## 示例场景

### 场景 1: [场景描述]

**用户输入:**
"[用户输入示例]"

**Skill 响应:**
"[Skill 响应示例]"

**生成代码:**
```tsx
// 生成的代码
```
```

## 🎨 Skill 类型建议

### 1. 代码生成类 Skill

- **组件生成** - 自动生成 React 组件
- **工具函数生成** - 自动生成工具函数
- **Hook 生成** - 自动生成自定义 Hook
- **测试用例生成** - 自动生成测试代码

### 2. 代码优化类 Skill

- **性能优化** - 提供性能优化建议
- **代码重构** - 提供重构方案
- **类型优化** - 优化 TypeScript 类型定义
- **可访问性优化** - 提升可访问性

### 3. 工作流类 Skill

- **代码审查** - 自动化代码审查
- **提交信息生成** - 生成规范的提交信息
- **文档生成** - 自动生成项目文档
- **问题诊断** - 诊断和解决问题

### 4. 学习辅助类 Skill

- **最佳实践指导** - 提供最佳实践建议
- **错误排查** - 帮助排查常见错误
- **技术选型** - 提供技术选型建议
- **架构设计** - 提供架构设计指导

## 🔧 Skill 开发技巧

### 1. 明确触发条件

```markdown
## 触发条件

- 用户明确请求："帮我创建一个..."
- 关键词匹配："组件"、"函数"、"Hook"等
- 上下文分析：基于对话历史判断需求
```

### 2. 提供具体示例

```markdown
## 代码示例

### 基础用法
```tsx
// 简单明了的示例
```

### 高级用法
```tsx
// 展示高级特性的示例
```
```

### 3. 包含错误处理

```markdown
## 错误处理

- **输入验证**: 验证用户输入的合理性
- **边界情况**: 处理特殊情况和边界条件
- **降级方案**: 提供备选解决方案
```

### 4. 保持简洁性

```markdown
## 简洁性原则

- **专注核心功能** - 避免过于复杂
- **提供模板** - 使用可复用的代码模板
- **渐进式指导** - 分步骤指导用户
```

## 📊 Skill 效果评估

### 评估指标

1. **准确性** - 生成代码的正确性
2. **实用性** - 代码的实际可用程度
3. **规范性** - 是否符合项目规范
4. **效率** - 提升开发效率的程度

### 改进方法

1. **收集反馈** - 收集用户使用反馈
2. **分析日志** - 分析 Skill 使用数据
3. **持续优化** - 基于反馈持续改进
4. **版本迭代** - 定期发布改进版本

## 🤝 团队协作

### Skill 共享

- **文档化** - 详细记录 Skill 功能
- **代码审查** - 团队审查 Skill 质量
- **版本控制** - 管理 Skill 版本
- **培训推广** - 培训团队成员使用

### 维护更新

- **定期检查** - 定期检查 Skill 有效性
- **更新优化** - 根据项目变化更新 Skill
- **废弃管理** - 及时废弃不再使用的 Skill

## 🚨 注意事项

### 1. 安全性考虑

- 验证用户输入，避免安全漏洞
- 不生成可能有害的代码
- 遵循安全编码规范

### 2. 性能考虑

- 避免生成性能低下的代码
- 考虑代码的可维护性
- 优化生成的算法和逻辑

### 3. 兼容性考虑

- 确保生成的代码与项目兼容
- 考虑不同环境的兼容性
- 遵循项目的依赖约束

## 📚 参考资源

- [Claude Code 官方文档](https://claude.ai/codes)
- [React 官方文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Rinex UI 项目规范](../rules/README.md)

---

**Skill 开发指南版本:** 1.0.0
**最后更新:** 2026年5月21日
**维护者:** Rinex UI 开发团队
