"use client";
import React from "react";
import { Accordion } from "rizzui";
import { OpenAccordion, CloseAccordion } from "@/icons";

const Assurance = () => {
  const data = [
    {
      title: "Resume Screening",
      content:
        "We review resumes to ensure they meet the minimum requirements for the job.",
    },
    {
      title: "Video Interview",
      defaultOpen: true,
      content:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      title: "Technical Evaluation",
      content: "We test candidates on their technical skills.",
    },
    {
      title: "Application Review",
      content:
        "We review applications to ensure they meet the minimum requirements for the job.",
    },
    {
      title: "Lets get to work",
      content:
        "We hand-pick highly skilled candidates so you can onboard them in a matter of days.",
    },
  ];
  return (
    <div className="pb-[92px] pt-[149px] app-container">
      <div className="space-y-[30px]">
        <h3 className="font-bold text-[54px] text-[#202229] max-w-[570px] leading-[64px]">
          How we ensure you’re in good hands.
        </h3>
        <p className="text-[22px] leading-8 font-[300] max-w-[646px]">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        <div>
          {data.map((item, i) => (
            <Accordion
              key={item.title}
              defaultOpen={item.defaultOpen}
              className="border  my-1 max-w-[635px] px-5 py-[11px] rounded-[7px] "
            >
              <Accordion.Header>
                {/* @ts-ignore */}
                {({ open }: { open: boolean }) => (
                  <div
                    className={`flex w-full cursor-pointer items-center gap-x-[23px]  text-base font-semibold ${
                      open && "pb-[16px]"
                    }`}
                  >
                    {open ? (
                      <OpenAccordion className="h-[57px] w-[57px]" />
                    ) : (
                      <CloseAccordion className="h-[57px] w-[57px]" />
                    )}
                    <label>
                      step {i + 1}:{" "}
                      <span className="font-light">{item.title}</span>
                    </label>
                  </div>
                )}
              </Accordion.Header>
              <Accordion.Body className="font-light">
                {item.content}
              </Accordion.Body>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assurance;
