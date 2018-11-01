<template>
  <div class="student-show">

    <h1>{{ student.first_name }} {{student.last_name}}</h1>
    <img :src="student.photo">
    <div>
      <h2>Email: {{student.name}}</h2>
      <h2>Phone Number: {{student.phone_number}}</h2> 
      <h2>Bio: {{student.short_bio}}</h2>
      <a>LinkedIn: href="{{student.linkedIn_url}}"</a> |
      <a>Twitter: href="{{student.twitter_handle}}"</a> |
      <a>Blog: :href="{{student.personal_blog_website_url}}"</a> |
      <a>Resume: :href{{student.online_resume_url}}</a> |
      <a>Github: :href="{{student.github_url}}"</a>
    </div>



    <!-- <h1>{{ message }}</h1>
    <div>
      <h2>Name: {{capstone.name}}</h2>
      <h2>Description: {{capstone.description}}</h2> 
      <img :src="capstone.screenshot">
      <a :href="capstone.url">Capstone Projects</a>
    </div> -->
  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        message: "Capstones",
        student: {},
        capstones: {}
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/capstones/" + this.$route.params.id).then(response => {
        this.capstones = response.data;
      });
      axios.get("http://localhost:3000/api/students/" + this.$route.params.id).then(response => {
        this.student = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>