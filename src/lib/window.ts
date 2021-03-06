import { Channel } from './channel'
import { WindowAPI } from '~/types'

export default (currentWindow: Window, channel: Channel): WindowAPI => {
  // We assume MutationObserver was defined by the web-app
  const { document, MutationObserver } = currentWindow
  const windowAPI: WindowAPI = { startAutoResizer, stopAutoResizer, updateHeight }

  const autoUpdateHeight = () => {
    updateHeight()
  }

  const observer = new MutationObserver(autoUpdateHeight)
  let oldHeight: number
  let isAutoResizing = false

  return windowAPI

  function startAutoResizer() {
    updateHeight()
    if (isAutoResizing)
      return

    isAutoResizing = true
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    })
    currentWindow.addEventListener('resize', autoUpdateHeight)
  }

  function stopAutoResizer() {
    if (!isAutoResizing)
      return

    isAutoResizing = false
    observer.disconnect()
    currentWindow.removeEventListener('resize', autoUpdateHeight)
  }

  function updateHeight(height: number | null = null) {
    if (height === null)
      height = Math.ceil(document.documentElement.getBoundingClientRect().height)

    if (height !== oldHeight) {
      channel.send('setHeight', height)
      oldHeight = height
    }
  }
}
