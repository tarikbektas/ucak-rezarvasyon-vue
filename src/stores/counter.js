import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFlyDetials = defineStore('fly', () => {
  const gidisYeri = ref('İstanbul');
  const varisYeri = ref('Ankara');
  const gidisTarihi = ref('');
  const varisTarihi = ref('');
  const sinif = ref('');
  function getData(gidisYeri,varisYeri,gidisTarihi,varisTarihi,sinif) {
    gidisYeri.value = gidisYeri,
    varisYeri.value=varisYeri,
    gidisTarihi.value =gidisTarihi,
    varisTarihi.value = varisTarihi,
    sinif.value=sinif
  }

  return { gidisYeri,varisYeri,gidisTarihi,varisTarihi,sinif,getData }
})
