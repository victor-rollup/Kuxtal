<script setup lang="ts">
  import { UI, Theme, Icon } from '..';
</script>

<template>
  <UI.Layout show-header show-primary-sidebar>
    <template #TLayoutHeader>
      <UI.Menu
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
                    onClick() {
                      Theme.setTheme('midnight');
                    },
                  },
                  {
                    caption: 'Set light theme',
                    onClick() {
                      Theme.setTheme('light');
                    },
                  },
                  {
                    caption: 'Set dark theme',
                    onClick() {
                      Theme.setTheme('dark');
                    },
                  },
                ],
              },
            ],
          },
        ]"
      />
    </template>
    <template #TLayoutPrimarySidebar>
      <UI.Sidebar
        :items="[
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
      <UI.Button @click="Theme.toggleDarkMode" caption="Dark/Light" />
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coca Cola</td>
            </tr>
            <tr>
              <td>Pepsi</td>
            </tr>
          </tbody>
        </table>
      </div>
      <UI.Accordion title="Soy un acordeón"> </UI.Accordion>
      <UI.Accordion title="Botones" class="accordion">
        <UI.Button caption="Filled button" />
        <UI.Button mode="outlined" caption="Outlined button" />
        <UI.Button mode="secondary" caption="Secondary button" />
        <UI.Button mode="text" caption="Text button" />
        <UI.Button mode="icon" caption="asdasdasd" :icon="Icon.Bell" />
        <UI.Button :icon="Icon.Bell" caption="Filled button" />
        <UI.Button disabled caption="Filled button" />
        <UI.Button disabled mode="outlined" caption="Outlined button" />
        <UI.Button disabled mode="secondary" caption="Secondary button" />
        <UI.Button disabled mode="text" caption="Text button" />
        <UI.Button disabled mode="icon" :icon="Icon.Bell" />
        <UI.Button :icon="Icon.Bell" caption="Filled button" />
        <UI.Button
          :icon="Icon.Bell"
          mode="outlined"
          caption="Outlined button"
        />
        <UI.Button
          :icon="Icon.Bell"
          mode="secondary"
          caption="Secondary button"
        />
        <UI.Button :icon="Icon.Bell" mode="text" caption="Text button" />
      </UI.Accordion>
      <UI.Accordion title="Navegación">
        <UI.Hyperlink class="text-truncate-multiline">
          Lorem ipsum <UI.Hyperlink>tempore</UI.Hyperlink> sit amet consectetur
          adipisicing elit. Id fugit laudantium facere cupiditate amet maiores
          eum accusantium repellendus soluta. Neque sapiente debitis sint
          expedita assumenda, magnam facere amet dolorem!
        </UI.Hyperlink>
        <UI.Separator />
        <UI.Hyperlink>Hello</UI.Hyperlink>
        <UI.Separator />
        <UI.BreadCrumb
          current="Categoría"
          :routes="[
            {
              caption: 'Inicio',
              route: '',
              icon: Icon.Home,
            },
          ]"
        />
      </UI.Accordion>
      <UI.Accordion title="Formulario">
        <UI.Memo />
        <UI.Separator />
        <UI.ComboBox :options="[]" />
        <UI.Separator />
        <UI.Edit type="search" :icon="Icon.Search" />
        <UI.Separator />
        <UI.Edit type="color" :icon="Icon.Search" />
        <UI.Separator />
        <UI.Edit type="date" placeholder="xd" />
        <UI.Separator />
        <UI.Edit type="datetime-local" placeholder="xd" />
        <UI.Separator />
        <UI.Edit type="file" placeholder="xd" :icon="Icon.Search" />
        <UI.Separator />
        <UI.Edit type="month" placeholder="xd" :icon="Icon.Search" />
        <UI.Edit type="number" placeholder="xd" :icon="Icon.Search" />
        <UI.Edit type="password" placeholder="xd" :icon="Icon.Search" />
        <UI.Edit type="range" placeholder="xd" :icon="Icon.Search" />
        <UI.Edit type="time" placeholder="xd" :icon="Icon.Search" />
        <UI.Edit type="week" placeholder="xd" :icon="Icon.Search" />
      </UI.Accordion>
      <UI.FormDialog
        title="Dialogo"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id reprehenderit incidunt"
      >
        <UI.Edit type="text" caption="Nombre" />
        <UI.Memo caption="Descripción" />
      </UI.FormDialog>
    </div>
  </UI.Layout>
</template>

<style scoped>
  .playground {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
