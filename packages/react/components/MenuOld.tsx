import React from 'react'
import { AnimatePresence } from 'framer-motion'

import Entity from './internal/Entity'

import { CommonDynamicPanelProps } from '../types'
import { transition, variants } from '../data'

interface MenuProps extends CommonDynamicPanelProps {
  
}

export const Menu = ({ isOpen }: MenuProps) => {
  return (
    <div className="hydra-menu-placeholder">
      <AnimatePresence>
        {isOpen && (
          <Entity variants={variants.ui.menu} transition={transition.ui.menu} className="hydra-menu">
            <div className="links">
              <a href="#">Link 1</a>
            </div>
          </Entity>
        )}
      </AnimatePresence>
    </div>
  )
}

Menu.defaultProps = {

}