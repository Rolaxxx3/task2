<template>
  <div class="app">
    <template v-if="getRatesStatus === REQUEST_STATUSES.loading">
      <div v-loading="getRatesStatus" />
    </template>

    <template v-else-if="getRatesStatus === REQUEST_STATUSES.success">
      <exchange />
    </template>
    
    <template v-else>
      <span class="app__error-msg">
        Something went wrong please try again later
      </span>
    </template>
  </div>
</template>

<script>
import Exchange from '@/components/Exchange'
import { mapActions, mapGetters } from 'vuex'
import { REQUEST_STATUSES } from '@/constants/REQUEST_STATUSES'

export default {
  name: 'App',
  components: {
    Exchange,
  },
  data: () => ({
    REQUEST_STATUSES,
  }),
  computed: {
    ...mapGetters({
      getRatesStatus: 'ratesStatus',
    }),
  },
  async created() {
    await this.LOAD_CURRENCIES()
  },
  methods: {
    ...mapActions({
      LOAD_CURRENCIES: 'LOAD_CURRENCIES',
    }),
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
