<template>
  <b-container fluid class="d-flex align-items-center justify-content-center" style="height: 90vh">
    <b-card
      title="Tale of the tape"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mx-auto"
      style="width: 20rem;"
    >
      <div>
        <div>{{user.name}}</div>
        <div>{{user.lastName}}</div>
        <div>{{user.email}}</div>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  props: ["id"],

  computed: {
    ...mapGetters({
      getUser: types.GET_USER
    }),
    user() {
      return this.getUser(this.id);
    }
  }
};
</script>
