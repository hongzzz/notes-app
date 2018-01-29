<template>
  <div id="app">
    <toolbar/>
    <note-list/>
    <editor/>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar'
  import Editor from '@/components/Editor'
  import NoteList from '@/components/NoteList'

  export default {
    name: 'App',
    components: {
      Toolbar,
      Editor,
      NoteList
    },
    created () {
      this.$store.dispatch('initNotes')
    }
  }
</script>

<style lang="less">
  html, body, #app {
    height: 100%;
  }

  #app {
    position: relative;
    overflow: hidden;
  }
</style>
