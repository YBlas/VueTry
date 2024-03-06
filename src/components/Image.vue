<script>
export default {
    data() {
        return {
            image: "https://cdn11.bigcommerce.com/s-byoks0/product_images/uploaded_images/stl011376.jpg"
        }
    },
    methods: {
        changeImage(value) {
            if (value.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                this.image = value
            }
        }
    }
}
</script>

<template>
    <div class="imageContainer">
        <img class="ownImage" :src="image" alt="Imagen" />
        <input type="text" :value="image" @input="event => changeImage(event.target.value)" />
    </div>
</template>

<style>
.imageContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
}

.ownImage {
    width: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>
