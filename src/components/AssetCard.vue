<template>
  <div
    class="asset-card"
    @click="$emit(EVENTS.select)"
  >
    <div class="asset-card__wrapper app__text--bold">
      <img
        class="asset-card__img"
        :src="require(`@/assets/img/${imgPath}`)"
        alt="asset_image"
      >

      {{ name }}
    </div>
    <table class="asset-card__table-wrapper">
      <tbody>
        <template v-for="(assetPrice, index) in rates">
          <tr :key="index">
            <td
              class="app__text--bold asset-card__table-currency"
            >
              {{ index + ':' | uppercase }}
            </td>
            <td class="app__text">
              {{ assetPrice }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
const EVENTS = {
  select: 'select',
}

export default {
  name: 'AssetCard',
  props: {
    imgPath: {
      type: String,
      required: true,
    },
    rates: {
      type: Object,
      default: () => ({
        UAH: 0,
        USD: 0,
        RUB: 0,
      }),
    },
    name: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    EVENTS,
  }),
}
</script>

<style lang="scss" scoped>
.asset-card {
  width: 280px;
  height: 150px;
  background-color: $app-primary-color;
  border-radius: 4px;
  display: flex;
  padding: 24px;
  justify-content: space-between;
  transition: .3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  }
}

.asset-card__img {
  height: 72px;
  width: 72px;
}

.asset-card__wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  color: $app-secondary-color;
}

.asset-card__table-wrapper {
  min-width: 150px;
}

.asset-card__table-currency {
  width: 70px;
}
</style>
