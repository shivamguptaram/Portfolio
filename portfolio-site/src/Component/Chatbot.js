import React from 'react';
import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
import resume from './ShivamGuptaResume.pdf'


const config ={
    width: "500px",
    height: "500px",
    floating: true,
  };
const Chatbot = () => {
    var trig=''
    return (
        <div>
           <ChatBot headerTitle="Bot" enableSmoothScroll="true"

           steps={[
               {
                   id:'intro',
                   message:'Hello Recruiter. Thank You for Visitng my portfolio.',
                   trigger:'question',
               },
               {
                id:'question', 
                options:[
                  {value:'y', label:'Current Organization', trigger:'current-organization'},
                  {value:'n', label:'Notice Period', trigger:'Notice-period'},
                  {value:'1',label:'Skills',trigger:'Skills'},
                ] 
               },
               {
                id:'current-organization', 
                message:'I am currently working in TCS', 
                trigger:'continue',
               },
               {
                id:'Notice-period', 
                message:'I have to serve 3 months Notice Period', 
                trigger:'continue',
               },
               {
                id:'Skills', 
                message:'I am proficient in MERN Stack and Python', 
                trigger:'continue',
               },
               {
                 id:'continue',
                 message:'Do You want to continue to know more',
                trigger:'continue-options',
                },
               {
                id:'continue-options', 
                options:[
                  {value:'yes', label:'Yes', trigger:'Yes'},
                  {value:'no', label:'No', trigger:'Thank-You'}, 
                ]
               },
               {
                id:'Yes', 
                message:'Please Select your question', 
                trigger:'question'
               },
               {
                id:'Thank-You', 
                message:'Thank You for using Chatbot', 
                }
              

            
           ]}
           {...config}
           />
        </div>
    )
}
export default Chatbot
