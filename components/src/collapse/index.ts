import InternalCollapse from './collapse';
import CollapseItem from './item';
import CollapseTrigger from './trigger';
import CollapseContent from './content';

const Collapse = InternalCollapse as typeof InternalCollapse & {
	Item: typeof CollapseItem;
	Trigger: typeof CollapseTrigger;
	Content: typeof CollapseContent;
};

Collapse.Item = CollapseItem;
Collapse.Trigger = CollapseTrigger;
Collapse.Content = CollapseContent;

export default Collapse;
