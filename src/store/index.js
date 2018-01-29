import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

const getters = {
  notes: state => state.notes,
  favoriteNotes: state => state.notes.filter((note) => note.favorite),
  activeNote: state => state.activeNote
}

const mutations = {
  // 初始化notes数据
  SET_NOTES (state) {
    state.notes = JSON.parse(localStorage.getItem('notes')) || []
  },
  SAVE_NOTES (state) {
    localStorage.setItem('notes', JSON.stringify(state.notes || []))
  },
  ADD_NOTE (state) {
    const newNote = {
      content: 'new Note',
      time: +new Date(),
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_NOTE (state, text) {
    state.activeNote.content = text
    state.activeNote.time = new Date()
  },
  DELETE_NOTE (state, note) {
    let index = state.notes.indexOf(note)
    state.notes.splice(index, 1)
  },
  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },
  TOGGLE_FAVORITE (state) {
    if (state.activeNote) {
      state.activeNote.favorite = !state.activeNote.favorite
    }
  }
}

const actions = {
  initNotes ({commit}) {
    commit('SET_NOTES')
  },
  addNote ({commit}) {
    commit('ADD_NOTE')
    commit('SAVE_NOTES')
  },
  editNote ({commit}, text) {
    commit('EDIT_NOTE', text)
    commit('SAVE_NOTES')
  },
  deleteNote ({commit}, note) {
    commit('DELETE_NOTE', note)
    commit('SET_ACTIVE_NOTE', {})
    commit('SAVE_NOTES')
  },
  setActiveNote ({commit}, note) {
    commit('SET_ACTIVE_NOTE', note)
  },
  toggleFavorite ({commit}, note) {
    commit('TOGGLE_FAVORITE', note)
    commit('SAVE_NOTES')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
