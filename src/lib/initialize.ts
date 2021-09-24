import connect, { Channel } from './channel'
import { ConnectMessage, Init, KnownSDK } from '~/types'

const hook = createEventHook<{ api: KnownSDK; customApi: any }>()

export default <T extends KnownSDK = KnownSDK>(
  currentWindow: Window,
  apiCreator: (channel: Channel, data: ConnectMessage, window: Window) => KnownSDK,
): Init<T> => {
  const connectDeferred = createDeferred()

  connectDeferred.promise.then(([channel]: [Channel]) => {
    const { document } = currentWindow
    document.addEventListener('focus', () => channel.send('setActive', true), true)
    document.addEventListener('blur', () => channel.send('setActive', false), true)
  })

  // We need to connect right away so we can record incoming
  // messages before `init` is called.
  connect(currentWindow, (...args) => connectDeferred.resolve(args))

  return (function init(
    options,
  ) {
    const { supressIframeWarning = false, makeCustomApi = () => {} } = options ?? {}
    if (!supressIframeWarning && currentWindow.self === currentWindow.top) {
      console.error(`Cannot use ui-extension-sdk outside of Contenful:

In order for the ui-extension-sdk to function correctly, your app needs to be run in an iframe in the Contentful Web App.

Learn more about local development with the ui-extension-sdk here:
  https://www.contentful.com/developers/docs/extensibility/ui-extensions/faq/#how-can-i-use-the-ui-extension-sdk-locally`)
    }
    connectDeferred.promise.then(
      ([channel, params, messageQueue]: [Channel, ConnectMessage, unknown[]]) => {
        const api = apiCreator(channel, params, currentWindow)

        let customApi
        if (typeof makeCustomApi === 'function')
          customApi = makeCustomApi(channel, params)

        // Handle pending incoming messages.
        // APIs are created before so handlers are already
        // registered on the channel.
        messageQueue.forEach((m) => {
          channel.handleMessage(m)
        })

        // Hand over control to the developer.
        hook.trigger({
          api,
          customApi,
        })
      },
    )

    return {
      onReady: hook.on,
    }
  }) as Init<T>
}

function createDeferred<T = any>() {
  const deferred: {
    promise: Promise<T>
    resolve: (value: T | PromiseLike<T>) => void
  } = {
    promise: null as any,
    resolve: null as any,
  }

  deferred.promise = new Promise<T>((resolve) => {
    deferred.resolve = resolve
  })

  return deferred
}
