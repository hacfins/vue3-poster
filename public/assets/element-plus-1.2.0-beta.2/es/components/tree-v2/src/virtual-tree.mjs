import { buildProps, definePropType, mutable } from '../../../utils/props.mjs';

const ROOT_TREE_INJECTION_KEY = Symbol();
const EMPTY_NODE = {
  key: -1,
  level: -1,
  data: {}
};
var TreeOptionsEnum;
(function(TreeOptionsEnum2) {
  TreeOptionsEnum2["KEY"] = "id";
  TreeOptionsEnum2["LABEL"] = "label";
  TreeOptionsEnum2["CHILDREN"] = "children";
  TreeOptionsEnum2["DISABLED"] = "disabled";
})(TreeOptionsEnum || (TreeOptionsEnum = {}));
var SetOperationEnum;
(function(SetOperationEnum2) {
  SetOperationEnum2["ADD"] = "add";
  SetOperationEnum2["DELETE"] = "delete";
})(SetOperationEnum || (SetOperationEnum = {}));
const treeProps = buildProps({
  data: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  emptyText: {
    type: String
  },
  height: {
    type: Number,
    default: 200
  },
  props: {
    type: definePropType(Object),
    default: () => mutable({
      children: TreeOptionsEnum.CHILDREN,
      label: TreeOptionsEnum.LABEL,
      disabled: TreeOptionsEnum.DISABLED,
      value: TreeOptionsEnum.KEY
    })
  },
  highlightCurrent: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  defaultExpandedKeys: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  indent: {
    type: Number,
    default: 16
  },
  icon: {
    type: String
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  checkOnClickNode: {
    type: Boolean,
    default: false
  },
  currentNodeKey: {
    type: definePropType([String, Number])
  },
  accordion: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: definePropType(Function)
  },
  perfMode: {
    type: Boolean,
    default: true
  }
});
const treeNodeProps = buildProps({
  node: {
    type: definePropType(Object),
    default: () => mutable(EMPTY_NODE)
  },
  expanded: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  current: {
    type: Boolean,
    default: false
  },
  hiddenExpandIcon: {
    type: Boolean,
    default: false
  }
});
const treeNodeContentProps = buildProps({
  node: {
    type: definePropType(Object),
    required: true
  }
});
const NODE_CLICK = "node-click";
const NODE_EXPAND = "node-expand";
const NODE_COLLAPSE = "node-collapse";
const CURRENT_CHANGE = "current-change";
const NODE_CHECK = "check";
const NODE_CHECK_CHANGE = "check-change";
const NODE_CONTEXTMENU = "node-contextmenu";
const treeEmits = {
  [NODE_CLICK]: (data, node) => data && node,
  [NODE_EXPAND]: (data, node) => data && node,
  [NODE_COLLAPSE]: (data, node) => data && node,
  [CURRENT_CHANGE]: (data, node) => data && node,
  [NODE_CHECK]: (data, checkedInfo) => data && checkedInfo,
  [NODE_CHECK_CHANGE]: (data, checked) => data && typeof checked === "boolean",
  [NODE_CONTEXTMENU]: (event, data, node) => event && data && node
};
const treeNodeEmits = {
  click: (node) => !!node,
  toggle: (node) => !!node,
  check: (node, checked) => node && typeof checked === "boolean"
};

export { CURRENT_CHANGE, NODE_CHECK, NODE_CHECK_CHANGE, NODE_CLICK, NODE_COLLAPSE, NODE_CONTEXTMENU, NODE_EXPAND, ROOT_TREE_INJECTION_KEY, SetOperationEnum, TreeOptionsEnum, treeEmits, treeNodeContentProps, treeNodeEmits, treeNodeProps, treeProps };
//# sourceMappingURL=virtual-tree.mjs.map
