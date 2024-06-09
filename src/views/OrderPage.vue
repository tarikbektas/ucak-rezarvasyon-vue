<script setup></script>

<template>
  <div class="main">
    <div class="page-wrapper row">
      <div class="ticket-details-main col-9">
        <div class="ticket-detials">
          <h3>Bilet Detayları</h3>
          <v-divider
            :thickness="5"
            class="border-opacity-100"
            color="info"
          ></v-divider>

          <div class="ticket">
            <div>
              <p style="margin: 0; font-size: 25px">A Firması</p>

              <p>A320</p>
            </div>

            <div class="fly-info-main">
              <div class="fly-info">
                <h4>13:30</h4>
                <p>Salı 17.03.2024</p>
                <p>İstanbul</p>
                <p class="airport-name">Sabiha Gökçen Havalimanı</p>
              </div>
              <div class="arrow">
                <span
                  style="font-size: 40px"
                  class="mdi mdi-ray-start-arrow"
                ></span>
              </div>
              <div class="fly-info">
                <h4>13:30</h4>
                <p>Salı 17.03.2024</p>
                <p>İstanbul</p>
                <p class="airport-name">Sabiha Gökçen Havalimanı</p>
              </div>
            </div>
          </div>
          <p style="font-size: 20px; text-align: end; margin-top: 100px">
            Uçuş Süresi:<strong>2 saat 15 dk</strong>
          </p>
        </div>
        <div data-v-9cc42020="" class="ticket-detials" style="margin-top: 5vh">
          <h3 data-v-9cc42020="">Yolcu Bilgileri</h3>
          <hr
            data-v-9cc42020=""
            class="v-divider v-theme--dark text-info border-opacity-100"
            aria-orientation="horizontal"
            role="separator"
            style="border-top-width: 5px"
          />
          <div class=" " data-v-9cc42020="">
             <div class="form-group" data-v-9cc42020="">
              <label for="name" data-v-9cc42020=""
                >Lütfen İsim Giriniz:</label
              ><input
                type="text"
                id="name"
                
                data-v-9cc42020=""
              />
            </div>
            <div class="form-group" data-v-9cc42020="">
              <label for="email" data-v-9cc42020="">E-Posta Adresi:</label
              ><input
                type="email"
                id="email"
                 data-v-9cc42020=""
              />
            </div>
            <div class="form-group" data-v-9cc42020="">
              <label for="phone" data-v-9cc42020="">Telefon:</label
              ><input
                type="tel"
                id="phone"
                 data-v-9cc42020=""
              />
            </div>
          </div>
        </div>
        
      </div>
      <div class="payment-main col-3">
        <h3>Ücret Özeti</h3>
        <v-divider
          :thickness="5"
          class="border-opacity-100"
          color="info"
        ></v-divider>
        <div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <p style="font-size: large">Bilet Ücreti</p>
            <p style="text-align: end"><strong>1500 Tl</strong></p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <p style="font-size: large">Bilet Ücreti</p>
            <p style="text-align: end"><strong>1500 Tl</strong></p>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between">
          Toplam Ücret:
          <p style="text-align: end"><strong>2000 Tl</strong></p>
        </div>
        <v-btn 
          class="text-none text-subtitle-1"
          color="rgba(220, 35, 86, 255)"
          size="small"
          variant="flat"
        >
          Ödeme
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3{
    color: rgba(220, 35, 86, 255);
}
.main {
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
  padding: 70px;
}
.ticket-detials {
  background-color: white;
  padding: 5%;
}
.airport-name {
  width: 65%;
}
.page-wrapper {
  width: 80%;
  margin: auto;
}
.container {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f4f4;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

input[type="checkbox"] {
  margin-right: 5px;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
}

.btn:hover {
  background-color: #0077b6;
}
.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10%;
}
.ticket-details-main {
  background-color: antiquewhite;
}
.payment-main {
  background-color: white;
  padding: 10px;
  height: min-content
}
.ticket {
  display: flex;
  justify-content: space-between;
}
.fly-info-main {
  width: 75%;
  display: flex;
}
.fly-info {
  width: 35%;
}
p {
  margin: 0 !important ;
}
</style>
