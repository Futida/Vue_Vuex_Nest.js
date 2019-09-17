<template>
  <div id="root">
    <b-navbar toggleable="md" type="dark" variant="dark" class="justify-content-start">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="brand d-flex ml-2 mr-2" to="/" left>
        <img src="./static/img/vue.png" />
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-for="item in menuIcons" :key="item.title" :to="item.path">
            <font-awesome-icon :icon="item.icon" />
            {{ $t(`${item.title}`) }}
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-dropdown id="dropdown-1" size="sm" :no-caret="true" variant="light" right>
            <template slot="button-content">
              <font-awesome-icon size="lg" icon="language" />
            </template>
            <b-dropdown-item
              v-for="entry in languages"
              :key="entry.icon"    
              @click="changeLocale(entry.language)"
            >
              <flag :iso="entry.flag" :squared="false" />
              {{entry.title}}
            </b-dropdown-item>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { i18n } from "./plugins/localize";

export default {
  data() {
    return {
      sideNav: false,
      menuIcons: [
        { icon: "user", title: "nav.createUser", path: "/create" },
        { icon: "users", title: "nav.listUsers", path: "/list-users" }
      ],
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "ru", language: "ru", title: "Russian" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss">
@import "app";

#root {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  .navbar-brand {
    width: 38px;
    height: 38px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

a {
  color: black;
}
</style>
