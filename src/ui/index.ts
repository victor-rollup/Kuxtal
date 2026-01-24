// ------------------------------------------------------------------------------------------------
import { RouterView as Page } from 'vue-router';
import createDialog from '@/utils/create-dialog';
import createNotification from '@/utils/create-notification';
// ------------------------------------------------------------------------------------------------
import Button from '@/ui/components/atom/TButton.vue';
import Form from '@/ui/components/atom/TForm.vue';
import Hyperlink from '@/ui/components/atom/THyperlink.vue';
import Label from '@/ui/components/atom/TLabel.vue';
import Layout from '@/ui/components/atom/TLayout.vue';
import Panel from '@/ui/components/atom/TPanel.vue';
import Separator from '@/ui/components/atom/TSeparator.vue';
import Accordion from '@/ui/components/atom/TAccordion.vue';
// ------------------------------------------------------------------------------------------------
import BreadCrumb from '@/ui/components/molecule/TBreadCrumb.vue';
import ComboBox from '@/ui/components/molecule/TComboBox.vue';
import Edit from '@/ui/components/molecule/TEdit.vue';
import Memo from '@/ui/components/molecule/TMemo.vue';
// ------------------------------------------------------------------------------------------------
import Menu from '@/ui/components/organism/TMenu.vue';
import Sidebar from '@/ui/components/organism/TSidebar.vue';
import Icon from '@/ui/components/atom/icon';
// ------------------------------------------------------------------------------------------------
export * as Theme from '@/ui/theme';
// ------------------------------------------------------------------------------------------------
export { Icon };
// ------------------------------------------------------------------------------------------------
export const UI = {
  Page,
  Hyperlink,
  Accordion,
  Button,
  Form,
  Label,
  Layout,
  Panel,
  Separator,
  BreadCrumb,
  ComboBox,
  Edit,
  Memo,
  Menu,
  Sidebar,
  createDialog,
  createNotification,
};
// ------------------------------------------------------------------------------------------------
