<template>
  <div class="payment">
    <v-container>
      <div class="payment__inner">
        <v-heading>
          Улучшить до Pro
        </v-heading>
        <payment-form />
      </div>
    </v-container>
  </div>
</template>

<script>
import PaymentForm from './components/PaymentForm';

export default {
  meta: {
    auth: true,
  },
  components: {
    PaymentForm,
  },
  layout: 'with-footer',
};
</script>

<style lang="scss" src="./Payment.scss"/>
