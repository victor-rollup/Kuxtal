<!-- <script setup lang="ts">
  import Icon from '@/components/atom/icon';
  import TAccordion from '@/components/atom/TAccordion.vue';
  import TButton from '@/components/atom/TButton.vue';
  import TForm from '@/components/atom/TForm.vue';
  import THyperlink from '@/components/atom/THyperlink.vue';
  import TLabel from '@/components/atom/TLabel.vue';
  import TLayout from '@/components/atom/TLayout.vue';
  import TSeparator from '@/components/atom/TSeparator.vue';
  import TBreadCrumb from '@/components/molecule/TBreadCrumb.vue';
  import TEdit from '@/components/molecule/TEdit.vue';
  import TMenu from '@/components/organism/TMenu.vue';
  import TSidebar from '@/components/organism/TSidebar.vue';
  import { ref } from 'vue';

  function toggleDarkMode() {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      return;
    }
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  function alert() {
    window.alert(1);
  }

  const value = ref('');
</script>

<template>
  <TLayout show-header show-primary-sidebar>
    <template #TLayoutHeader>
      <TMenu
        orientation="horizontal"
        :items="[
          {
            caption: 'File',
            submenu: [
              {
                caption: 'view',
              },
            ],
          },
          {
            caption: 'Edit',
          },
          {
            caption: 'View',
            submenu: [
              {
                caption: 'Appearance',
                submenu: [
                  {
                    caption: 'Set midnight theme',
                    onClick() {},
                  },
                  {
                    caption: 'Set light theme',
                    onClick() {},
                  },
                  {
                    caption: 'Set dark theme',
                    onClick() {},
                  },
                ],
              },
            ],
          },
        ]"
      ></TMenu>
    </template>

    <template #TLayoutPrimarySidebar>
      <TSidebar
        :sections="[
          {
            caption: 'Principal',
            options: [
              {
                caption: 'Punto de venta',
                icon: Icon.Computer,
              },
              {
                caption: 'Ventas',
                icon: Icon.Receipt,
              },
            ],
          },
          {
            caption: 'Inventario',
            options: [
              {
                caption: 'Productos',
                icon: Icon.Tag,
              },
              {
                caption: 'Proveedores',
                icon: Icon.ShoppingCart,
                route: 'home',
              },
            ],
          },
          {
            caption: 'Tienda',
            options: [
              {
                caption: 'Clientes',
                icon: Icon.UserGroup,
              },
              {
                caption: 'Empleados',
                icon: Icon.UserGroup,
              },
              {
                caption: 'Reportes',
                icon: Icon.Report,
              },
            ],
          },
        ]"
      />
    </template>

    <div class="playground">
      <h1>Playground</h1>

      <TAccordion title="Controles de formulario">
        <TForm>
          <TEdit
            autocomplete="off"
            name="edit"
            caption="date"
            type="date"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="datetime-local"
            type="datetime-local"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="email"
            type="email"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="month"
            type="month"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="number"
            type="number"
            placeholder="Hello"
          />
          <TEdit
            name="edit"
            caption="password"
            type="password"
            placeholder="Hello"
            autocomplete="off"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="search"
            type="search"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="tel"
            type="tel"
            inputmode="tel"
            placeholder="Tel"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="text"
            type="text"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="time"
            type="time"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="url"
            type="url"
            placeholder="Hello"
          />
          <TEdit
            autocomplete="off"
            name="edit"
            caption="week"
            type="week"
            placeholder="Hello"
          />
        </TForm>
      </TAccordion>

      <TAccordion title="Botones">
        <TButton caption="Click me" />
        <TSeparator />
        <TButton caption="Click me" mode="filled" />
        <TSeparator />
        <TButton caption="Click me" mode="secondary" />
        <TSeparator />
        <TButton caption="Click me" mode="outlined" />
        <TSeparator />
        <TButton caption="Click me" mode="text" />
        <TSeparator />
        <TButton :icon="Icon.Search" caption="Click me" mode="icon" />
        <TSeparator />
        <TButton :icon="Icon.Search" disabled caption="Click me" />
        <TSeparator />
        <TButton
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="filled"
        />
        <TSeparator />
        <TButton
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="secondary"
        />
        <TSeparator />
        <TButton
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="outlined"
        />
        <TSeparator />
        <TButton :icon="Icon.Search" disabled caption="Click me" mode="text" />
        <TSeparator />
        <TButton :icon="Icon.Search" disabled mode="text" />
        <TSeparator />
        <TButton :icon="Icon.Search" disabled caption="Click me" mode="icon" />
        <TSeparator />
      </TAccordion>

      <TAccordion title="Navegación">
        <THyperlink>Soy un enlace</THyperlink>
        <THyperlink route="playground">Playground</THyperlink>
        <THyperlink route="home">Home</THyperlink>
        <TBreadCrumb
          current="Home"
          :routes="[
            {
              caption: 'Playground',
              route: 'playground',
            },
          ]"
        />
      </TAccordion>
    </div>
  </TLayout>
</template>

<style scoped>
  .playground {
    padding: 2rem;
  }
</style> -->
<template></template>