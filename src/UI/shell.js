import m from "mithril"
import {MainScreen} from "./Screen";

class AppShellComponent {
    view() {
        return m(MainScreen)
    }
}

export { AppShellComponent };
