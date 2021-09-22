// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
import '@contentful/forma-36-react-components/dist/styles.css'
import '@contentful/forma-36-fcss/dist/styles.css'
import '@contentful/forma-36-tokens/dist/css/index.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

import {
  AppExtensionSDK,
  DialogExtensionSDK,
  EditorExtensionSDK,
  FieldExtensionSDK,
  init,
  locations,
  PageExtensionSDK,
  SidebarExtensionSDK,
} from '@contentful/app-sdk'
import { render } from 'react-dom'

if (import.meta.env.NODE_ENV === 'development' && window.self === window.top) {
  // You can remove this if block before deploying your app
  const root = document.getElementById('root')
  render(<LocalhostWarning />, root)
} else {
  init((sdk) => {
    const root = document.getElementById('root')

    // install all modules under `modules/`
    // Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(sdk))

    // All possible locations for your app
    // Feel free to remove unused locations
    // Dont forget to delete the file too :)
    const ComponentLocationSettings = [
      {
        location: locations.LOCATION_APP_CONFIG,
        component: <ConfigScreen sdk={sdk as AppExtensionSDK} />,
      },
      {
        location: locations.LOCATION_ENTRY_FIELD,
        component: <Field sdk={sdk as FieldExtensionSDK} />,
      },
      {
        location: locations.LOCATION_ENTRY_EDITOR,
        component: <EntryEditor sdk={sdk as EditorExtensionSDK} />,
      },
      {
        location: locations.LOCATION_DIALOG,
        component: <Dialog sdk={sdk as DialogExtensionSDK} />,
      },
      {
        location: locations.LOCATION_ENTRY_SIDEBAR,
        component: <Sidebar sdk={sdk as SidebarExtensionSDK} />,
      },
      {
        location: locations.LOCATION_PAGE,
        component: <Page sdk={sdk as PageExtensionSDK} />,
      },
    ]

    // Select a component depending on a location in which the app is rendered.
    ComponentLocationSettings.forEach((componentLocationSetting) => {
      if (sdk.location.is(componentLocationSetting.location)) render(componentLocationSetting.component, root)
    })
  })
}
