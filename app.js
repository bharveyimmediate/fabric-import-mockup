var form = new Vue({
  el: 'form',
  data: function() {
    return {
      articles: [
        {
          id: 1,
          title: "20 sights to see in 2020",
          issue: "January 2020",
          category: -1,
          removed: false,
        },
        {
          id: 2,
          title: "Buzz Aldrin: still aiming high at 90",
          issue: "January 2020",
          category: -1,
          removed: false,
        },
        {
          id: 3,
          title: "Infrared Universe: The legacy of the Spitzer Space Telescope",
          issue: "January 2020",
          category: -1,
          removed: false,
        },
        {
          id: 4,
          title: "Two centuries of discovery: The Royal Astronomical Society turns 200",
          issue: "January 2020",
          category: -1,
          removed: false,
        },
        {
          id: 5,
          title: "Explainer: new tech for keeping warm",
          issue: "January 2020",
          category: -1,
          removed: false,
        }
      ],
      showValidationErrors: false,
      isExporting: false,
    }
  },
  methods: {
    updateCategory: function(event, articleId) {

      var value = event.target.value;

      this.articles = this.articles.map(function(a) {

        if (a.id === articleId) {
          a.category = value;
        }

        return a;
      });
    },

    handleSubmit: function() {

      this.showValidationErrors = false;

      // if the form passes validation
      if (this.validate()) {

        // fake the exporting state
        this.isExporting = true;

        setTimeout(function() {

          // redirect to the success page
          window.location.href = "success.html";
        }, 2000);




      // if the form doesn't validate
      } else {

        this.showValidationErrors = true;
      }

      console.log('validate', this.validate());
    },

    validate: function() {

      return this.articles.every(function(a) {
        return !a.removed && a.category != -1;
      });
    },

    remove: function(articleId) {
      this.articles = this.articles.map(function(a) {

        if (a.id === articleId) {
          a.removed = true;
        }

        return a;
      });
    },

    undoRemove: function(articleId) {
      this.articles = this.articles.map(function(a) {

        if (a.id === articleId) {
          a.removed = false;
        }

        return a;
      });
    },

    numTotalArticles: function() {
      return this.articles.filter(function(a) {
        return !a.removed;
      }).length;
    },

    numReadyArticles: function() {
      return this.articles.filter(function(a) {
        return !a.removed && a.category != -1;
      }).length;
    }
  }
});
