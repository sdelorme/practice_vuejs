var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Input numbers below!",
      number1: 0,
      number2: 0,
      number3: 0,
      total: "",
      product: ""
    };
  },
  methods: {
    computeSum: function () {
      this.total = (parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3));
      console.log(this.total); 
    },
    computeProduct: function () {
      this.product = (parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3));
      console.log(this.product);
    }
  }
}
);