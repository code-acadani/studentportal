<template>
  <div class="student-show">
    <!-- student information -->
    <h1>{{ student.first_name }} {{student.last_name}}</h1>
    <img :src="student.photo">
    <div>
      <h3>Email: {{student.email}}</h3>
      <h3>Phone Number: {{student.phone_number}}</h3> 
      <h3>Bio: {{student.short_bio}}</h3>
      <a :href="student.linkedIn_url"> LinkedIn </a> |
      <a :href="student.twitter_handle">Twitter </a> |
      <a :href="student.personal_blog_website_url"> {{student.first_name}}'s Blog </a> |
      <a :href="student.online_resume_url">Resume </a> |
      <a :href="student.github_url">Github </a>
    </div>
    <!-- end student information -->


    <!-- education information -->
    <h1>Education</h1>
    <div v-for="education in student.educations">
      <h3>Name: {{education.university_name}}</h3>
      <h4>Degree: {{education.degree}}</h4> 
      <h4>Start Date: {{education.start_date}} through {{education.end_date}}</h4>
      <h4>Description: {{education.details}}</h4> 
    </div>
    <!-- end education information -->

    <!-- experience information -->
    <h1>Work Experience</h1>
    <div v-for="experience in student.experiences">
      <h3>Job: {{experience.company_name}}</h3>
      <h4>Job title: {{experience.job_title}}</h4> 
      <h4>Description: {{experience.details}}</h4>
      <h4>Start Date: {{experience.start_date}} through {{experience.end_date}}</h4>
    </div>
    <!-- end experience information -->

    <!-- skills information -->
    <h1>Skills</h1>
    <div v-for="skill in student.skills">
      <h3>Skills: {{skill.name}}</h3>
    </div>
    <!-- end skills information -->

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