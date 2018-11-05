<template>
  <div class="student-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Profile</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>First Name:</label> 
        <input type="text" class="form-control" v-model="firstName">
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" v-model="lastName">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email">
      </div>      
      <div class="form-group">
        <label>Phone Number:</label>
        <input type="text" v-model="phoneNumber">
      </div>
      <div class="form-group">
        <label>Bio:</label>
        <input type="text" v-model="shortBio">
      </div>
      <div class="form-group">
        <label>LinkedIn Url:</label>
        <input type="text" v-model="linkedInUrl">
      </div>
      <div class="form-group">
        <label>Twitter Handle:</label>
        <input type="text" v-model="twitterHandle">
      </div>
      <div class="form-group">
        <label>Personal Blog:</label>
        <input type="text" v-model="personalBlog">
      </div>
      <div class="form-group">
        <label>Onlne Resume:</label>
        <input type="text" v-model="onlineResumeUrl">
      </div>
      <div class="form-group">
        <label>Github:</label>
        <input type="text" v-model="githubUrl">
      </div>
      <div class="form-group">
        <label>Photo:</label>
        <input type="text" v-model="photo">
      </div>
      <input type="submit" value="Submit">
    </form>
    <button v-on:click="deleteStudent(student)">Delete Resume</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      shortBio: "",
      linkedInUrl: "",
      twitterHandle: "",
      personalBlog: "",
      onlineResumeUrl: "",
      githubUrl: "",
      photo: "",
      errors: []
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/students/" + this.$route.params.id)
      .then(response => {
        this.student = response.data;
        this.firstName = response.data.first_name;
        this.lastName = response.data.last_name;
        this.email = response.data.email;
        this.phoneNumber = response.data.phone_number;
        this.shortBio = response.data.short_bio;
        this.linkedInUrl = response.data.linkedIn_url;
        this.twitterHandle = response.data.twitter_handle;
        this.personalBlog =
          response.data.personal_blog_website_url;
        this.onlineResumeUrl = response.data.online_resume_url;
        this.githubUrl = response.data.github_url;
        this.photo = response.data.photo;
      });    
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        phone_number: this.phoneNumber,
        short_bio: this.shortBio,
        linkedInUrl: this.linkedIn_url,
        twitterHandle: this.twitterHandle,
        personal_blog_website_url: this.personalBlog,
        online_resume_url: this.onlineResumeUrl,
        github_url: this.githubUrl,
        photo: this.photo
      };
      axios
        .patch(
          "http://localhost:3000/api/students/" + this.$route.params.id,
          params
        )
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    deleteStudent: function(student) {
      axios
        .delete("http://localhost:3000/api/students/" + this.$route.params.id)
        .then(response => {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem("jwt");
        });
    },
  }
};  
</script>
