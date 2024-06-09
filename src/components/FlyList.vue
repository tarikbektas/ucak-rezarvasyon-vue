<script setup>
import FlyListItem from '@/components/FlyListItem.vue'
</script>

<template>
  <table>
    <thead>
        <tr>
          <th>Firma</th>
          <th>Kalkış</th>
          <th>Varış</th>
          <th>Fiyat</th>
          <th>#</th>
        </tr>
    </thead>
    <tbody>
        <FlyListItem></FlyListItem>
    </tbody>
  </table>
 
  
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }</style>
