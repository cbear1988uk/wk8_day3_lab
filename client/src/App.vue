<template>
  <div id="app">
    <guests-form />
    <guests-list :guests="guests" />
    <guests-grid :guests="guests" />
  </div>
</template>

<script>
import GuestsForm from './components/GuestsForm';
import GuestsList from './components/GuestsList';
import GuestsGrid from './components/GuestsGrid';
import {eventBus} from './main';

export default {
  name: 'app',
  data () {
    return {
      guests: []
    }
  },
  components: {
    GuestsForm,
    GuestsList,
    GuestsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    eventBus.$on('guest-deleted', id => this.deleteGuest(id))
    });
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/guests")
        .then(res => res.json())
        .then(guests => this.guests = guests);
    },
    deleteGuest(id){
      const index = this.guests.findIndex((guest) => guest_id === id)
      this.guest.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
