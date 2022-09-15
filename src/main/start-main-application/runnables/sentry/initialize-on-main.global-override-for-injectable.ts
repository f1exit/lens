/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "../../../../common/test-utils/get-global-override";
import initializeSentryOnMainInjectable from "./initialize-on-main.injectable";

export default getGlobalOverride(initializeSentryOnMainInjectable, () => () => {});
