<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';

    import { getExample } from '@/service/example';
    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        beforeMount() {
            getExample();
        }
    }
</script>
