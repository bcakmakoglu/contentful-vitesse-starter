import { Channel } from './channel'
import { DialogsAPI, IdsAPI, OpenAlertOptions, OpenConfirmOptions, OpenCustomWidgetOptions } from '~/types'
import { isObject } from '~/lib/utils'

function prepareOptions<T>(options?: T) { return (isObject(options) ? options : ({} as T)) }

export default (channel: Channel, ids: IdsAPI): DialogsAPI => {
  return {
    openAlert: openSimpleDialog.bind(null, 'alert'),
    openConfirm: openSimpleDialog.bind(null, 'confirm'),
    openPrompt: openSimpleDialog.bind(null, 'prompt'),
    openExtension: openExtensionDialog,
    openCurrentApp: openCurrentAppDialog,
    openCurrent: openCurrentDialog,
    selectSingleEntry: openEntitySelector.bind(null, 'Entry', false),
    selectSingleAsset: openEntitySelector.bind(null, 'Asset', false),
    selectMultipleEntries: openEntitySelector.bind(null, 'Entry', true),
    selectMultipleAssets: openEntitySelector.bind(null, 'Asset', true),
  }

  function openSimpleDialog(type: string, options?: OpenAlertOptions | OpenConfirmOptions) {
    return channel.call<boolean>('openDialog', type, prepareOptions<OpenAlertOptions | OpenConfirmOptions>(options))
  }

  function openExtensionDialog(optionsInput?: OpenCustomWidgetOptions) {
    let options = prepareOptions<OpenCustomWidgetOptions>(optionsInput)

    // Use provided ID, default to the current extension.
    options = { ...options, id: options?.id || ids.extension }
    if (options.id)
      return channel.call<boolean>('openDialog', 'extension', options)
    else
      throw new Error('Extension ID not provided.')
  }

  function openCurrentDialog(options?: Omit<OpenCustomWidgetOptions, 'id'>) {
    if (ids.app) {
      return openCurrentAppDialog(options)
    }
    else {
      return openExtensionDialog({
        ...options,
        id: ids.extension,
      })
    }
  }

  function openCurrentAppDialog(options?: Omit<OpenCustomWidgetOptions, 'id'>) {
    options = prepareOptions(options)
    if (ids.app) {
      // Force ID of the current app.
      const withForcedId = { ...options, id: ids.app }
      return channel.call('openDialog', 'app', withForcedId)
    }
    else {
      throw new Error('Not in the app context.')
    }
  }

  function openEntitySelector(entityType: string, multiple: boolean, options?: any) {
    options = prepareOptions(options)
    options.entityType = entityType
    options.multiple = multiple

    return channel.call('openDialog', 'entitySelector', options)
  }
}
