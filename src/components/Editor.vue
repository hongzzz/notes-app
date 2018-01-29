<template>
  <div class='editor'>
    <textarea rows="50" :value="activeNoteText" @input="editNote" class="text"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Editor',
    computed: {
      activeNoteText () {
        return this.$store.getters.activeNote.content
      }
    },
    methods: {
      editNote (e) {
        this.$store.dispatch('editNote', e.target.value)
      }
    }
  }
</script>

<style lang="less">
  .editor {
    position: absolute;
    right: 0;
    left: 25%;
    top: 0;
    bottom: 0;
    height: 100%;
    .text {
      height: 100%;
      width: 100%;
      font-size: large;
      padding: 10px;
    }
  }
</style>
