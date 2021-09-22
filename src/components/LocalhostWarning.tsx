const LocalhostWarning = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <FormaNote title="App running outside of Contentful" style={{ maxWidth: '800px' }}>
        <FormaParagraph>
          Contentful Apps need to run inside the Contentful web app to function properly. Install the app into a space and render
          your app into one of the{' '}
          <FormaTextLink href="https://www.contentful.com/developers/docs/extensibility/ui-extensions/sdk-reference/#locations">
            available locations
          </FormaTextLink>
          .
        </FormaParagraph>
        <br />

        <FormaParagraph>
          Follow{' '}
          <FormaTextLink href="https://www.contentful.com/developers/docs/extensibility/app-framework/tutorial/">
            our guide
          </FormaTextLink>{' '}
          to get started or <FormaTextLink href="https://app.contentful.com/deeplink?link=apps">open Contentful</FormaTextLink> to
          manage your app.
        </FormaParagraph>
      </FormaNote>
    </div>
  )
}

export default LocalhostWarning
