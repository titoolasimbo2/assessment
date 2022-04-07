import { useState } from "@hookstate/core";
import { useFormik } from "formik";
 
const AssessmentQuestions = ({ listOfQuestions }) => {
 const processing = useState();
 const currentQuestionIndex = useState(0);
 const selected 
 
 const formik = useFormik({
   initialValues: {},
   onSubmit: (values) => {
     processing.set(true);
   },
   // validationSchema: loginvalidationSchema,
 });
 const index = currentQuestionIndex.get();
 const q = listOfQuestions[index];
 const next = () => {
   currentQuestionIndex.set(currentQuestionIndex.get() + 1);
 };
 let buttonHtml;
 if (index === 0) {
   buttonHtml = (
     <>
       <input type="button" value="Next" />
     </>
   );
 } else if (index === listOfQuestions.length - 1) {
   buttonHtml = (
     <>
       <input
         onClick={() => {
           currentQuestionIndex.set(currentQuestionIndex.get() - 1);
         }}
         type="button"
         value="Previous"
       />
       <input type="button" value="Submit" />
     </>
   );
 } else {
   <>
     <input type="button" value="Next" onClick={next} />
   </>;
 }
 return (
   <form onSubmit={formik.handleSubmit}>
     <div key={`question${index}`}>
       <div>Question {index + 1}</div>
       <div>{q?.question}</div>
       <div>
         {q?.type === "multiple-choice" ? (
           <>
             {q?.options.map((o, i) => {
               return (
                 <div key={`option${index}`}>
                   <input
                     type="radio"
                     id={`option${index}`}
                     name={`option${index}`}
                     onChange={formik.getFieldProps("currState").onChange}
                     checked={selectedAnswer[index].selected.get() === o}
                     value={selectedAnswer[index].selected.get()}

                     value=""
                   />
                   {o}
                 </div>
               );
             })}
           </>
         ) : (
           <div>Answer:___________</div>
         )}
       </div>
     </div>
     <div>{buttonHtml}</div>
   </form>
 );
};
 
export default AssessmentQuestions;
 
