<script setup>
import { useFlyDetialsStore } from "@/stores/flyDetials.js";
const flyDetials = useFlyDetialsStore();
import { VueToggles } from "vue-toggles";
import { Icon } from "@iconify/vue";
import FilterComp from '@/components/FilterComp.vue'
import FlyList from '@/components/FlyList.vue'
import BottomDetials from '@/components/BottomDetials.vue'
</script>
<template>
  <div class="main-fly-detials">
    <div class="fly-detials-top">
      <div class="main-fly-left">
        <div class="main-fly-left-item">
          Nereden
          <br />
          <p class="city-name">Ankara (CSF)</p>
        </div>

        <div class="main-fly-left-item" style="margin-left: 4vh">
          Nereye
          <br />
          <p class="city-name">İstanbul(ASF)</p>
        </div>
      </div>
      <div class="main-fly-right" style="margin-right: 40px">
        <div class="main-fly-right-item">
          Gidiş
          <br />
          <p class="city-name">12.12.2024</p>
        </div>
        <div class="main-fly-right-item">
          Dönüş
          <br />
          <p class="city-name">01.01.2025</p>
        </div>
        <div class="main-fly-right-item">
          Sınıf
          <br />
          <p class="city-name">Ekonomi</p>
        </div>
        <div class="main-fly-right-item">
          <p class="city-name"><v-btn variant="outlined"> Arama </v-btn></p>
        </div>
      </div>
    </div>
  </div>
  <div class="fly-toggle">
    <div class="toggle-text">CSF ---> ASF</div>
    <VueToggles
      :height="50"
      :width="200"
      uncheckedTextColor="black"
      checkedTextColor="black"
      checkedText="---->"
      uncheckedText="<----"
      checkedBg="#b4d455"
      fontSize="40"
      uncheckedBg="lightgrey"
      @click="value = !value"
    />
    <div class="toggle-text">ASF ---> CSF</div>
  </div>
  <div class="row mt-4" style="margin: auto; width: 200vh">
    <FilterComp></FilterComp>
    <div class="col-8" style="background-color: ">
        <FlyList></FlyList>
    </div>
  </div>
  <BottomDetials></BottomDetials>
</template>

<style scoped>
.main-fly-detials {
  width: 100%;
  height: 10vh;
  background-color: rgba(220, 35, 86, 255);
  color: white;
}
.fly-detials-top {
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
}
.main-fly-left {
  display: flex;
  align-items: center;
}
.main-fly-left-item {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main-fly-right-item {
  margin: 0 6%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.city-name {
  font-size: 25px;
  margin-top: 1px;
}
.main-fly-right {
  display: flex;
}
.fly-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}
.toggle-text {
  margin: 0 10px;
  color: rgba(220, 35, 86, 255);
  font-size: 20px;
}

</style>
