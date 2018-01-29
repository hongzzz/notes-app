<template>
  <div class='note-list'>
    <div class="button-wrapper">
      <el-radio-group v-model="showAll" class="group">
        <el-radio-button label="1">All Notes</el-radio-button>
        <el-radio-button label="2">Favorites</el-radio-button>
      </el-radio-group>
    </div>
    <ul class="list">
      <li v-for="(note,index) in notes" :key="index">
        <div class="note-wrapper" :class="{'active': note === activeNote}" @click="setActiveNote(note)">
          <div class="text">{{note.content}}</div>
          <div class="time">{{new Date(note.time).toUTCString()}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NoteList',
    computed: {
      notes () {
        if (this.showAll === '1') {
          return this.$store.getters.notes
        } else {
          return this.$store.getters.favoriteNotes
        }
      },
      activeNote () {
        return this.$store.getters.activeNote
      }
    },
    data () {
      return {
        showAll: '1'
      }
    },
    methods: {
      setActiveNote (note) {
        this.$store.dispatch('setActiveNote', note)
      }
    }
  }
</script>

<style lang="less">
  .note-list {
    position: absolute;
    left: 5%;
    top: 0;
    bottom: 0;
    width: 20%;
    cursor: pointer;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 2px solid #409EFF;
    .button-wrapper {
      display: flex;
      width: 100%;
      height: 80px;
      vertical-align: center;
      .group {
        margin: auto;
      }
    }
    .list {
      position: relative;
      width: 100%;
      .note-wrapper {
        position: relative;
        width: 100%;
        height: 50px;
        padding: 10px;
        .text {
          margin-left: 5px;
          height: 35px;
          font-size: 17px;
          line-height: 30px;
          overflow: hidden;
        }
        .time {
          position: absolute;
          bottom: 8px;
          font-size: 10px;
          color: #909399;
        }
        &.active {
          background: #EBEEF5;
        }
      }
    }
  }
</style>
