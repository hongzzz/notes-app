<template>
  <div class='toolbar'>
    <i @click="addNote" class="icon add el-icon-plus"></i>
    <i @click="toggleFavorite" :class="favoriteClass" class="icon toggle"></i>
    <i @click="deleteNote" class="icon delete el-icon-delete"></i>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    computed: {
      activeNote () {
        return this.$store.getters.activeNote
      },
      favoriteClass () {
        let flag = false
        if (this.activeNote.favorite) {
          flag = true
        }
        return {
          'el-icon-star-off': !flag,
          'el-icon-star-on': flag
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      addNote () {
        this.$store.dispatch('addNote')
      },
      toggleFavorite () {
        this.$store.dispatch('toggleFavorite')
      },
      deleteNote () {
        this.$store.dispatch('deleteNote')
      }
    }
  }
</script>

<style lang="less">
  .toolbar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5%;
    background: #409EFF;
    .icon {
      margin: 30px 0;
      width: 100%;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      color: #fff;
    }
  }
</style>
