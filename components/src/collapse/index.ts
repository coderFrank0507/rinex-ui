import { Collapse as Root, type CollapseProps } from './collapse';
import { CollapseItem, type CollapseItemProps } from './item';
import { CollapseTrigger, type CollapseTriggerProps } from './trigger';
import { CollapsePanel, type CollapsePanelProps } from './panel';

const Collapse = Root as typeof Root & {
	Item: typeof CollapseItem;
	Trigger: typeof CollapseTrigger;
	Panel: typeof CollapsePanel;
};

Collapse.Item = CollapseItem;
Collapse.Trigger = CollapseTrigger;
Collapse.Panel = CollapsePanel;

export {
	Collapse,
	type CollapseProps,
	type CollapseItemProps,
	type CollapseTriggerProps,
	type CollapsePanelProps
};
