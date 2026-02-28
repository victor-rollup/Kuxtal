// ------------------------------------------------------------------------------------------------
import { RouterView as Page } from 'vue-router';
import Icon from '@/ui/components/atom/icon';
import createDialog from '@/utils/create-dialog';
import createNotification from '@/utils/create-notification';
// ------------------------------------------------------------------------------------------------
import Button from '@/ui/components/atom/TButton.vue';
import Slider from './components/atom/TSlider.vue';
import RangeSlider from './components/atom/TSliderRange.vue';
import RadioButton from './components/atom/TRadioButton.vue';
import ToggleSwitch from './components/atom/TToggleSwitch.vue';
import Checkbox from './components/atom/TCheckbox.vue';
import Form from '@/ui/components/atom/TForm.vue';
import Hyperlink from '@/ui/components/atom/THyperlink.vue';
import Label from '@/ui/components/atom/TLabel.vue';
import Layout from '@/ui/components/atom/TLayout.vue';
import Panel from '@/ui/components/atom/TPanel.vue';
import Separator from '@/ui/components/atom/TSeparator.vue';
import Accordion from '@/ui/components/atom/TAccordion.vue';
import Image from './components/atom/TImage.vue';
import CountryFlag from './components/atom/TCountryFlag.vue';
import StepProgress from './components/atom/TStepProgress.vue';
// ------------------------------------------------------------------------------------------------
import BreadCrumb from '@/ui/components/molecule/TBreadCrumb.vue';
import ComboBox from '@/ui/components/molecule/TComboBox.vue';
import Edit from '@/ui/components/molecule/TEdit.vue';
import EditPassword from './components/molecule/TEditPassword.vue';
import Memo from '@/ui/components/molecule/TMemo.vue';
import Menu from '@/ui/components/molecule/TMenu.vue';
import Thumbnail from './components/molecule/TThumbnail.vue';
import PasswordIndicator from './components/molecule/TPasswordIndicator.vue';
// ------------------------------------------------------------------------------------------------
import Sidebar from '@/ui/components/organism/TSidebar.vue';
import MenuBar from './components/organism/TMenuBar.vue';
import useState from '@/utils/use-state';
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
  Slider,
  RangeSlider,
  RadioButton,
  ToggleSwitch,
  Checkbox,
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
  MenuBar,
  Sidebar,
  Image,
  Thumbnail,
  CountryFlag,
  PasswordIndicator,
  EditPassword,
  StepProgress,
  useState,
  createDialog,
  createNotification,
};
// ------------------------------------------------------------------------------------------------
