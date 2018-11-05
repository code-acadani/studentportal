<template>
  <div class="capstone-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Capstone</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div> 
      <div class="form-group">
        <label>Description:</label>
        <input type="text" v-model="description">
      </div>
      <div class="form-group">
        <label>Url:</label>
        <input type="text" v-model="url">
      </div>
      <div class="form-group">
        <label>Screenshot:</label>
        <input type="text" v-model="screenshot">
      </div>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "",
      description: "",
      url: "",
      screenshot: "",
      errors: []
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/capstones/" + this.$route.params.id)
      .then(response => {
        this.capstone = response.data;
        this.name = response.data.name;
        this.description = response.data.description;
        this.url = response.data.url;
        this.screenshot = response.data.screenshot;
      });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        url: this.url,
        screenshot: this.screenshot,
      };
      axios
        .patch(
          "http://localhost:3000/api/capstones/" + this.$route.params.id,
          params
        )
        .then(response => {
          this.$router.push("/capstones");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
