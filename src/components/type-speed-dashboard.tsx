import React from 'react'
import { FiRefreshCw } from "react-icons/fi";
import { LuTimer } from "react-icons/lu";
import Button from "./button";
import Select from "./select";
import Textarea from "./textarea";
import SummaryCard from "./summary-card";

function TypeSpeed() {
  return (
    <>
      <main className='h-screen flex items-center justify-center  p-6'>
          <section className='border p-6 rounded-lg bg-white w-full max-w-4xl'>
            <div className='flex'>
                <p className='text-xl font-semibold'>Typing Speed Calculator</p>
                <div className='ms-auto flex items-center gap-5'>
                <Select>
                    <Select.Trigger className="w-32">
                      <Select.Value placeholder="Select" />
                    </Select.Trigger>
                    <Select.Content className="p-2">
                      <Select.Item value="1">1 Minute</Select.Item>
                      <Select.Item value="2">2 Minutes</Select.Item>
                      <Select.Item value="5">5 Minutes</Select.Item>
                    </Select.Content>
                  </Select>
                  <Button className="inline-flex items-center gap-2">
                    <FiRefreshCw size={18} />
                    Start
                  </Button>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 mt-4'>
                  <LuTimer size={18}/>
                  <p className='text-xl font-semibold'>1:00</p>
              </div>
              <div className='bg-slate-50 rounded-lg p-6 mt-4'>
                  <p className='text-slate-500 text-justify'>Technology continues to evolve at a rapid pace. What was
                  cutting-edge yesterday might be obsolete tomorrow. Adaptability and
                  continuous learning are key skills in this field. The ability to be
                  flexible and learn new skills is essential for a successful career
                  in technology.</p>
              </div>
              <Textarea
                className="mt-4"
                rows={4}
                placeholder="Type to begin the test"
                disabled
              />
             <div className='mt-6 grid grid-cols-4 gap-4'>
              <SummaryCard value="0" unit ="WPM" />
              <SummaryCard value="0" unit ="CPM" />
              <SummaryCard value="0%" unit ="Accuracy" />
              <SummaryCard value="0" unit ="Errors" />
             </div>
          </section>
      </main>
    </>
  )
}

export default TypeSpeed