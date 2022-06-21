<template>
  <div class="payment-form">
    <v-heading :level="4">
      Размер отплаты
    </v-heading>
    <client-only>
      <form @submit.prevent="submitHandler">
        <div
          v-for="(rate, index) in rates"
          :key="index"
          class="payment-form__item"
        >
          <v-form-control-Label>
            <template #control>
              <v-radio v-model="selectedRate" :value="rate.value" />
            </template>
            <template #label>
              {{ rate.text }}
            </template>
          </v-form-control-Label>
        </div>
        <v-button variant="primary">
          Далее
        </v-button>
      </form>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRate: 'month',
      rates: [
        { value: 'month', text: 'Оплатить на месяц / 400 руб' },
        { value: 'half-year', text: 'Оплатить на полгода / 2000 руб ' },
        { value: 'year', text: 'Оплатить на год / 4000 руб' },
      ],
    };
  },
  methods: {
    submitHandler() {
      this.$emit('submit', this.selectedRate);
    },
  },
};
</script>

<style lang="scss" src="./PaymentForm.scss">

</style>
