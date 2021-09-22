import { SidebarExtensionSDK } from '@contentful/app-sdk'

interface SidebarProps {
  sdk: SidebarExtensionSDK
}

const Sidebar = (props: SidebarProps) => {
  return <FormaParagraph>Hello Sidebar Component</FormaParagraph>
}

export default Sidebar
