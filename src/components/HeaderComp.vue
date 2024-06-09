<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <router-link to="/">
          <a class="logo" href="#"> Firma Logo </a>
        </router-link>

        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/about">
            <a class="nav-link" href="#">Bilet</a>
          </router-link>
          <router-link to="/order">
            <a class="nav-link" href="#">Uçuş Detay</a>
          </router-link>
        </ul>
        <!-- Left links -->
      </div>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<style scoped>
nav {
  background-color: #fff;
  font-size: large;
  color: black;
}
.logo {
  color: black;
  font-size: 40px;
}
ul li a {
  color: black;
}
ul {
  margin-left: 20px;
}
</style>
