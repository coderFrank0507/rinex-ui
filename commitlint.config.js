import { defineConfig } from 'cz-git';

export default defineConfig({
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
	},
	extends: ['@commitlint/config-conventional'],
	prompt: {
		alias: { fd: 'docs: fix typos' },
		useEmoji: true,
		messages: {
			type: '选择你要提交的变更类型:',
			scope: '选择变更范围 (可选):',
			customScope: '输入变更范围:',
			subject: '输入变更描述 (必填):',
			body: '输入变更详情 (可选):',
			breaking: '输入突破性变更 (可选):',
			footerPrefixSelect: '选择关联 issue 类型 (可选):',
			customFooterPrefix: '输入自定义 issue 前缀:',
			footer: '输入关联 issue (可选):',
			confirmCommit: '确认提交以上变更?'
		},
		types: [
			{ value: 'feat', name: 'feat:   ✨ 新增功能', emoji: ':sparkles:' },
			{ value: 'fix', name: 'fix:   🐛 修复 bug', emoji: ':bug:' },
			{ value: 'docs', name: 'docs:   📝 文档变更', emoji: ':memo:' },
			{ value: 'style', name: 'style:   💄 代码格式', emoji: ':art:' },
			{ value: 'refactor', name: 'refactor:   ♻️ 代码重构', emoji: ':recycle:' },
			{ value: 'perf', name: 'perf:   ⚡️ 性能优化', emoji: ':zap:' },
			{ value: 'test', name: 'test:   ✅ 测试用例', emoji: ':white_check_mark:' },
			{ value: 'build', name: 'build:   📦 构建流程、外部依赖变更', emoji: ':package:' },
			{ value: 'chore', name: 'chore:   🔨 构建过程、辅助工具变更', emoji: ':wrench:' },
			{ value: 'revert', name: 'revert:   ⏪ 回滚到上一个提交', emoji: ':rewind:' }
		]
	}
});
