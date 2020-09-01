import {
  floor,
} from './tools';
/**
  * 当前时间
  * @param date {number} 当前时间戳
  * @return {object}
*/
export default t => {
  const date = new Date(t);
  const year = date.getFullYear();
  const month = floor(date.getMonth() + 1);
  const day = floor(date.getDate());
  const hour = floor(date.getHours());
  const minute = floor(date.getMinutes());
  const second = floor(date.getSeconds());
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
  };
};