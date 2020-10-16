/**
  * 剩余 $天 $时:$分:$秒
  * @param timeGap {number} 结束时间戳
  * @return {object}
*/
import {
  floor,
} from '../tools';
export default timeGap => {
  if (typeof(timeGap) !== 'number') throw Error('param require a number');
  if (timeGap < 0) return {
    isEnd: true,
    day: '00',
    hour: '00',
    minute: '00',
    second: '00',
  };
  const secGap = timeGap / 1000;
  const unitDay = 60 * 60 * 24;
  const unitHour = 60 * 60;
  const unitMinute = 60;
  const day = floor(secGap / unitDay);
  const hour = floor(secGap / unitHour % 24);
  const minute = floor(secGap / unitMinute % 60);
  const second = floor(secGap % 60);
  return {
    isEnd: false,
    day,
    hour,
    minute,
    second,
  }
}