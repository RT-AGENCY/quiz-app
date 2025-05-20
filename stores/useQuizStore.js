// stores/useQuizStore.js
import { defineStore } from 'pinia';
import { quizData } from '~/models/quiz';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    quiz: quizData,
    currentRoundIndex: 0,
    currentQuestionIndex: 0,
    userAnswers: {},
    currentScore: 0
  }),

  getters: {
    currentRound: (state) => state.quiz.rounds[state.currentRoundIndex],
    currentQuestion: (state) => {
      const round = state.quiz.rounds[state.currentRoundIndex];
      return round.questions[state.currentQuestionIndex];
    }
  },

  actions: {
    answerQuestion(questionId, answer) {
      this.userAnswers[questionId] = answer;
      // Дополнительная логика проверки ответа...
    }
  }
});