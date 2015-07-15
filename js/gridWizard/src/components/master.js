(function(w) {
  gridWizardComponents.MasterComponent = function(el)
  {
    return new Ractive({
      el : el,
      template : '<div>{{#nodes}} {{>node}} {{/nodes}}</div>',
      //partials: { node: 'test {{NodeId}} {{NodeType}} {{#.Nodes}} {{>node}} {{/.Nodes}}' },
      components : gridWizardComponents
    });
  };
})(window);