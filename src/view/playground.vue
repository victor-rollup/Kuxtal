<script setup lang="ts">
  import { Icon, Theme, UI } from '@/ui';
  import createDialog from '@/utils/create-dialog';
  import createNotification from '@/utils/create-notification';
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
                      Theme.setTheme(Theme.Type.MIDNIGHT);
                    },
                  },
                  {
                    caption: 'Set light theme',
                    onClick() {
                      Theme.setTheme(Theme.Type.LIGHT);
                    },
                  },
                  {
                    caption: 'Set dark theme',
                    onClick() {
                      Theme.setTheme(Theme.Type.DARK);
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

      <UI.Accordion title="Tabla">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>NOMBRE</th>
                <th>APELLIDO PATERNO</th>
                <th>APELLIDO MATERNO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Víctor Eduardo</td>
                <td>León</td>
                <td>Carreño</td>
              </tr>
              <tr>
                <td>Víctor Eduardo</td>
                <td>León</td>
                <td>Carreño</td>
              </tr>
              <tr>
                <td>Víctor Eduardo</td>
                <td>León</td>
                <td>Carreño</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UI.Accordion>
      <UI.Accordion title="Controles de formulario">
        <UI.Form>
          <UI.Memo caption="Descripción" :maxlength="45" />
          <UI.ComboBox
            caption="Selecciona un elemento"
            :allow-null="true"
            :items="[]"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="date"
            type="date"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="datetime-local"
            type="datetime-local"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="email"
            type="email"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="month"
            type="month"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="number"
            type="number"
            placeholder="Hello"
          />
          <UI.Edit
            name="edit"
            caption="password"
            type="password"
            placeholder="Hello"
            autocomplete="off"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="search"
            type="search"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="tel"
            type="tel"
            inputmode="tel"
            placeholder="Tel"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="text"
            type="text"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="time"
            type="time"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="url"
            type="url"
            placeholder="Hello"
          />
          <UI.Edit
            autocomplete="off"
            name="edit"
            caption="week"
            type="week"
            placeholder="Hello"
          />
        </UI.Form>
      </UI.Accordion>

      <UI.Accordion title="Botones">
        <UI.Button
          caption="Notification"
          @click="
            createNotification({
              message: 'NETWORK ERROR',
              type: 'error',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam earum ab repudiandae sunt officiis quisquam blanditiis mollitia aut excepturi! Architecto quam tempora debitis magnam illo sint dolor qui vel. Dolore?',
              duration: 10000,
            })
          "
        />
        <UI.Separator />
        <UI.Button
          caption="Dialog"
          mode="filled"
          @click="
            createDialog({
              message: '¿Deseas eliminar este producto?',
              cancelCaption: 'No, cancelar',
              confirmCaption: 'Sí, eliminar',
              onCancel() {
                createNotification({
                  message: 'Operación cancelada',
                  type: 'information',
                  duration: 10000,
                });
              },
              onConfirm() {
                createNotification({
                  message: 'Se ha eliminado el producto',
                  type: 'success',
                  duration: 10000,
                });
              }
            })
          "
        />
        <UI.Separator />
        <UI.Button caption="Click me" mode="secondary" />
        <UI.Separator />
        <UI.Button caption="Click me" mode="outlined" />
        <UI.Separator />
        <UI.Button caption="Click me" mode="text" />
        <UI.Separator />
        <UI.Button :icon="Icon.Search" caption="Click me" mode="icon" />
        <UI.Separator />
        <UI.Button :icon="Icon.Search" disabled caption="Click me" />
        <UI.Separator />
        <UI.Button
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="filled"
        />
        <UI.Separator />
        <UI.Button
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="secondary"
        />
        <UI.Separator />
        <UI.Button
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="outlined"
        />
        <UI.Separator />
        <UI.Button
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="text"
        />
        <UI.Separator />
        <UI.Button :icon="Icon.Search" disabled mode="text" />
        <UI.Separator />
        <UI.Button
          :icon="Icon.Search"
          disabled
          caption="Click me"
          mode="icon"
        />
        <UI.Separator />
      </UI.Accordion>

      <UI.Accordion title="Navegación">
        <UI.Hyperlink>Soy un enlace</UI.Hyperlink>
        <UI.Hyperlink route="playground">Playground</UI.Hyperlink>
        <UI.Hyperlink route="home">Home</UI.Hyperlink>
        <UI.BreadCrumb
          current="Home"
          :routes="[
            {
              caption: 'Playground',
              route: 'playground',
            },
          ]"
        />
      </UI.Accordion>
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
