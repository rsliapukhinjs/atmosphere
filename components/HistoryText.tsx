"use client";

import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";

const steps = [
  {
    title: "02.10.1989 г.",
    description:
      'В структуре МНПК "Экомир" и его головного предприятия "Центр Звездный мир" создано предприятие Атмосфера',
  },
  {
    title: "11.07.1990 г.",
    description:
      'Зарегистрирован Устав и открыт расчетный счет предприятия "Атмосфера"',
  },
  {
    title: "24.06.1996 г.",
    description:
      'Химическая лаборатория, входящая в состав предприятия "Атмосфера", аккредитована органами Белстандарта на независимость и техническую компетентность.',
  },
  {
    title: "31.07.2000 г.",
    description:
      'Предприятие "Атмосфера" реорганизовано в Научно-техническое общество с дополнительной ответственностью "Атмосфера" (ОДО"Атмосфера")',
  },
  {
    title: "2000 г. - по настоящее время",
    description:
      'За годы работы на рынке услуг в области охраны окружающей среды и охраны труда Заказчиками ОДО "Атмосфера" неоднократно являлись и являются в настоящее время такие крупные предприятия как ОАО "БМЗ" – управляющая компания холдинга "БМК", ОАО "Светлогорский ЦКК", ОАО "Гомсельмаш" и его структурные подразделения, ОАО "Гомельстекло", РПУП "Гомельоблгаз", РУП "Гомельэнерго" и многие другие.',
  },
];

const HistoryText = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <article className="w-full lg:w-2/3 p-8 rounded-lg text-md  bg-white border-2">
      <Stepper index={-1} orientation="vertical" height="auto" gap="8">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <article className="ml-8 flex flex-col gap-4">
              <h2 className="text-lg font-bold border-b-2">{step.title}</h2>
              <p className="text-sm lg:text-md">{step.description}</p>
            </article>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </article>
  );
};

export default HistoryText;
