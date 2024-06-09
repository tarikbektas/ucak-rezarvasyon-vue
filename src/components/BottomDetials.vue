<script setup>
</script>


<template >
    <div class="bottom-fly-detials">
        <div class="fly-detials-bottom">
          <div class="main-fly-left">
            <div class="main-fly-left-item">
              
              <br />
              <p class="city-name">Ankara (CSF) ---></p>
            </div>
 
            <div class="main-fly-left-item" style="margin-left: 4vh">
              
              <br />
              <p class="city-name">İstanbul(ASF)</p>
            </div>
            
          </div>
          <div class="bottom-fly-ticket-detials">
            Vistara (A320)
            <p style="margin: 0;">
                CSF ---> ASF
            </p>
            <p style="">21.30 - 00.40</p>
          </div>
          
          <div class="main-fly-right" style="margin-right: 40px">
             
            
            <div class="main-fly-right-item">
              Fiyat
              <br />
              <p class="city-name" style="text-wrap: nowrap;">1235 ₺</p>
            </div>
            <div class="main-fly-right-item">
              <p class="city-name"><v-btn variant="outlined"> Bilet oluştur </v-btn></p>
            </div>
          </div>
        </div>
      </div> </template>

<style scoped>

.bottom-fly-detials {
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background-color: rgba(220, 35, 86, 255);
    color: white;
  }
  .fly-detials-bottom {
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
  .bottom-fly-ticket-detials{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>