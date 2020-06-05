Vue.component("star", {
  props: ['count', 'eventId'],
  data: function () {
    return {
      stared: false,
      starCount: this.count,
      id: this.eventId,
    }
  },
  template: `
    <div class="star">
      <span class="star__count">{{ this.starCount }}</span>
      <img v-if="!this.stared" v-on:click="toggleStar" class="star__icon" src="assets/icons/star_black.svg" />
      <img v-if="this.stared" v-on:click="toggleStar" class="star__icon" src="assets/icons/star_gold.svg" />
    </div>
    `,
  methods: {
    toggleStar: function () {

      if (this.stared) {
        this.starCount--;
      } else {
        this.starCount++;
      }
      this.stared = !this.stared;

      axios.post('https://992e9f95-caa1-40d5-9e91-d45672bf48d6.mock.pstmn.io/staredEvents', {
        "eventId": this.id,
        "stared": this.stared,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  }
});

Vue.component('navbar', {
  props: ['logo'],
  data: function () {
    return {
      showLogo: this.logo,
    }
  },
  template: `
  <header class="hdr">
    <div class="social">
      <a href="https://facebook.com/woane"
        ><img class="social__logo" src="assets/img/facbook.png"
      /></a>
      <a href="https://instagram.com/woane"
        ><img class="social__logo" src="assets/img/instagram.png"
      /></a>
      <a href="https://twitter.com/woane"
        ><img class="social__logo" src="assets/img/twitter.png"
      /></a>
    </div>
    <a v-if="this.showLogo" href="index.html"><h1 class="hdr__title">woane.ch</h1></a>
    <div class="acc">
      <a class="acc__item">Registrieren</a>
      <a class="acc__item acc__item--bold">Login</a>
    </div>
  </header>
    `,
});

var app = new Vue({
  el: "#app",
  data: {
    results: [],
    selectedEvent: null,
    selectedTags: [],
    suggestedTags: [],
    tempTag: "",
  },
  mounted: function () {
    this.getSuggestedTags();
  },
  methods: {
    getResults: function () {
      axios.get("https://992e9f95-caa1-40d5-9e91-d45672bf48d6.mock.pstmn.io/results", {
        params: {
          tags: this.selectedTags
        }
      })
      .then((response) => {
        this.results = response.data;
      });
    },
    selectEvent: function(eventId) {
      this.selectedEvent = this.results.filter(obj => {
        return obj.eventId === eventId
      })[0];
    },
    removeTag: function (tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      }
      this.getResults();
    },
    addTag: function (tag) {
      if(tag !== "") {
        this.selectedTags.push(tag);
        this.tempTag = "";
      }
      this.getResults();
    },
    getSuggestedTags: function () {
      axios.get("https://992e9f95-caa1-40d5-9e91-d45672bf48d6.mock.pstmn.io/suggestedTags").then((response) => {
        this.suggestedTags = response.data;
      });
    }
  },
});