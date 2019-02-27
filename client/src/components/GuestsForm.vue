<template lang="html">
  <form id="sightings-form" v-on:submit="addGuest">
    <h1>Add a Guest</h1>
    <div class="formWrap">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="guest.firstName" />
    </div>
    <div class="formWrap">
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="guest.lastName" />
    </div>
    <div class="formWrap">
      <label for="email">Email Address:</label>
      <input type="text" id="emailName" v-model="guest.email" />
    </div>
    <div class="formWrap">
      <p>Status:</p>
      <label for="checkedIn">Checked In</label>
      <input type="radio" id="checkedIn" value="true"  v-model="guest.status" />
    </div>
    <div class="formWrap">
      <label for="checkedOut">Checked Out</label>
      <input type="radio" id="checkedOut" value="false"  v-model="guest.status" />
    </div>
    <input type="submit" value="Save" id="save" />
  </form>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "GuestsForm",
  data(){
    return {
      guest: {
        firstName: "",
        lastName: "",
        email: "",
        status: null
      }
    }
  },
  methods: {
    addGuest(e){
      e.preventDefault()

    fetch('http://localhost:3000/api/guests', {
      method: 'POST',
      body: JSON.stringify(this.guest),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => eventBus.$emit('guest-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
