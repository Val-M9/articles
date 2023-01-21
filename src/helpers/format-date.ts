import dayjs from 'dayjs';

const formatDate = (date: string) => {
  const formattedDate = dayjs(date).format('MMMM D YYYY');
  const day = formattedDate.split(' ')[1];

  let resultDay: string;
  if (day === '1' || day === '21' || day === '31') {
    resultDay = `${day}st,`;
  } else if (day === '2' || day === '22') {
    resultDay = `${day}nd,`;
  } else if (day === '3' || day === '23') {
    resultDay = `${day}rd,`;
  } else {
    resultDay = `${day}th,`;
  }

  const dateArray = formattedDate.split(' ');
  dateArray.splice(1, 1, resultDay);

  return dateArray.join(' ');
};

export { formatDate };
