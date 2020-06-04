var suggestedTags = new Vue({
  el: "#suggestedTags",
  data: {
    suggestedTags: [],
  },
  mounted: function () {
    this.getSuggestedTags();
  },
  methods: {
    getSuggestedTags: function () {
      /* axios.get("https://992e9f95-caa1-40d5-9e91-d45672bf48d6.mock.pstmn.io/suggestedTags").then((response) => {
        console.log(response.data);
        
        this.suggestedTags = response.data;
      }); */
      this.suggestedTags = ["Zürich", "Samstag", "Electro"];
    }
  },
});
