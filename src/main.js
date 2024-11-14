import m from 'mithril';

import { AppShellComponent } from './UI/shell';

function domready(callback) {
    if (document.readyState !== 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
}

domready(() => {
    m.mount(document.body, AppShellComponent);
});