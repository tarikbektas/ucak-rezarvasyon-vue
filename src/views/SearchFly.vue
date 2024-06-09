
  
  <script setup>
   
  import axios from 'axios'
  
  const searchNereden = ref('')
  const searchNereye = ref('')
  const nereden = ref([])
  const nereye = ref([])
  const gidisTarihi = ref('')
  const donusTarihi = ref('')
  const pasangerClass = ref('')
  const apiKey = 'AelVr4RUSaSKHGT0GkPPFw==gmakSrXksSzSgQex'
  
  watch(searchNereden, (newValue) => {
    fetchData(newValue)
  })
  
  watch(searchNereye, (newValue) => {
    fetchData2(newValue)
  })
  
  onMounted(() => {
    fetchData(searchNereye.value)
    fetchData(searchNereden.value)
  })
  
  const fetchData = (search) => {
    axios.get('https://api.api-ninjas.com/v1/airports', {
      params: {
        name: search
      },
      headers: {
        'X-Api-Key': apiKey
      }
    })
    .then(response => {
      const airports = response.data
      const airportNames = airports.map(airport => airport.name)
      nereden.value = airportNames
    })
    .catch(error => {
      console.error('Error: ', error.response.data)
    })
  }
  
  const fetchData2 = (search) => {
    axios.get('https://api.api-ninjas.com/v1/airports', {
      params: {
        name: search
      },
      headers: {
        'X-Api-Key': apiKey
      }
    })
    .then(response => {
      const airports = response.data
      const airportNames = airports.map(airport => airport.name)
      nereye.value = airportNames
    })
    .catch(error => {
      console.error('Error: ', error.response.data)
    })
  }
  const testFunc = () =>{
    counter.gidisYeri = nereden
    counter.varisYeri = nereye
    counter.gidisTarihi =gidisTarihi
    counter.varisTarihi =donusTarihi
    counter.sinif = pasangerClass
  }
  </script>

<template>
    <div class="main">
     
      <h1>yurt içi ve yurt dışı bilet rezervasyonu yapın</h1>
      <div class="search-box">
        <form   >
          <div class="form-group">
            <label for="from">Nereden</label>
            <v-combobox 
              :item-value="nereden"
              v-model="searchNereden"
              :items="nereden"
              label="Nereden"
            ></v-combobox>
          </div>
  
          <div class="form-group">
            <label for="to">Nereye</label>
            <v-combobox
              :item-value="nereye"
              v-model="searchNereye"
              :items="nereye"
              label="Nereye"
            ></v-combobox>
          </div>
  
          <div class="form-group">
            <label for="departureDate">Gidiş Tarihi:</label>
            <input type="date" v-model="gidisTarihi" />
          </div>
  
          <div class="form-group">
            <label for="returnDate">Dönüş Tarihi:</label>
            <input type="date" v-model="donusTarihi" />
          </div>
  
          <div class="form-group">
            <label for="class">Sınıf:</label>
            <select v-model="pasangerClass" id="class" name="class">
              <option value="economy">Ekonomi</option>
              <option value="business">Business</option>
              <option value="first">First</option>
            </select>
          </div>
  
          
          <router-link to="/about"> <button  @click="testFunc();">Uçuş Ara</button></router-link>
         

        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  .main {
    font-family: sans-serif;
    margin: 0;
    background-image: url("https://sm.mashable.com/t/mashable_tr/photo/default/eeoo-80_xf11.1248.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .search-box {
    width: 65vh;
    margin-left: 30vh;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  h1 {
    width: 50vh;
    text-align: center;
    margin-bottom: 20px;
    font-size: 50px;
    text-transform: uppercase;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="date"],
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: black;
  }
  
  input[type="radio"] {
    margin-right: 5px;
  }
  
  .radio-group {
    display: flex;
    align-items: center;
  }
  
  button {
    background-color: #dc3545;
    color: #fff;
    padding: 10px 20px;
    border: none;
  }  

</style>