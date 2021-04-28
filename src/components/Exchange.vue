<template>
  <div class="exchanger">
    <div class="exchanger__assets-wrapper">
      <template v-for="(asset, index) in getRates">
        <asset-card
          :key="index"
          :name="index"
          :img-path="`png/${index}.png`"
          :rates="getRates[index]"
          @select="selected = index"
        />
      </template>
    </div>

    <h2 class="app__text">
      {{ `Selected coin: ${selected}` }}
    </h2>

    <div class="exchanger__input-wrapper">
      <label class="app__label">Volume:</label>
      <el-input
        v-model="exchangeVolume"
        placeholder="Enter value"
      />
    </div>
    <div class="exchanger__radio-wrapper">
      <el-radio-group v-model="exchangeCurrency">
        <template v-for="(currency, index) in AVAILABLE_CURRENCIES">
          <el-radio-button
            :key="index"
            :label="currency"
            border
          />
        </template>
      </el-radio-group>
    </div>
    <span class="app__title">
      <b>{{ `${exchangeVolume} ${selected}` }}</b>
      will be 
      <b>{{ Math.floor(
        exchangeVolume * getRates[selected][exchangeCurrency] * 100
      ) / 100 }}</b>
      in
      <b>{{ exchangeCurrency }}</b>
    </span>
  </div>
</template>

<script>
import AssetCard from '@/components/AssetCard'
import { mapGetters } from 'vuex'
import { AVAILABLE_CURRENCIES } from '@/constants/AVAILABLE_CURRENCIES'

export default {
  name: 'Exchange',
    components: {
    AssetCard,
  },
  data: () => ({
    AVAILABLE_CURRENCIES,
    selected: 'BTC',
    exchangeVolume: 0,
    exchangeCurrency: 'UAH',
  }),
  computed: {
    ...mapGetters({
      getRates: 'rates',
    }),
  },
  watch: {
    exchangeVolume: {
      handler(val, oldVal) {
        if (isNaN(+val) || +val > Number.MAX_SAFE_INTEGER)
          this.exchangeVolume = oldVal
        else this.exchangeVolume = +val
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.exchanger__assets-wrapper {
  width: 1024px;
  display: flex;
  justify-content: space-between;
}

.exchanger {
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.exchanger__input-wrapper {
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 24px;
}

.exchanger__radio-wrapper {
  margin-bottom: 24px;
}
</style>
