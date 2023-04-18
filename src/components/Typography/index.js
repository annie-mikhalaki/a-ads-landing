import React from 'react'
import classes from './typography.module.css'

const classNames = require('classnames')

const Typography = ({ align, children, fontFamily, strong, textTransform, color = 'primary', Element = 'p', ...props }) => {
    var typographyClass = classNames({
        [classes.colorPrimary]: color === 'primary' ? true : false,
        [classes.colorSecondary]: color === 'secondary' ? true : false,
        [classes.colorText]: color === 'text' ? true : false,
        [classes.strong]: strong ? true : false,
        [classes.textTransform]: textTransform === 'uppercase' ? true : false,
        [classes.poppins]: fontFamily === 'Poppins' ? true : false,
        [classes.inter]: fontFamily === 'Inter' ? true : false,
        [classes.center]: align === 'center' ? true : false
      });
    return (
        <Element {...props} className={typographyClass}>
            { children }
        </Element>
    )
}

export default Typography