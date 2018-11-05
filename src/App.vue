<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Resume</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" ><router-link to="/login">Login</router-link></a>
            <a class="nav-item nav-link" ><router-link :to="'/students/' + isStudent()">View Profile</router-link></a>
            <a class="nav-item nav-link" ><router-link :to="'/students/' + isStudent() + '/edit'">Edit Resume</router-link></a>
            <a class="nav-item nav-link"><router-link to="/logout">Logout</router-link></a>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>

<script>
export default {
  methods: {
    isStudent: function() {
      var studentId = localStorage.getItem("student_id");
      if (studentId) {
        return studentId;
      }
      return false;
    }
  },
  computed: {}
};
</script>
