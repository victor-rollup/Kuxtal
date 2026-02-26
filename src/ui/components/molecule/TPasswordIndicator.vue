<script setup lang="ts">
  import { Use } from 'helper';
  import { computed } from 'vue';
  import TIconCheck from '../atom/icon/TIconCheck.vue';
  import type { IPasswordIndicator } from '@/types/component.types';

  const model = defineModel<string>({
    default: Use.EMPTY_STRING,
  });
  const props = withDefaults(defineProps<IPasswordIndicator['props']>(), {
    caption: 'La contraseña debe contener al menos:',
  });

  const hasOneLowerLetter = computed(() => /[a-z]/.test(model.value));
  const hasOneUpperLetter = computed(() => /[A-Z]/.test(model.value));
  const hasOneNumber = computed(() => /\d/.test(model.value));
  const hasOneSpecialChar = computed(() => /[@.#$!%*?&]/.test(model.value));
  const hasAllowedLength = computed(
    () => model.value.length >= 8 && model.value.length <= 25,
  );
</script>

<template>
  <div class="password-indicator | column">
    <h3 class="password-indicator__caption">
      {{ props.caption }}
    </h3>
    <ul class="password-indicator__list | column">
      <li class="password-indicator__item | row">
        <TIconCheck
          v-if="hasOneLowerLetter"
          class="password-indicator__item-icon"
        />
        <span
          class="password-indicator__item-caption"
          :is-valid="hasOneLowerLetter"
          >1 letra minúscula</span
        >
      </li>
      <li class="password-indicator__item | row">
        <TIconCheck
          v-if="hasOneUpperLetter"
          class="password-indicator__item-icon"
        />
        <span
          class="password-indicator__item-caption"
          :is-valid="hasOneUpperLetter"
          >1 letra mayúscula</span
        >
      </li>
      <li class="password-indicator__item | row">
        <TIconCheck v-if="hasOneNumber" class="password-indicator__item-icon" />
        <span class="password-indicator__item-caption" :is-valid="hasOneNumber"
          >1 número</span
        >
      </li>
      <li class="password-indicator__item | row">
        <TIconCheck
          v-if="hasOneSpecialChar"
          class="password-indicator__item-icon"
        />
        <span
          class="password-indicator__item-caption"
          :is-valid="hasOneSpecialChar"
          >1 carácter especial (@.#$!%*?&)</span
        >
      </li>
      <li class="password-indicator__item | row">
        <TIconCheck
          v-if="hasAllowedLength"
          class="password-indicator__item-icon"
        />
        <span
          class="password-indicator__item-caption"
          :is-valid="hasAllowedLength"
          >Entre 8 y 25 caracteres</span
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .password-indicator {
    gap: 1rem;
  }

  .password-indicator__item {
    align-items: center;
    gap: 0.5rem;
  }

  .password-indicator__item-icon {
    color: var(--notification-success-color);
  }

  .password-indicator__item-caption:not([is-valid='true']) {
    opacity: 0.5;
  }

  .password-indicator__list {
    gap: 0.5rem;
  }
</style>
