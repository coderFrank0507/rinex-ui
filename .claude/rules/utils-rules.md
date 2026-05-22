# 工具函数开发规则

## 工具函数分类

### 1. 样式工具函数

#### 类名合并工具

```ts
// ✅ 正确：使用现有的 cn 工具
import { cn } from '../_utils';

// ❌ 避免：重复实现类名合并功能
export function mergeClassNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}
```

#### 变体生成工具

- 使用 `class-variance-authority` 创建样式变体
- 避免手动拼接类名字符串
- 提供默认变体和自定义变体支持

### 2. 类型检查工具

#### 基础类型检查

```ts
// ✅ 正确：使用现有的类型检查工具
import { isObject, isFunction, isString } from '../_utils';

// ❌ 避免：重复实现类型检查
export function isObject(value: any) {
	return typeof value === 'object' && value !== null;
}
```

#### 高级类型检查

- `hasOwn()`: 检查对象是否拥有指定属性
- `hasChanged()`: 检查值是否发生变化
- `isOn()`: 检查是否为事件处理函数

### 3. React 特定工具

#### Hooks 封装

```ts
// ✅ 正确：自定义 Hook 封装
export function useCustomHook(dependency: any) {
	const [state, setState] = useState(null);

	useEffect(() => {
		// 副作用逻辑
	}, [dependency]);

	return state;
}

// ❌ 避免：在组件中直接实现复杂逻辑
```

#### 性能优化工具

- `useUID()`: 生成唯一标识符
- 避免重复渲染的工具函数
- 记忆化工具函数

### 4. 通用工具函数

#### 数据处理工具

- 对象深度克隆
- 数组操作工具
- 字符串处理工具
- 日期时间工具

#### 浏览器 API 封装

- DOM 操作封装
- 事件处理封装
- 本地存储封装

## 文件组织规范

### 目录结构

```
components/src/_utils/
├── index.ts              # 统一导出
├── types.ts              # 类型定义
├── validation.ts         # 验证工具
├── dom.ts                # DOM 操作
├── react.ts              # React 特定工具
├── string.ts             # 字符串处理
├── object.ts             # 对象操作
├── array.ts              # 数组操作
└── browser.ts            # 浏览器 API
```

### 文件职责

1. **index.ts** - 统一导出入口

   ```ts
   export * from './types';
   export * from './validation';
   export * from './dom';
   export * from './react';
   export * from './string';
   export * from './object';
   export * from './array';
   export * from './browser';
   ```

2. **按功能分类** - 每个文件负责特定功能领域
3. **避免功能重叠** - 确保每个工具函数有明确的职责

## 函数设计原则

### 单一职责原则

```ts
// ✅ 正确：单一职责
export function formatDate(date: Date): string {
	return date.toLocaleDateString('zh-CN');
}

export function formatTime(date: Date): string {
	return date.toLocaleTimeString('zh-CN');
}

// ❌ 避免：功能过于复杂
export function formatDateTime(date: Date, type: 'date' | 'time' | 'both') {
	// 过于复杂的逻辑
}
```

### 纯函数原则

```ts
// ✅ 正确：纯函数，相同输入始终返回相同输出
export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// ❌ 避免：有副作用的函数
export function updateGlobalState(value: any) {
	globalState.value = value; // 修改全局状态
}
```

### 类型安全原则

```ts
// ✅ 正确：完整的类型定义
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timeoutId: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	};
}

// ❌ 避免：类型不明确
export function debounce(func: any, delay: number) {
	// 类型信息丢失
}
```

## 函数命名规范

### 命名约定

1. **动词开头** - 函数名应该以动词开头
   - `getXxx()` - 获取数据
   - `setXxx()` - 设置数据
   - `isXxx()` - 判断条件
   - `hasXxx()` - 检查存在性
   - `formatXxx()` - 格式化数据

2. **语义明确** - 函数名应该清晰表达其功能

   ```ts
   // ✅ 正确：语义明确
   export function generateUniqueId(): string;
   export function validateEmail(email: string): boolean;
   export function formatCurrency(amount: number): string;

   // ❌ 避免：语义模糊
   export function process(data: any): any;
   export function handle(value: unknown): unknown;
   ```

3. **一致性** - 相似功能使用相似的命名模式
   ```ts
   // ✅ 正确：命名一致
   export function toCamelCase(str: string): string;
   export function toKebabCase(str: string): string;
   export function toPascalCase(str: string): string;
   ```

