import { DialogExtensionSDK } from '@contentful/app-sdk'
import { Paragraph } from '@contentful/forma-36-react-components'

interface DialogProps {
  sdk: DialogExtensionSDK
}

const Dialog = (props: DialogProps) => {
  return <Paragraph>Hello Dialog Component</Paragraph>
}

export default Dialog
