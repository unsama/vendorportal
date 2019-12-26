<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <side-bar />
    <div class="container-fluid">
      <div class="row">
        <div class=""></div>
        <nav class="col-12 mb-1 navbar navbar-expand-lg navbar-dark  lighten-1">
          <div class="container-fluid">
            <button type="button" class="btn-sm btn-link" @click="toggle" id="sidebarCollapse">
              <span><fa :icon="['fas', 'bars']"/></span>
            </button>
          </div>
          <a class="navbar-brand" href="#">Vendor</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent-555" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto nav-flex-icons">
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light"> 1 <fa :icon="['fas', 'envelope']" /> </a>
              </li>
              <li class="nav-item avatar dropdown">
                <a id="navbarDropdownMenuLink-55" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="rounded-circle z-depth-0 img32" alt="avatar image" />
                </a>
                <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-55">
                  <p class="dropdown-item" @click="Logout">Logout</p>
                  <!-- <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>-->
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <nuxt class="col-12" />
      </div>
    </div>
  </div>
</template>

<script>
import consola from 'consola'
import sidebar from '~/components/sidebar/vendor'
export default {
  components: {
    'side-bar': sidebar
  },

  data() {
    return {
      // name: this.$store.state.user.displayName,
      name: 'Name',
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.$store.dispatch('ToggleSidebar')
    },
    Logout() {
      const { $store: store, $router: router } = this
      store
        .dispatch('signOut')
        .then(() => router.push('/login'))
        .catch((e) => {
          consola.error(e)
        })
    }
  }
}
</script>
<style scoped>
.img32 {
  height: 32px;
}
.wrapper {
  display: flex;
  /*width: 100%;*/
  align-items: stretch;
}
</style>
