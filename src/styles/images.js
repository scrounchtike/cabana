import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

import * as ObjectUtils from '../utils/object';

function createImageComponent(source, styles) {
    if(styles === undefined) {
        styles = []
    } else if(!Array.isArray(styles)) {
        styles = [styles];
    }

    return (props) => {
        let localStyles = styles.slice();
        if(Array.isArray(props.styles)) {
            localStyles = localStyles.concat(props.styles);
            // filter 'styles' from props, which is passed via spread to <img> tag.
            props = ObjectUtils.fromArray(Object.entries(props).filter(([k,v]) => k != 'styles'));
        }

        return <img src={source} className={css(...localStyles)} {...props} />
    };
}

const Styles = StyleSheet.create({
    materialIcon: {
        width: 24,
        height: 24,
    },
    pointer: {
        cursor: 'pointer'
    }
});

const leftArrow = createImageComponent("/img/ic_arrow_left_black_24dp.png", Styles.materialIcon);
const rightArrow = createImageComponent("/img/ic_arrow_right_black_24dp.png", Styles.materialIcon);
const downArrow = createImageComponent("/img/ic_arrow_drop_down_black_24dp.png", Styles.materialIcon)

const clear = createImageComponent("/img/ic_clear_black_24dp.png", [Styles.materialIcon, Styles.pointer]);

export default {rightArrow, leftArrow, downArrow, clear};