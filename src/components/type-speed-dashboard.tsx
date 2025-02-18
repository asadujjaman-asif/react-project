import React, { useState,useRef } from 'react'
import { FiRefreshCw } from "react-icons/fi";
import { LuTimer } from "react-icons/lu";
import Button from "./button";
import Select from "./select";
import Textarea from "./textarea";
import SummaryCard from "./summary-card";
import { twMerge } from 'tailwind-merge';

const sampleTexts = [
  "Technology is growing rapidly, changing how we live and work. Artificial intelligence, cloud computing, and cybersecurity play a major role in today’s digital world. Businesses rely on modern software and tools to stay competitive.",
  "Web development continues to evolve with frameworks like React and Vue. As digital threats rise, cybersecurity experts work to keep data safe. Keeping up with new trends is essential for IT professionals to stay ahead in the industry.",
  "The IT world is always changing, bringing new tools and innovations. Cloud computing allows businesses to store and process data efficiently. Artificial intelligence is helping companies automate tasks and make better decisions. Web development has advanced with JavaScript frameworks like React and Vue. Cybersecurity is a growing concern, with hackers constantly finding new ways to attack systems. The rise of remote work has increased the demand for collaboration tools. With new programming languages and trends emerging, IT professionals must continue learning. The future of technology depends on automation, data security, and user-friendly applications.",
  "Technology has become an essential part of daily life. From artificial intelligence to cloud computing, businesses rely on modern solutions to operate efficiently. The rise of automation has improved productivity, but it also raises concerns about job security. Cybersecurity experts work hard to protect systems from hacking and data breaches.",
  "Software development is evolving with languages like Python, JavaScript, and Go. Web applications are built using powerful frameworks like React and Vue. The backend is supported by tools like Node.js and Laravel, ensuring scalable performance.",
  "The Internet of Things (IoT) is connecting devices, creating smarter homes and cities. Blockchain technology is transforming industries by providing secure and transparent transactions. As artificial intelligence grows, it enhances industries like healthcare, finance, and marketing.",
  "Technology professionals must continuously learn and adapt to stay ahead. Online courses, coding boot camps, and certifications help keep skills updated. The future will bring even more innovations, shaping how we interact with the digital world.",
];
function TypeSpeed() {
  const randomParagraph = (length:number=50) => {
    const words = "Web development continues to evolve with frameworks like React and Vue. As digital threats rise, cybersecurity experts work to keep data safe. Keeping up with new trends is essential for IT professionals to stay ahead in the industry.".split(" ");
    let paragraph = "";
    for(let i = 0; i < words.length; i++){
      paragraph += words[Math.floor(Math.random() * words.length)] + " ";
    }
    return paragraph;
  }

  const [value,setValue] = useState("");
  const [duration,setDuration] = useState(30);
  const [remaining,setRemaining] = useState(duration);
  const [enable,setEnable] = useState(false);
  const [content,setContent] = useState(randomParagraph(100));
  const [isTestRunning,setTestRunning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [stats,setStats] = useState({wpm:0,cpm:0,accuracy:0,errors:0});

  const handleTyping = (text:string) => {
    setValue(text);
    setTestRunning(true);
    if(text.length<2){
    setRemaining(duration);
    setStats({
      wpm: 0,
      cpm: 0,
      accuracy: 0,
      errors: 0,
    });
   
    intervalRef.current = setInterval(() => {
      setRemaining((prev)=>{
        if(prev===0){
          clearInterval(intervalRef.current!);
          setTestRunning(false);

          setValue((prevValue) => {
            calculateStats(prevValue);
            return prevValue;
          });
          setContent(randomParagraph(100));
          setValue("");
          return 0;
        }
        return prev-1;
      });
      
    },1000);
    }
  }
  const startTest = () => {
    //setTestRunning(true);
    setEnable(true);
  
    
  }

  const resetTest = () => {
    
    if(intervalRef.current){
      clearInterval(intervalRef.current);
    }
    calculateStats(value);
    setTestRunning(false);
    setContent(randomParagraph(100));
    setEnable(false);
    setValue("");
    
  }
 
  const calculateStats = (getValue:string) => {
    let words=getValue.trim().split(" ").length; 
    let characters = getValue.length;
    
    let timeSpent = (duration-remaining) / 60;
    if (timeSpent <= 0) timeSpent = 1; 
    let wpm = characters>0?Math.round(words / timeSpent):0;
    let cpm = characters>0?Math.round(characters / timeSpent):0;

    let errors = 0;
    let minLength = Math.min(content.length,getValue.length);
    for (let i = 0; i < minLength; i++) {
      if (content[i] !== getValue[i]) {
        errors++;
      }
    }

    let accuracy = characters>0?Math.round(((characters - errors) / characters) * 100):0;
    setStats({wpm,cpm,accuracy,errors});
  }
  const formatDuration=(duration:number) => {
    return (
      Math.floor(duration/60) + ":" + (duration % 60).toString().padStart(2,"0")
    );
  }
  
  const renderText = () => {
    return content.split("").map((char,index) => {
      let textColor = "";
      if(value.length > index) {
        const isCorrect = value[index] === char;
        textColor = isCorrect ?"text-green-500":"text-red-800 font-bold";
      }
      return (
        <span key ={index} className={textColor}>{char}</span>
      );
    });  
  };
  return (
    <>
      <main className='h-screen flex items-center justify-center  p-6'>
          <section className='border p-6 rounded-lg bg-white w-full max-w-4xl mt-4'>
            <div className='flex flex-col sm:flex-row'>
                <p className='text-xl font-semibold'>Typing Speed Calculator</p>
                <div className='ms-auto flex items-center gap-5'>
                <Select value={duration.toString()} onValueChange={(value)=>setDuration(parseInt(value))}>
                    <Select.Trigger className="w-32">
                      <Select.Value placeholder="Select" />
                    </Select.Trigger>
                    <Select.Content className="p-2">
                      <Select.Item value="30">30 seconds</Select.Item>
                      <Select.Item value="60">1 Minute</Select.Item>
                      <Select.Item value="120">2 Minutes</Select.Item>
                    </Select.Content>
                  </Select>
                  <Button className={twMerge("inline-flex items-center gap-2",isTestRunning?"bg-red-600 hover:bg-red-700":"bg-slate-800 hover:bg-slate-900")} onClick={isTestRunning?resetTest:startTest}>
                    <FiRefreshCw size={18} />
                    {isTestRunning?'Reset':'Start'}
                  </Button>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 mt-4'>
                  <LuTimer size={18}/>
                  <p className='text-xl font-semibold'>{isTestRunning?formatDuration(remaining):formatDuration(duration)}</p>
              </div>
              <div className='bg-slate-50 rounded-lg p-6 mt-4'>
                  <p className='text-slate-500 text-justify'>{renderText()}</p>
              </div>
              <Textarea
                className="mt-4"
                rows={4}
                placeholder="Type to begin the test"
                disabled={!enable}
                value={value}
               // onChange={(env:any) =>setValue(env.target.value)}
               onChange={(env:any) =>handleTyping(env.target.value)}
              />
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
              <SummaryCard value={stats.wpm.toString()} unit ="WPM" />
              <SummaryCard value={stats.cpm.toString()} unit ="CPM" />
              <SummaryCard value={`${stats.accuracy}%`} unit ="Accuracy" />
              <SummaryCard value={stats.errors.toString()} unit ="Errors" />
             </div>
          </section>
      </main>
    </>
  )
}

export default TypeSpeed