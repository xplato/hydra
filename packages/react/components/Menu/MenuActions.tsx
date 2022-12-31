import React, { MouseEventHandler } from "react"

import MenuAction from './MenuAction'
import SubmenuItem from './SubmenuItem'

import { Action, ActionConfig } from './types'

interface Props {
  actions: Action[]
  actionClickDoesCloseMenu?: boolean
  close: () => void
  config: ActionConfig
}

const MenuActions = ({ actions, actionClickDoesCloseMenu, close, config }: Props) => {
  return (
    <div className="w-100p actions" role="none">
      {actions.map((action, index) => {
        const onClick: MouseEventHandler = (ev) => {
          if (actionClickDoesCloseMenu && action.clickDoesCloseMenu !== false) {
            close()
          }

          if (typeof action.onClick === "function") {
            // @ts-ignore
            action.onClick(ev)
          }
        }

        if (action.label === "separator") {
          return <div key={action.id} className="separator"></div>
        }

        const actionProps = {
          index: index,
          click: onClick,
          ...action,
        }

        if (action.submenu) {
          return <SubmenuItem key={action.label} actionProps={actionProps} config={config} />
        }

        return <MenuAction key={action.label} config={config} {...actionProps} />
      })}
    </div>
  )
}

export default MenuActions
