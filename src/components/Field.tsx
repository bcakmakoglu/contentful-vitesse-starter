import { FieldExtensionSDK } from '@contentful/app-sdk'

interface FieldProps {
  sdk: FieldExtensionSDK
}

const Field = (props: FieldProps) => {
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return <FormaParagraph>Hello Entry Field Component</FormaParagraph>
}

export default Field
