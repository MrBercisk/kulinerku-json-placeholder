<template>
    <div class="hero">
        <!-- Desktop -->
        <div class="d-none d-md-block">
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="hero justify-content-center align-self-center">
                            <h2><strong>Delicious Food Menu, </strong><br> in Your Gadget</h2>
                            <p>Ayo pesan makanan favoritmu</p>
                            <router-link class="btn btn-lg" to="/foods"><font-awesome-icon icon="arrow-right" />Pesan</router-link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img src="../assets/images/hero.png" width="100%" alt="">
                </div>
            </div>
        </div>
        <!-- Mobile -->
        <div class="d-sm-block d-md-none">
            <div class="row mt-4 d-sm-block d-md-none">
                <div class="col-md-6 mb-3">
                    <img src="../assets/images/hero.png" width="100%" alt="">
                </div>
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="hero justify-content-center align-self-center">
                            <h2><strong>Delicious Food Menu, </strong><br> in Your Gadget</h2>
                            <p>Ayo pesan makanan favoritmu</p>
                            <button class="btn btn-lg"><font-awesome-icon icon="arrow-right" />Pesan</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Hero"
}
</script>
<style lang="">
    
</style>