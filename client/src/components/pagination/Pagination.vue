<template>
  <div class="pagination">
    <div class="pagination__left">
      <a href="#" v-if="hasPrev()" @click=changePage(prevPage)>
        {{ $t('pagination.prev') }}
      </a>
    </div>
    <div class="pagination__mid">
      <span>{{ quantity  }} of {{ total }} </span>
      <ul>
        <li v-for="page in pages">
          <a href="#" @click="changePage(page)" :class="{ current: current === page }">{{ page }}</a>
        </li>
      </ul>
    </div>
    <div class="pagination__right">
      <a href="#" v-if="hasNext()" @click=changePage(nextPage)>
      {{ $t('pagination.next') }}
    </a>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      current: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 10
      },
      perPage: {
        type: Number,
        default: 2
      },
      pageRange: {
        type: Number,
        default: 2
      }
    },
    computed: {
      pages: function() {
        const pages = [];
        for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
          pages.push(i);
        }
        return pages;
      },
      rangeStart: function() {
        const start = this.current - this.pageRange;
        return (start > 0) ? start : 1
      },
      rangeEnd: function() {
        const end = this.current + this.pageRange;
        return (end < this.totalPages) ? end : this.totalPages
      },
      totalPages: function() {
        return Math.ceil(this.total / this.perPage)
      },
      nextPage: function() {
        return this.current + 1
      },
      prevPage: function() {
        return this.current - 1
      },
      quantity: function() {
        const amount = this.current * this.perPage
        if(amount > this.total) {
          return this.total
        }
        return amount
      }
    },
    methods: {
      hasPrev: function() {
        return this.current > 1
      },
      hasNext: function() {
        return this.current * this.perPage < this.total
      },
      changePage: function(page) {
        this.$emit('change', page)
      }
    }
  }
</script>

<style></style>
