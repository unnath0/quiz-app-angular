import { Question } from '../../models/question.model';

export const DUMMY_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Java',
    question: 'Which keyword is used to inherit a class in Java?',
    options: ['this', 'super', 'extends', 'implements'],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    category: 'Java',
    question: 'Which collection does not allow duplicates?',
    options: ['List', 'Set', 'Map', 'Queue'],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    category: 'Angular',
    question: 'Which decorator is used to define a component?',
    options: ['@NgModule', '@Injectable', '@Component', '@Directive'],
    correctAnswerIndex: 2,
  },
  {
    id: 4,
    category: 'Angular',
    question: 'Which directive is used for conditional rendering?',
    options: ['*ngFor', '*ngIf', '*ngSwitch', '*ngClass'],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    category: 'SQL',
    question: 'Which SQL command is used to remove a table?',
    options: ['DELETE', 'DROP', 'REMOVE', 'TRUNCATE'],
    correctAnswerIndex: 1,
  },
  {
    id: 6,
    category: 'SQL',
    question: 'Which clause is used to filter records?',
    options: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'],
    correctAnswerIndex: 2,
  },
];
