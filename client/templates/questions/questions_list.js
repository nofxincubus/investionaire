var questionsData = [
{
  question: 'I plan to begin taking money from my investments in :',
  choices: ['1 year or less', '1-2 years', '3-5 years', '6-10 years', '11-15 years', 'More than 15 years']
},
{
  question: ' As I withdraw money from these investments, I plan to spend it over a period of :',
  choices: ['2 year or less', '3-5 years', '6-10 years', '11-15 years', 'More than 15 years']
},
{
  question: 'When making a long-term investment, I plan to keep the money invested for :',
  choices: ['1-2 years', '3-4 years', '5-6 years', '7-8 years', 'More than 8 years']
},
{
  question: ' From September 2008 through November 2008, stocks lost more than 31% of their value. If I owned a stock investment that lost about 31% of its value in three months, I would (If you owned stocks during this period, please select the answer that matches your actions at that time.) : ',
  choices: ['Sell all of the remaining investment', 'Sell some of the remaining investment', 'Hold on to the investment and sell nothing', 'Buy more of the investment']
},
{
  question: 'Generally, I prefer an investment with little or no ups or downs in value, and I am willing to accept the lower returns these investments may make. :',
  choices: ['I strongly disagree', 'I disagree', 'I somewhat agree', 'I agree', 'I strongly agree']
},
{
  question: 'When the market goes down, I tend to sell some of my riskier investments and put the money in safer investments. :',
  choices: ['I strongly disagree', 'I disagree', 'I somewhat agree', 'I agree', 'I strongly agree']
},
{
  question: ' Based only on a brief conversation with a friend, coworker, or relative, I would invest in a mutual fund.',
  choices: ['I strongly disagree', 'I disagree', 'I somewhat agree', 'I agree', 'I strongly agree']
},
{
  question: 'From September 2008 through October 2008, bonds lost nearly 4% of their value. If I owned a bond investment that lost almost 4% of its value in two months, I would : (If you owned bonds during this period, please select the answer that matches your actions at that time.)',
  choices: ['Sell all of the remaining investment', 'Sell some of the remaining investment', 'Hold on to the investment and sell nothing', 'Buy more of the investment']
},
{
  question: 'The chart to the right shows the highest one-year loss and the highest one-year gain on three different hypothetical investments of $10,000.* Given the potential gain or loss in any one year, I would invest my money in :',
  choices: ['Investment A', 'Investment B', 'Investment C']
},
{
  question: 'My current and future income sources (such as salary, Social Security, pension) are :',
  choices: ['Very unstable','Unstable','Somewhat stable','Stable','Very stable']
},
{
  question: 'When it comes to investing in stock or bond mutual funds (or individual stocks or bonds), I would describe myself as :',
  choices: ['Very inexperienced','Somewhat inexperienced','Somewhat experienced','Experienced','Very experienced']
}
];

Template.questionsList.helpers({
  questions: questionsData
});
