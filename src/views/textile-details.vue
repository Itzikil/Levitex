<template>
    <section v-if="textile" class="textile-details flex column">
        <h1>{{ textile.name }}</h1>
        <div class="flex">
            <img :src="textile.imgUrl" alt="">
            <p>{{ textile.desc }}</p>
        </div>
        <h3>${{ textile.price }}</h3>
        <button>Buy</button>
    </section>
    <h1 v-else>Sorry can't find the product</h1>
</template>

<script>
import { textileService } from '../services/textile-service';

export default {
    data() {
        return {
            textile: null
        }
    },
    created() {
        const id = this.$route.params.id
        const textile = textileService.getTextileById(id)
        this.textile = textile
    },
    methods: {
    },
    components: {
    }
}
</script>