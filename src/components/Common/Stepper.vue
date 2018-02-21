<template>
  <div class="stepper">
    <div class="stepper__steps">
      <div v-for="step of steps" :key="step.marker" class="stepper__steps__step" :class="{ 'stepper__steps__step_active': step.isActive, 'stepper__steps__step_disabled': step.isDisabled, 'stepper__steps__step_valid': step.isValid }">
        <div class="stepper__steps__step__content">
          <span class="stepper__steps__step__content__marker">
            {{ step.marker }}
          </span>
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    steps: {
      type: Array,
      validator(value) {
        if (value[0] !== null && typeof value[0] === 'object') {
          return (
            typeof value[0].marker === 'number' &&
            typeof value[0].title === 'string' &&
            typeof value[0].isActive === 'boolean' &&
            typeof value[0].isValid === 'boolean' &&
            typeof value[0].isDisabled === 'boolean'
          );
        }
        return false;
      },
    },
  },
};
</script>

<style scoped>
.stepper {
  background-color: #a1a0a0;
  border-radius: 20px;
  margin-bottom: 30px;
}

.stepper__steps {
  height: 72px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}

.stepper__steps__step {
  position: relative;
  text-align: center;
  color: #eee;
  cursor: pointer;
}

.stepper__steps__step:first-child::after {
  left: 24px;
}

.stepper__steps__step:last-child::after {
  right: 24px;
}

.stepper__steps__step_active {
  font-weight: 700;
}

.stepper__steps__step_valid {
  font-weight: 600;
}

.stepper__steps__step_disabled {
  background-color: #a9a9a9;
  cursor: default;
}

.stepper__steps__step__content {
  display: inline-block;
  position: relative;
  z-index: 2;
  padding: 0 8px;
  background-color: #a1a0a0;
}

.stepper__steps__step__content__marker {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  background-color: #b2dfdb;
  text-align: center;
  color: #fff;
  line-height: 36px;
  font-weight: 100;
  font-size: 16px;
  border-radius: 36px;
}

.stepper__steps__step_active .stepper__steps__step__content__marker {
  background-color: #4caca4;
}

.stepper__steps__step_valid .stepper__steps__step__content__marker {
  text-indent: -10000px;
  background: url('data:image/svg+xml;charset=utf8,<svg fill="#FFFFFF" height="20" viewBox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/> <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>')
    no-repeat #4caca4;
  background-position: 8px 8px;
  background-color: #4caca4;
}
</style>
