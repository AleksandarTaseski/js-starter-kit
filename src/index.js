import numeral from 'numeral';

const formattedValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${formattedValue} for this course`);
