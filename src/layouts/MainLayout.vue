<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Calculadora
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container style="margin-top: 20px;">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>
<style>
  body {
    overflow: hidden;
  }
</style>