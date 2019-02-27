<template lang="html">
  <div id="guests-list">
    <h3>Checked In Guests:</h3>
    <ul>
      <li v-for="guest in guests" v-if="guest.status === true">{{guest.lastName}}, {{guest.firstName}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GuestsList",
  props: ["guests"]
}
</script>

<style lang="css" scoped>
</style>
