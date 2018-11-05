<template>
  <div class="student-show">
    <!-- student information -->
    <h1>{{ student.first_name }} {{student.last_name}}</h1>
    <img :src="student.photo">
    <div>
      <h2>Email: {{student.email}}</h2>
      <h2>Phone Number: {{student.phone_number}}</h2> 
      <h2>Bio: {{student.short_bio}}</h2>
      <a :href="student.linkedIn_url"> LinkedIn </a> |
      <a :href="student.twitter_handle">Twitter </a> |
      <a :href="student.personal_blog_website_url"> {{student.first_name}}'s Blog </a> |
      <a :href="student.online_resume_url">Resume </a> |
      <a :href="student.github_url">Github </a>
    </div>
    <!-- end student information -->


    <!-- capstone information -->
    <h1>{{ message }}</h1>
    <div v-for="capstone in student.capstones">
      <h2>Name: {{capstone.name}}</h2>
      <router-link :to="'/capstones/' + capstone.id + '/edit'">
      Edit Capstone</router-link>
      <h2>Description: {{capstone.description}}</h2> 
      <img :src="capstone.screenshot">
      <br>
      <a :href="capstone.url">Capstone Projects</a>
    </div>
    <!-- end capstone information -->
  </div>
</template>

<style>
img {
  width: 50%;
  height: 50%;
}
</style>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        message: "Capstones",
        student: {},
        capstones: []
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/students/" + this.$route.params.id).then(response => {
        this.student = response.data;
      });
    },
    methods: {},
    computed: {}
  };
</script>