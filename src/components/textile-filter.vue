<template>
    <section class="filter-container">
        <form @submit.prevent="setFilter()">
            <input type="text" placeholder="Search" v-model="filterBy.name">
        </form>
        <div class="suggest-container">
            <div class="suggests">
                <router-link :to="`/textile/${textile.id}`" v-for="textile in textiles">{{ textile.name }}</router-link>
            </div>
        </div>
    </section>
</template>
<script>
import { textileService } from '../services/textile-service';

export default {
    data() {
        return {
            textiles: textileService.loadtextiles(),
            filterBy: {
                name: '',
            }
        }
    },
    methods: {
        async setFilter() {
            this.$emit('setFilter', { ...this.filterBy })
        },
    }
}
</script>
