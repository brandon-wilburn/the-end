
var models = document.getElementsByClassName("model");
console.log(models);
// spinMe();
console.log(models.length);

for (i=0; i<models.length; ++i) {
  models[i].addEventListener("mouseenter", spinMe, false);
  // console.log("addEventListener");
  console.log(models[i]);
}

function spinMe(event) {
  console.log("Spin is working");
  console.log(event);
  console.log(event.target);
}