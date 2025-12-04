export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Level {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  badge: string;
  badgeColor: "bronze" | "silver" | "gold";
  questions: Question[];
  requiredScore: number;
}

export const levels: Level[] = [
  {
    id: 1,
    name: "Level 1",
    difficulty: "Easy",
    badge: "Bronze Badge",
    badgeColor: "bronze",
    requiredScore: 7,
    questions: [
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Mars", "Venus", "Mercury", "Earth"],
        answer: "Mercury"
      },
      {
        question: "Largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Shark"],
        answer: "Blue Whale"
      },
      {
        question: "Red Planet is?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars"
      },
      {
        question: "National currency of Japan?",
        options: ["Yen", "Won", "Dollar", "Rupee"],
        answer: "Yen"
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7"
      },
      {
        question: "Largest ocean?",
        options: ["Indian", "Pacific", "Atlantic", "Arctic"],
        answer: "Pacific"
      },
      {
        question: "Who discovered gravity?",
        options: ["Newton", "Einstein", "Tesla", "Edison"],
        answer: "Newton"
      },
      {
        question: "Which country has the Eiffel Tower?",
        options: ["Italy", "France", "Germany", "UK"],
        answer: "France"
      },
      {
        question: "Fastest land animal?",
        options: ["Lion", "Tiger", "Cheetah", "Horse"],
        answer: "Cheetah"
      }
    ]
  },
  {
    id: 2,
    name: "Level 2",
    difficulty: "Medium",
    badge: "Silver Badge",
    badgeColor: "silver",
    requiredScore: 7,
    questions: [
      {
        question: "Capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
      },
      {
        question: "Largest desert?",
        options: ["Sahara", "Gobi", "Arabian", "Thar"],
        answer: "Sahara"
      },
      {
        question: "Who wrote Ramayana?",
        options: ["Tulsidas", "Valmiki", "Vyasa", "Kalidasa"],
        answer: "Valmiki"
      },
      {
        question: "Chemical symbol of Gold?",
        options: ["Ag", "Au", "Go", "Gd"],
        answer: "Au"
      },
      {
        question: "Largest planet?",
        options: ["Earth", "Saturn", "Uranus", "Jupiter"],
        answer: "Jupiter"
      },
      {
        question: "National animal of India?",
        options: ["Lion", "Deer", "Tiger", "Elephant"],
        answer: "Tiger"
      },
      {
        question: "Hardest natural substance?",
        options: ["Iron", "Diamond", "Gold", "Platinum"],
        answer: "Diamond"
      },
      {
        question: "Tallest mountain?",
        options: ["K2", "Everest", "Kangchenjunga", "Lhotse"],
        answer: "Everest"
      },
      {
        question: "Slowest animal?",
        options: ["Sloth", "Panda", "Turtle", "Snail"],
        answer: "Sloth"
      },
      {
        question: "Who invented light bulb?",
        options: ["Graham Bell", "Newton", "Thomas Edison", "Tesla"],
        answer: "Thomas Edison"
      }
    ]
  },
  {
    id: 3,
    name: "Level 3",
    difficulty: "Hard",
    badge: "Gold Badge",
    badgeColor: "gold",
    requiredScore: 7,
    questions: [
      {
        question: "Who discovered electricity?",
        options: ["Franklin", "Newton", "Edison", "Faraday"],
        answer: "Franklin"
      },
      {
        question: "Smallest continent?",
        options: ["Africa", "Antarctica", "Europe", "Australia"],
        answer: "Australia"
      },
      {
        question: "Author of Harry Potter?",
        options: ["Rowling", "Tolkien", "Brown", "Lewis"],
        answer: "Rowling"
      },
      {
        question: "Morning Star planet?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Venus"
      },
      {
        question: "Largest river in India?",
        options: ["Ganga", "Yamuna", "Godavari", "Narmada"],
        answer: "Ganga"
      },
      {
        question: "Man who first landed on moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
        answer: "Neil Armstrong"
      },
      {
        question: "Which gas is needed for burning?",
        options: ["Nitrogen", "Oxygen", "CO2", "Hydrogen"],
        answer: "Oxygen"
      },
      {
        question: "Who painted Mona Lisa?",
        options: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"],
        answer: "Da Vinci"
      },
      {
        question: "The longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile"
      },
      {
        question: "Where is Taj Mahal located?",
        options: ["Delhi", "Agra", "Jaipur", "Mumbai"],
        answer: "Agra"
      }
    ]
  }
];
