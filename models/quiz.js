// models/quiz.js
export const quizData = {
  title: "Квиз общих знаний",
  rounds: [
    {
      name: "Раунд 1: Обычные вопросы",
      questions: [
        {
          id: 1,
          text: "Какая страна является самой большой по площади в мире?",
          type: "multiple",
          options: ["Китай", "США", "Россия", "Канада"],
          correctAnswer: "Россия",
          points: 1
        },
        // Другие вопросы...
      ]
    }
    // Другие раунды...
  ]
};