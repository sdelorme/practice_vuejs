/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello there",
      secret: "I like turtles",
      showSecret: false,
      colors: ["red","blue","green","black","white"],
      newColor: "",
    };
  },
  methods: {
    loudNoises: function (message) {
      this.message = "I DON'T KNOW WHAT WE'RE YELLING ABOUT!";
    },
    toggleSecret: function () {
      console.log("workingggggggg");
      this.showSecret = !this.showSecret;
    },
    showColors: function() {
      console.log(this.colors);
    },
    addColor: function() {
      this.colors.push(this.newColor);
      this.newColor = "";
    } 
  }
});