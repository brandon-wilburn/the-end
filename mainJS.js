AFRAME.registerComponent('model', {
    schema: {
        color: {type: 'color', default:"rgb(255,255,255)"}
    },
    init: function () {
        this.el.addEventListener('model-loaded', this.update.bind(this));
      },
      update: function () {
        var mesh = this.el.getObject3D('mesh');
        var data = this.data;
        if (!mesh) { return; }
        mesh.traverse(function (node) {
          if (node.isMesh) {
            node.material.color = new THREE.Color(255, 255, 255);
            node.material.needsUpdate = true;
          }
        });
      }
});