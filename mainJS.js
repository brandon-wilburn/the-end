// console.log("JS Loaded");

// var tex = new THREE.TextureLoader().load('assets/whiteTexture.png');
// tex.flipY = false; // for glTF models.
// // console.log(tex);

// var thisModel = document.getElementsByClassName('model');
// // console.log(thisModel);

// for (i=0; i<thisModel.length; ++i) {
//     thisModel[i].addEventListener("loaded", plantTexture(), false);
// }

// function plantTexture(event) {
//     // console.log("Loaded a model !");
//     // console.log(event);
// //     event.detail.model.traverse(function(node){
// //         if (node.isMesh) node.material.map = tex;
// //     });
// // }

// // thisTexture[i].addEventListener('model-loaded', function (e {
// //     e.detail.model.traverse(function(node) {
// //         if (node.isMesh) node.material.map = tex;
// //     });
// // });
// }

// AFRAME.registerComponent('cube-env-map', {
//     schema: {
//       path: {default: ''},
//       extension: {default: 'jpg'},
//       format: {default: 'RGBFormat'},
//       enableBackground: {default: false}
//     },
  
//     init: function () {
//       const data = this.data;
  
//       this.texture = new THREE.CubeTextureLoader().load([
//         data.path + 'posx.' + data.extension, data.path + 'negx.' + data.extension,
//         data.path + 'posy.' + data.extension, data.path + 'negy.' + data.extension,
//         data.path + 'posz.' + data.extension, data.path + 'negz.' + data.extension
//       ]);
//       this.texture.format = THREE[data.format];
  
//       if (data.enableBackground) {
//         this.el.sceneEl.object3D.background = this.texture;
//       }
  
//       this.applyEnvMap();
//       this.el.addEventListener('object3dset', this.applyEnvMap.bind(this));
//     },
  
//     applyEnvMap: function () {
//       const mesh = this.el.getObject3D('mesh');
//       const envMap = this.texture;
  
//       if (!mesh) return;
  
//       mesh.traverse(function (node) {
//         if (node.material && 'envMap' in node.material) {
//           node.material.envMap = envMap;
//           node.material.needsUpdate = true;
//         }
//       });
//     }
//   });


AFRAME.registerComponent('model', {
    schema: {
        // color: {type: 'color', default: '#FFF'}
        color: {type: 'color', default:"rgb(255,255,255)"}
    },
    init: function () {
        this.el.addEventListener('model-loaded', this.update.bind(this));
      },
      update: function () {
        var mesh = this.el.getObject3D('mesh');
        // console.log(mesh);
        var data = this.data;
        if (!mesh) { return; }
        mesh.traverse(function (node) {
            // console.log(node.material);
          if (node.isMesh) {
            // node.material.color = new THREE.Color(0xffffff);
            node.material.color = new THREE.Color(255, 255, 255);
            console.log(node.material.color);
            // node.material. = data;
            // node.material.transparent = data < 1.0;
            node.material.needsUpdate = true;
          }
        });
      }
});