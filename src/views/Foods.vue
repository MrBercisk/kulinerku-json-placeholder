<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col mt-4">
                    <h2>Daftar <strong>Makanan</strong></h2>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Cari makanan favorit anda..." aria-label="Cari" v-model="search" @keyup="searchFood">
                        <span class="input-group-text">
                            <font-awesome-icon class="text-muted" icon="search" />
                        </span>
                    </div>

                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
                    <CardProduct :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';
export default {
    name: 'Foods',
    components: {
        Navbar,
        CardProduct,
    },
    data() {
        return {
            products: [],
            search: '',
        };
    },
    methods: {
        setProducts(data) {
            this.products = data
        },
        searchFood(){
            axios
            .get("http://localhost:3000/products?q="+this.search)
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error))
        }
    },
    /* Ketika halaman home dipasang maka mounted akan berjalan */
    mounted() {
        axios
            .get("http://localhost:3000/products")
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error))
    },
}
</script>
<style lang="">
    
</style>