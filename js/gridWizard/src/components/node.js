(function(w) {
  gridWizardComponents.Node = Ractive.extend({
      isolated : true,
      template : '{{node.NodeType}}{{node.NodeId}} {{node.Nodes[0].NodeId}} {{#node.Nodes}}test<node node="{{NodeId}}"></node>{{/node.Nodes}}',
      components : {
        node : gridWizardComponents.Node
      },
      oncomplete: function()
      {
        console.log(this.data);
      }
    });
})(window);