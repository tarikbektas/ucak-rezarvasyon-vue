import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFlyDetialsStore = defineStore('fly', () => {
  const gidisYeri = ref('istanbul');
  const varisYeri = ref('ankara');
  const gidisTarihi = ref('');
  const varisTarihi = ref('');
  const sinif = ref('');
  return { gidisYeri, varisYeri, gidisTarihi,varisTarihi,sinif }
})
