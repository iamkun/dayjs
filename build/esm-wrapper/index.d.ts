/// <reference path="../types/locale/index.d.ts" />

import {PluginFunc, locale, unix, extend} from '../index'
import dayjs = require('dayjs');

interface DayjsStatic extends dayjs {
  locale: typeof locale
  unix: typeof unix
  extend: typeof extend
}

export default DayjsStatic

export {PluginFunc}

