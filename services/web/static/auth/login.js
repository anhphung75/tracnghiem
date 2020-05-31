var menu_left = new Vue({
  el: "#menu_left",
  delimiters: ["{`", "`}"],
  data() {
    return {
      isOpen: true,
      menu: 'menu test',
    };
  },
})

var webapp = new Vue({
  el: "#webapp",
  delimiters: ["{`", "`}"],
  data() {
    return {
      app: 'app test'
    };
  },
})