import { QuizTag, QuizTagCategory, QuizThumb } from './types/quizzes'

export const tags: { [key: string]: QuizTag } = {
  Political: {
    Name: QuizTagCategory.POLITICAL,
    Icon: 'landmark',
    Color: '#00647D',
  },
  Economic: {
    Name: QuizTagCategory.ECONOMIC,
    Icon: 'coins',
    Color: '#008E0B',
  },
  Philosophical: {
    Name: QuizTagCategory.PHILOSOPHICAL,
    Icon: 'brain',
    Color: '#8B3E91',
  },
  Psychological: {
    Name: QuizTagCategory.PSYCHOLOGICAL,
    Icon: 'users',
    Color: '#A50034',
  },
  Others: {
    Name: QuizTagCategory.OTHERS,
    Icon: 'question',
    Color: '#E0950B',
  },
}

export const quizzes: QuizThumb[] = [
  {
    Title: 'Political Compass',
    ID: 'political_compass',
    Tags: [tags.Political, tags.Economic],
  },
  {
    Title: 'Political Ideas',
    ID: 'political_ideas',
    Tags: [tags.Political, tags.Economic, tags.Philosophical, tags.Others],
  },
  {
    Title: 'Economic Freedom Analysis',
    ID: 'economic_freedom_analysis',
    Tags: [tags.Economic],
  },
  {
    Title: 'Personal Freedom Analysis',
    ID: 'personal_freedom_analysis',
    Tags: [tags.Political, tags.Philosophical, tags.Others],
  },
  {
    Title: '8Values',
    ID: '8values',
    Tags: [tags.Political, tags.Economic],
  },
  {
    Title: '9Axes',
    ID: '9axes',
    Tags: [tags.Political, tags.Economic],
  },
  {
    Title: 'MyPolitics',
    ID: 'mypolitics',
    Tags: [tags.Political, tags.Economic],
  },
]
