import InternalCollapse from './collapse';
import CollapseItem from './item';
import CollapseTrigger from './trigger';
import CollapsePanel from './panel';

const Collapse = InternalCollapse as typeof InternalCollapse & {
	Item: typeof CollapseItem;
	Trigger: typeof CollapseTrigger;
	Panel: typeof CollapsePanel;
};

Collapse.Item = CollapseItem;
Collapse.Trigger = CollapseTrigger;
Collapse.Panel = CollapsePanel;

export default Collapse;
