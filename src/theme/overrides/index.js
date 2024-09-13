import merge from 'lodash/merge';

import { card } from './components/card';
import { paper } from './components/paper';
import { appBar } from './components/appbar';
import { drawer } from './components/drawer';
import { dialog } from './components/dialog';
import { avatar } from './components/avatar';
import { button } from './components/button';
import { defaultProps } from './default-props';
import { popover } from './components/popover';
import { tooltip } from './components/tooltip';
import { svgIcon } from './components/svg-icon';
import { backdrop } from './components/backdrop';
import { progress } from './components/progress';
import { checkbox } from './components/checkbox';
import { textField } from './components/textfield';
import { typography } from './components/typography';
import { cssBaseline } from './components/css-baseline';

export function componentsOverrides(theme) {
  const components = merge(
    defaultProps(theme),
    //

    card(theme),
    paper(theme),
    button(theme),
    dialog(theme),
    appBar(theme),
    avatar(theme),
    drawer(theme),
    tooltip(theme),
    popover(theme),
    svgIcon(theme),
    checkbox(theme),
    backdrop(theme),
    progress(theme),
    textField(theme),
    typography(theme),
    cssBaseline(theme)
  );

  return components;
}
