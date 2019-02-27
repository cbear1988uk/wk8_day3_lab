<template lang="html">
  <div id ="guestGrid">
    <h4>All Guests:</h4>
    <div class="guest" v-for="guest in guests" method="post">
      <h2>{{guest.lastName}}, {{guest.firstName}}</h2>
      <p>{{guest.email}}</p>
      <p>Status: {{guest.status ? "Checked In":"Checked Out"}}</p>
      <button v-on:click="deleteGuest(guest._id)">Delete Guest</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main';
export default {
  data(){
    return {

    }
  },
  name: "GuestsGrid",
  props: ["guests"],
  filters: {

  },
  methods: {

    deleteGuest(id){
      fetch('http://localhost:3000/api/guests/' + id, {
        method: 'DELETE'
      })
      .then(() => eventBus.$emit('guest-deleted', id))
    }
  }
}


</script>


<style lang="css" scoped>
#guestsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}

h4 {
  font-size: 35px;
}

.sighting {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #a00829;

}
</style>
