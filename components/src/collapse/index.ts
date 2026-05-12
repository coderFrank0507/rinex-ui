import { Collapse as InternalCollapse, type CollapseProps } from './collapse';
import { CollapseItem, type CollapseItemProps } from './item';
import { CollapseTrigger, type CollapseTriggerProps } from './trigger';
import { CollapsePanel, type CollapsePanelProps } from './panel';

const Collapse = InternalCollapse as typeof InternalCollapse & {
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
