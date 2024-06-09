<script>
import axios from 'axios';
 
 export default {
  data() {
    return {
      searchNereden: '',
      searchNereye: '',
      nereden: [],
      nereye:[],
      gidisTarihi :'',
      donusTarihi: '',
      pasangerClass:'1',
      test : false ,
      apiKey: 'AelVr4RUSaSKHGT0GkPPFw==gmakSrXksSzSgQex' // API anahtarınızı buraya ekleyin
    };
  },
  watch: {
    searchNereden(newValue) {
      // search değişkeni değiştiğinde bu fonksiyon çalışacak
      this.fetchData(newValue);
    },
    searchNereye(newValue) {
      // search değişkeni değiştiğinde bu fonksiyon çalışacak
      this.fetchData2(newValue);
    }
  },
  mounted() {
    // Component yüklendiğinde çağrılacak olan fonksiyon
    this.fetchData(this.searchNereye);
    this.fetchData(this.searchNereden);
  },
  methods: {
     sendData () {
 
    },
  fetchData(search) {
    axios.get('https://api.api-ninjas.com/v1/airports', {
      params: {
        name: search
      },
      headers: {
        'X-Api-Key': this.apiKey
      }
    })
    .then(response => {
      const airports = response.data;
      const airportNames = airports.map(airport => airport.name); // Sadece isimleri içeren dizi oluştur
      this.nereden = airportNames;
     })
    .catch(error => {
      console.error('Error: ', error.response.data);
    });
  },
  fetchData2(search) {
    axios.get('https://api.api-ninjas.com/v1/airports', {
      params: {
        name: search
      },
      headers: {
        'X-Api-Key': this.apiKey
      }
    })
    .then(response => {
      const airports = response.data;
      const airportNames = airports.map(airport => airport.name); // Sadece isimleri içeren dizi oluştur
       this.nereye=airportNames; // Nereden dizisine isimleri içeren dizi atanır
    })
    .catch(error => {
      console.error('Error: ', error.response.data);
    });
  }
}
}
</script>


<template>
  <div class="main">
 
     
    <h1>yurt içi ve yurt dışı bilet rezervasyonu yapın</h1>
    <div class="search-box">
      <form>
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
          <input type="date" v-model="gidisTarihi"   />
        </div>

        <div class="form-group">
          <label for="returnDate">Dönüş Tarihi:</label>
          <input type="date" v-model="donusTarihi"   />
        </div>

        <div class="form-group">
          <label for="class">Sınıf:</label>
          <select v-model="pasangerClass" id="class" name="class">
            <option value="economy">Ekonomi</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>

        <button     >Uçuş Ara</button>
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
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c82333;
}
</style>