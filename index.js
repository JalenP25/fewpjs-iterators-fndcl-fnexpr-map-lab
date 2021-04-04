const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (names) => {
  return tutorials.map(members => {
    const section = members.split(' ');
    const casedSection = section.map(section => section.charAt(0).toUpperCase() + section.slice(1));
    const newTitle = casedSection.join(' ');
    return newTitle;
  })
}