## 参数设计规范

### 参数数量控制

1. **参数数量限制** - 尽量控制参数数量不超过 3 个
2. **使用配置对象** - 参数过多时使用配置对象

```ts
// ✅ 正确：使用配置对象
export function createComponent(options: {
	variant?: string;
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	className?: string;
}) {
	// 实现逻辑
}

// ❌ 避免：过多参数
export function createComponent(variant, size, disabled, className, theme, mode) {
	// 参数过多，难以维护
}
```

### 参数默认值

```ts
// ✅ 正确：提供合理的默认值
export function formatNumber(value: number, options: Intl.NumberFormatOptions = {}): string {
	return new Intl.NumberFormat('zh-CN', options).format(value);
}

// ✅ 正确：可选参数放在最后
export function createElement(
	tag: string,
	attributes?: Record<string, any>,
	children?: React.ReactNode
) {
	// 实现逻辑
}
```

## 返回值规范

### 返回值类型

1. **明确返回类型** - 所有函数必须明确返回类型
2. **避免返回 any** - 使用具体的类型或泛型

```ts
// ✅ 正确：明确返回类型
export function parseJSON<T>(jsonString: string): T | null {
	try {
		return JSON.parse(jsonString) as T;
	} catch {
		return null;
	}
}

// ❌ 避免：返回类型不明确
export function parseJSON(jsonString: string) {
	return JSON.parse(jsonString);
}
```

### 错误处理

```ts
// ✅ 正确：优雅处理错误
export function safeParseInt(value: string): number | null {
	const parsed = parseInt(value, 10);
	return isNaN(parsed) ? null : parsed;
}

// ✅ 正确：抛出有意义的错误
export function required(value: any, message: string): NonNullable<any> {
	if (value == null) {
		throw new Error(message);
	}
	return value;
}
```

## 性能优化规范

### 避免重复计算

```ts
// ✅ 正确：缓存计算结果
export function memoizedExpensiveCalculation() {
	const cache = new Map();

	return function calculate(input: string): number {
		if (cache.has(input)) {
			return cache.get(input);
		}

		const result = expensiveOperation(input);
		cache.set(input, result);
		return result;
	};
}

// ❌ 避免：重复计算
export function expensiveCalculation(input: string): number {
	return expensiveOperation(input); // 每次调用都重新计算
}
```

### 内存管理

```ts
// ✅ 正确：及时清理资源
export function createTimer(callback: () => void, interval: number) {
	const timerId = setInterval(callback, interval);

	return function cleanup() {
		clearInterval(timerId);
	};
}

// ❌ 避免：内存泄漏
export function createTimer(callback: () => void, interval: number) {
	setInterval(callback, interval); // 无法清理
}
```

## 文档规范

### 函数注释

```ts
/**
 * 格式化日期为中文格式
 *
 * @param date - 要格式化的日期对象
 * @param format - 格式化模式，可选值: 'short' | 'medium' | 'long'
 * @returns 格式化后的日期字符串
 *
 */
export function formatDate(date: Date, format: 'short' | 'medium' | 'long' = 'medium'): string {
	// 实现逻辑
}
```

### 文档要求

1. **功能描述** - 清晰描述函数功能
2. **参数说明** - 详细说明每个参数的用途和类型
3. **返回值说明** - 说明返回值的类型和含义
4. **使用示例** - 提供具体的使用示例
5. **注意事项** - 说明使用时的注意事项

## 版本控制

### 变更管理

1. **语义化版本** - 遵循语义化版本管理规范
2. **变更日志** - 记录重要的功能变更
3. **向后兼容** - 尽量保持 API 的向后兼容性

## 最佳实践总结

### 开发流程

1. **需求分析** - 明确工具函数的需求和用途
2. **设计 API** - 设计清晰的接口和参数
3. **实现功能** - 编写高质量的实现代码
4. **代码审查** - 进行代码质量审查
5. **发布使用** - 发布到代码库供其他模块使用

### 质量保证

1. **代码质量** - 遵循编码规范，保证代码质量
2. **性能优化** - 关注性能，避免性能瓶颈
3. **可维护性** - 编写易于维护的代码
4. **可测试性** - 确保代码易于测试
5. **可扩展性** - 考虑未来的扩展需求
