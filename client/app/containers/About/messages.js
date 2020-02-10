/*
 * About Messages
 *
 * This contains all the text for the About container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.About";

export default defineMessages({
  poweredBy: {
    id: `${scope}.poweredBy`,
    defaultMessage: "Powered by AdminLTE"
  }
});
