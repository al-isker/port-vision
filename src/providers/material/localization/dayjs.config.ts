import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { language } from '@/shared/config/i18n/language';

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale(language);
