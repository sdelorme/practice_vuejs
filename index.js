/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello there,",
      secret: "I like turtles",
      showSecret: false,
    };
  },
  methods: {
    loudNoises: function (message) {
      this.message = "I DON'T KNOW WHAT WE'RE YELLING ABOUT!";
    },
    toggleSecret: function () {
      console.log("workingggggggg");
      this.showSecret = !this.showSecret;
    }
  } 
});