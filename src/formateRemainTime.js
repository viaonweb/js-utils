/**
  * 剩余 $天 $时:$分:$秒
  * @param endTime {number} 结束时间戳
  * @return {object}
*/
import {
  floor,
} from '../tools';
export default (endTime) => {
  const secGap = (endTime - Date.now()) / 1000;
  if (secGap < 0) return ['00', '00', '00'];
  const unitDay = 60 * 60 * 24;
  const unitHour = 60 * 60;
  const unitMinute = 60;
  const day = floor(secGap / unitDay);
  const hour = floor(secGap / unitHour % 24);
  const minute = floor(secGap / unitMinute % 60);
  const second = floor(secGap % 60);
  return {
    day,
    hour,
    minute,
    second,
  }
}