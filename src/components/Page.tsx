import { PageExtensionSDK } from '@contentful/app-sdk'

interface PageProps {
  sdk: PageExtensionSDK
}

const Page = (props: PageProps) => {
  return <FormaParagraph>Hello Page Component</FormaParagraph>
}

export default Page
