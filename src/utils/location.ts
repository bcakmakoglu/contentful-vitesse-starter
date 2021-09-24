import EntryEditor from '~/components/EntryEditor.vue'
import ConfigScreen from '~/components/ConfigScreen.vue'
import Field from '~/components/Field.vue'
import Dialog from '~/components/Dialog.vue'
import Sidebar from '~/components/Sidebar.vue'
import Page from '~/components/Page.vue'
import { locations } from '~/lib'
import { useSdk } from '~/utils/sdk'

export const routes = [
  {
    location: locations.LOCATION_ENTRY_EDITOR,
    component: EntryEditor,
  },
  {
    location: locations.LOCATION_APP_CONFIG,
    component: ConfigScreen,
  },
  {
    location: locations.LOCATION_ENTRY_FIELD,
    component: Field,
  },
  {
    location: locations.LOCATION_DIALOG,
    component: Dialog,
  },
  {
    location: locations.LOCATION_ENTRY_SIDEBAR,
    component: Sidebar,
  },
  {
    location: locations.LOCATION_PAGE,
    component: Page,
  },
]

export const useLocation = () => {
  const sdk = useSdk()
  return computed(() => routes.find(route => sdk.value?.api.location.is(route.location))?.component)
}
