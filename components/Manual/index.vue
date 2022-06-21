<template>
  <div class="manual">
    <close-icon @click="closeManual" />
    <div class="manual__indicators">
      <span
        v-for="index in 4"
        :key="index"
        :class="{active: currentTab + 1 === index}"
      />
    </div>
    <div class="manual__tabs">
      <div
        v-for="(tab, index) in $options.tabs"
        v-show="index === currentTab"
        :key="index"
        class="manual__tab"
      >
        <div class="manual__top">
          <div class="manual__step">  {{ index + 1 }} </div>
          <v-heading :level="4">
            {{ tab.title }}
          </v-heading>
        </div>
        <v-heading :level="5">
          {{ tab.subtitle }}
        </v-heading>
        <div class="manual__tab-text">
          {{ tab.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@svg/close.svg';
import tabsData from './tabs.json';

export default {
  tabs: tabsData.tabs,
  components: {
    CloseIcon,
  },
  data() {
    return {
      currentTab: 0,
    };
  },
  methods: {
    closeManual() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" src="./Manual.scss" />
