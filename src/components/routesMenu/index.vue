<template>
    <div id='menu'>
      <span v-for="item in menus" :key="item.name">
        <span v-if="!item.hidden">
          <router-link :to="item.path">{{item.name}}</router-link>&nbsp;
          &nbsp;
        </span>
      </span>
    </div>
</template>

<script setup lang="ts">
  import { routes } from '@/router'
  const menus = routes;
</script>


<style>
  #menu {
    margin: 5px 10px;
  }
</style>
