<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-3 sticky-top">
    <div class="container">
      <a class="navbar-brand text-danger fw-bold" href="#">NIFTAZ AFRICA ELECTRONICS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <form class="d-flex mx-auto w-50">
          <input class="form-control me-2" type="search" placeholder="Search electronics, brands..." />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>

        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="btn btn-danger btn-sm me-3" href="#/deals">Deals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#/account">
              <i class="bi bi-person-circle fs-4"></i>
            </a>
          </li>
          <li class="nav-item position-relative">
            <a class="nav-link text-secondary" href="#/cart">
              <i class="bi bi-cart fs-4"></i>
              <span class="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">2</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
