/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello there",
      secret: "I like turtles",
      showSecret: false,
      colors: ["red","blue","green","black","white"],
      newColor: "",
      placesToVisit: []
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
    },
    loadPlaces: function() { 
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.placesToVisit = response.data;
        });
    }
  },
  created: function () {
    this.loadPlaces();
  }
});