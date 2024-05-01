<script setup>
  defineProps({
    message: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <h1>Message from SiteCore:</h1>
  <p>{{ message }}</p>
</template>
