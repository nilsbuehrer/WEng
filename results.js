Vue.component("star", {
  props: ['starCount', 'eventId'],
  data: function () {
    return {
      stared: false,
      starCount: this.starCount,
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
    toggleStar: function (eventId) {
      console.log('halloooo');

      if (this.stared) {
        this.starCount--;
      } else {
        this.starCount++;
      }
      this.stared = !this.stared;

      /* axios.post('https://992e9f95-caa1-40d5-9e91-d45672bf48d6.mock.pstmn.io/results/staredEvents', {
        eventId: eventId,
        stared: this.stared,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */
    },
  }
});

var results = new Vue({
  el: "#results",
  data: {
    results: [],
    selectedEvent: null,
    selectedTags: ["Schaffhausen", "Funk", "DJ ZHAW"],
  },
  mounted: function () {
    this.getResults();
  },
  methods: {
    getResults: function () {
      /* axios.get("https://992e9f95-caa1-40d5-9e91-d45672bf48d6.mock.pstmn.io/results").then((response) => {
        console.log(response.data);
        
        this.results = response.data;
      }); */
      this.results = [
        {
        eventId: 123,
        image: "party1",
        likeCount: 73,
        title: "2 YEARS ENDSTATION",
        location: "Space Monkey, Zürich",
        date: "Samstag, 4. April 2020",
        time: "10:00 - 22:00 Uhr",
        type: "Party",
        genre: "Tech House",
        acts: ["DJ ZHAW", "Workinprogress", "Onur"],
        price: "20.-",
        description: "Happy birthday Endstation! Die SpaceMonki-Marke für erweitertes Raven kriegt die 2 auf den Rücken.",
        ticketLink: "https://ticketcorner.ch/",
        },
        {
        eventId: 546,
        image: "party2",
        likeCount: 125,
        title: "Glitter Gwitter",
        location: "Plaza Klub, Zürich",
        date: "Samstag, 4. April 2020",
        time: "22:00 - 03:00 Uhr",
        type: "",
        genre: "",
        acts: [],
        price: "",
        description: "",
        ticketLink: "",
        },
        {
        eventId: 789,
        image: "party3",
        likeCount: 54,
        title: "Cory Wong",
        location: "Moods, Zürich",
        date: "Samstag, 4. April 2020",
        time: "20:00 - 23:00 Uhr",
        type: "Konzert",
        genre: "Funk",
        acts: ["Cory Wong"],
        price: "25.-",
        description: "",
        ticketLink: "https://ticketcorner.ch/",
        },
        {
        eventId: 123,
        image: "party1",
        likeCount: 73,
        title: "2 YEARS ENDSTATION",
        location: "Space Monkey, Zürich",
        date: "Samstag, 4. April 2020",
        time: "10:00 - 22:00 Uhr",
        type: "Party",
        genre: "Tech House",
        acts: ["DJ ZHAW", "Workinprogress", "Onur"],
        price: "20.-",
        description: "Happy birthday Endstation! Die SpaceMonki-Marke für erweitertes Raven kriegt die 2 auf den Rücken.",
        ticketLink: "https://ticketcorner.ch/",
        },
        {
        eventId: 546,
        image: "party2",
        likeCount: 125,
        title: "Glitter Gwitter",
        location: "Plaza Klub, Zürich",
        date: "Samstag, 4. April 2020",
        time: "22:00 - 03:00 Uhr",
        type: "",
        genre: "",
        acts: [],
        price: "",
        description: "",
        ticketLink: "",
        },
        {
        eventId: 789,
        image: "party3",
        likeCount: 54,
        title: "Cory Wong",
        location: "Moods, Zürich",
        date: "Samstag, 4. April 2020",
        time: "20:00 - 23:00 Uhr",
        type: "Konzert",
        genre: "Funk",
        acts: ["Cory Wong"],
        price: "25.-",
        description: "",
        ticketLink: "https://ticketcorner.ch/",
        },
        ]
    },
    selectEvent: function(eventId) {
      this.selectedEvent = this.results.filter(obj => {
        return obj.eventId === eventId
      })[0];
    },
    removeTag: function (tag) {
      console.log("lahdsföljaewf");
      const index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      }
      console.log(this.selectedTags);
    },
  },
});
