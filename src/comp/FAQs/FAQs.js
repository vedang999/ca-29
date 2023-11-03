import { useRef, useState } from "react"
import "./faq.css";

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 lg:mt-8 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="lg:text-[16px] text-[15px] cursor-pointer lg:pb-5 pb-2  flex items-center justify-between text-lg text-white font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-300">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQs = () => {
    // Your component code here
    const faqsList = [
        {
            q: "What are some random questions to ask?",
            a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
        },
        {
            q: "Do you include common questions?",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "Are these questions for girls or for boys?",
            a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
        },
        {
            q: "What do you wish you had more talent doing?",
            a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
        }
    ]
  
    return (
        <section  id="faqs" className="faq-card-container leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="lg:text-[35px] text-[25px] text-white font-semibold underline">
                    Frequently Asked Questions
                </h1>
                <p className="text-white max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
  };
  
  export default FAQs;
  
// export default () => {

// }