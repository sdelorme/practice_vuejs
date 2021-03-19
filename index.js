/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello there,",
    };
  },
  methods: {
    loudNoises: function (message) {
      this.message = "I DON'T KNOW WHAT WE'RE YELLING ABOUT!";
    }
  } 
});