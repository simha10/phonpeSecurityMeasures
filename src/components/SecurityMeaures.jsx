import React, { useState } from 'react';
import styles from './SecurityMeasures.module.css';
const SecurityMeasures = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Find out more about PhonePe Safety</h1>
      <div className={styles.grid}>
        {questions.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <h3 className={styles.question}>{item.question}</h3>
            {activeIndex === index && (
              <div className={styles.answer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const questions = [
  {
    question: "How does PhonePe keep my payments safe?",
    answer: "PhonePe uses multiple layers of security to keep your payments safe.",
  },
  {
    question: "What can I do to keep my transactions safe?",
    answer: (
      <ul>
        <li>Never share your UPI PIN, OTP, CVV, or card details with anyone.</li>
        <li>Never enter your UPI PIN to receive money on PhonePe.</li>
        <li>Avoid downloading third-party apps from unknown sources.</li>
      </ul>
    ),
  },
  {
    question: "What if someone tries to login to my account?",
    answer: "PhonePe will notify you immediately and take appropriate action to secure your account.",
  },
  {
    question: "Where can I learn about payment fraud?",
    answer: "You can visit our fraud prevention section for detailed information.",
  },
  {
    question: "What's the safest way to reach PhonePe support?",
    answer: "Use the in-app support section to reach out to PhonePe support safely.",
  },
];

export default SecurityMeasures;
