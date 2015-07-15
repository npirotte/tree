(function(w) {
  gridWizardComponents.Container = Ractive.extend({
      //isolated : true,
      template : '<div id="{{node.NodeId}}" class="container">{{#node.Nodes}}{{>node}}{{/node.Nodes}}</div>',
      oncomplete: function()
      {
        console.log(this);
      }
    });
})(window);