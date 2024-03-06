<script>
export default {
  data() {
    return {
      title: 'Increíble título',
      image:
        'https://taschen.makaira.media/taschen/image/upload/f_webp,w_1200/v1673462095/products-live/c2b0809da3cd9c2f8e0b0223e1414fe9.jpg',
      description: 'Descripción de la imagen',
      visitingNumber: 0
    }
  },
  mounted() {
    console.log('Component mounted')
  },
  methods: {
    increaseVisitingNumber() {
      this.visitingNumber++
    },
    changeImage(value) {
      this.image = value
    },
    changeDescription(event) {
      this.description = event.target.value
    },
    changeTitle(event) {
      this.title = event.target.value
    },
    resetData() {
      this.title = 'Increíble título'
      this.image =
        'https://taschen.makaira.media/taschen/image/upload/f_webp,w_1200/v1673462095/products-live/c2b0809da3cd9c2f8e0b0223e1414fe9.jpg'
      this.description = 'Descripción de la imagen'
      this.visitingNumber = 0
    }
  }
}
</script>

<template>
  <div class="inputDataContainer">
    <h1>{{ title }}</h1>
    <img :src="image" alt="Imagen" />
    <p>{{ description }}</p>
  </div>
  <div class="inputDataContainer">
    <input type="text" :value="title" @input="changeTitle" />
    <input type="text" :value="description" @input="changeDescription" />
    <input type="text" :value="image" @input="event => changeImage(event.target.value)" />
    <button @click="increaseVisitingNumber">Aumentar visitas</button>
    <button @click="resetData">Resetear datos</button>
    <p>Visitas: {{ visitingNumber }}</p>
  </div>
</template>

<style>
.inputDataContainer {
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  box-sizing: border-box;
  border-radius: 10px;
}

button {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  width: calc(100% - 20px);
}

img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 10px 0;
}
</style>