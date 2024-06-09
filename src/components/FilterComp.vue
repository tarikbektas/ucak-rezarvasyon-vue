<script setup></script>

<template>
  <div class="col-4">
    <h1 style="text-align: center">Filtreler</h1>
    <div class="filter-area">
      <h4>Fiyat</h4>
      <v-range-slider></v-range-slider>
      <div class="range">
        <p>1000 ₺</p>
        <p>5000 ₺</p>
      </div>
    </div>
    <div class="fly-time-filter">
      <div
        class=""
        style="
          border: 1px solid black;
          width: 80%;
          margin-top: 20px;
          padding: 10px;
        "
      >
        <h4>Kalkış Zamanı</h4>
        <div style="display: flex; margin-top: 10px">
          <!-- <v-btn variant="outlined" class="fly-time-button-item"><Icon icon="ph:sun" width="30" height="30" /> 24.00 - 06.00  </v-btn>
            <v-btn variant="outlined" class="fly-time-button-item"> Button </v-btn>
            <v-btn variant="outlined" class="fly-time-button-item"> Button </v-btn>
            <v-btn variant="outlined" class="fly-time-button-item"> Button </v-btn> -->
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-weather-night"></span>
            24.00 -06.00
          </button>
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-white-balance-sunny"></span>

            06.00 - 12.00
          </button>
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-white-balance-sunny"></span>
            12.00 -18.00
          </button>
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-weather-night"></span>
            18.00 -24.00
          </button>
        </div>
        <h4 style="margin-top: 30px">Varış Zamanı</h4>
        <div style="display: flex; margin-top: 0px">
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-weather-night"></span>
            24.00 -06.00
          </button>
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-white-balance-sunny"></span>
            06.00 - 12.00
          </button>
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-white-balance-sunny"></span>
            12.00 -18.00
          </button>
          <button type="button" class="btn btn-light fly-time-button">
            <span style="font-size: 20px;" class="mdi mdi-weather-night"></span>
            18.00 -24.00
          </button>
        </div>
      </div>
    </div>
    <!-- <v-col cols="16" md="5" sm="9" >
          <v-btn rounded="xl" size="xx-large" block>Filtreleri Temizle</v-btn>
        </v-col> -->
    <div class="">
      <v-btn
        style="margin-top: 10px; background-color: rgba(220, 35, 86, 255)"
        prepend-icon="mdi mdi-filter-off-outline"
      >
        Fİltreleri Temizle
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.filter-area-main {
  border: 1px solid gray;
}
.filter-area {
  padding: 14px;
  border: 1px solid gray;
  width: 80%;
}
.range {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
.fly-time-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-wrap: nowrap;
  width: 25%;
}
</style>
