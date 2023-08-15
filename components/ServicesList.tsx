"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const ServicesList = () => {
  return (
    <section className="w-full bg-slate-50 border-2 p-4">
      <Accordion allowToggle className="grid grid-cols-3 gap-4">
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Инвентаризация выбросов загрязняющих веществ
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/docs.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center p-4 gap-8">
                <li className="flex flex-col gap-4 bg-red-50 bg-opacity-80 p-4">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Инвентаризация выбросов загрязняющих веществ в атмосферный
                      воздух – комплекс мероприятий, выполняемых
                      природопользователем, включающий выявление, проверку и
                      документальное подтверждение:
                    </p>
                    <ul className="list-disc p-4">
                      <li>
                        наличия, местоположения, количества, состояния
                        источников выделения загрязняющих веществ и источников
                        выбросов;
                      </li>
                      <li>
                        количественного и качественного состава выбросов
                        загрязняющих веществ в атмосферный воздух;
                      </li>
                      <li>
                        оснащения газоочистными установками (ГОУ) организованных
                        стационарных источников выбросов и соответствие
                        фактических параметров работы ГОУ проектным решениям;
                      </li>
                      <li>
                        соответствия технологических процессов и методов
                        производства продукции и энергии, выполнения работ
                        (оказания услуг) наилучшим доступным техническим
                        методам.
                      </li>
                    </ul>
                    <p>
                      Вся эта и иная необходимая информация содержится в Акте
                      инвентаризации выбросов загрязняющих веществ в атмосферный
                      воздух, который является основанием для подтверждения,
                      корректировки или разработки нормативов допустимых
                      выбросов загрязняющих веществ в атмосферный воздух
                      (нормативов ПДВ).
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Разработка проектов нормативов допустимых выбросов
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/docs.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center p-4 gap-8">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-4">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Нормативы допустимых выбросов загрязняющих веществ в
                      атмосферный воздух - максимальные величины поступления
                      загрязняющих веществ в атмосферный воздух, при соблюдении
                      которых обеспечиваются нормативы качества атмосферного
                      воздуха.
                    </p>
                    <p>
                      Порядок установления нормативов допустимых выбросов
                      загрязняющих веществ в атмосферный воздух, разработки
                      проекта нормативов допустимых выбросов загрязняющих
                      веществ в атмосферный воздух регламентирован Инструкцией о
                      порядке установления нормативов допустимых выбросов
                      загрязняющих веществ в атмосферный воздух, утвержденной
                      Постановлением Министерства природных ресурсов и охраны
                      окружающей среды Республики Беларусь.
                    </p>
                    <p>
                      Нормативы допустимых выбросов загрязняющих веществ в
                      атмосферный воздух (временные нормативы допустимых
                      выбросов загрязняющих веществ в атмосферный воздух)
                      устанавливаются для стационарных источников выбросов и
                      (или) совокупности стационарных источников выбросов,
                      сгруппированных по отдельным цехам и производствам
                      природопользователя.
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Паспортизация и аэродинамические испытания вентистем
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/vent.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-8">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Вентиляционная система - комплекс вентиляционных установок
                      и устройств естественной вентиляции, обслуживающих
                      отдельное помещение или здание в целом;
                    </p>

                    <p>
                      Вентиляционная установка - совокупность вентиляционных
                      устройств, оборудованных отдельным вентилятором или другим
                      специальным оснащением для перемещения воздуха;
                    </p>

                    <p>
                      Паспорт вентиляционной установки – документ, содержащий
                      следующую информацию:
                    </p>

                    <ul className="list-disc p-4">
                      <li>
                        назначение вентиляционной установки, ее
                        месторасположение и режим работы;
                      </li>
                      <li>
                        технические характеристики компонентов вентиляционной
                        установки (вентилятор, электродвигатель,
                        воздухонагреватель, воздухоохладитель, увлажнитель
                        воздуха и др.);
                      </li>
                      <li>
                        таблица данных о расходе воздуха и всевозможных
                        отклонениях от предусмотренных в проекте показателей;
                      </li>
                      <li>аэродинамическая схема;</li>
                      <li>
                        заключение об эффективности работы вентиляционной
                        установки на основании результатов аэродинамических
                        испытаний.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Разработка паспортов и проверка эффективности ГОУ
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/vent.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4 p-4 bg-red-50 bg-opacity-80">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Газоочистная установка (ГОУ) - сооружение и (или)
                      оборудование, предназначенные для очистки газов, отходящих
                      от источников выделения загрязняющих веществ, посредством
                      физических, химических, биологических и других методов
                      улавливания, нейтрализации, обезвреживания загрязняющих
                      веществ.
                    </p>
                    <p>
                      Паспорт газоочистной установки – обязательный для каждой
                      газоочистной установки документ (книга в жесткой обложке)
                    </p>
                    <p>
                      При эксплуатации ГОУ осуществляется контроль показателей
                      работы ГОУ инструментальными методами ежегодно, за
                      исключением ГОУ:
                    </p>
                    <ul className="list-disc p-4">
                      <li>
                        предназначенных для очистки от загрязняющих веществ 1-го
                        класса опасности, контроль которых проводится не реже
                        двух раз в год;
                      </li>
                      <li>
                        в состав которых включены аппараты очистки газа групп Э
                        (электрические фильтры), Х (аппараты сорбционной
                        (химической, биологической) очистки газа от газообразных
                        загрязняющих веществ) и Т (аппараты термического,
                        термокаталитического и каталитического способов
                        обезвреживания газообразных загрязняющих веществ) и
                        (или) предназначенных для очистки от загрязняющих
                        веществ 2-го класса опасности, контроль которых
                        проводится не реже двух раз в год;
                      </li>
                      <li>
                        установленных внутри помещения и не имеющих выхода в
                        атмосферный воздух (промышленные пылесосы и иные
                        фильтры).
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Разработка разделов ООС в составе проектной документации
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/project.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-4">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Разработка раздела «Охрана окружающей среды» в составе
                      предпроектной и проектной документации – оценка
                      экологического состояния территории с позиций возможности
                      размещения проектируемого объекта и предварительный
                      качественный прогноз возможных изменений окружающей среды
                      при реализации намечаемого строительства и его негативных
                      последствий.
                    </p>

                    <p>
                      Раздел «Охрана окружающей среды» является неотъемлемой
                      частью проектов строительства и при отсутствии
                      согласованной в установленном порядке нормативной
                      документации объект не будет введен в эксплуатацию. Раздел
                      ООС разрабатывается для предпроектной и проектной
                      документации, для нового строительства, модернизации,
                      реконструкции действующих предприятий.
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Составление экологических паспортов предприятий
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/project.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-4">
                  <p className="text-sm">
                    <p>
                      Экологический паспорт предприятия - документ, содержащий
                      информацию об уровне использования природопользователем
                      ресурсов(природных, вторичных и др.) и степени воздействия
                      его производств на окружающую природную среду, а также
                      сведения о разрешениях на право
                      природопользования,нормативах воздействий и размерах
                      платежей за загрязнение окружающей природной среды и
                      использование природных ресурсов.
                    </p>

                    <p>
                      Экологический паспорт предприятия в обязательном порядке
                      ведут юридические лица и индивидуальные предприниматели,
                      эксплуатирующие здания, сооружения и иные объекты.
                    </p>
                  </p>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Разработка проектов санитарно-защитных зон предприятий
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/zone.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-4">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Санитарно-защитная зона (СЗЗ) - территория с особым
                      режимом использования, размер которой обеспечивает
                      достаточный уровень безопасности здоровья населения от
                      вредного воздействия (химического, биологического,
                      физического) объектов на ее границе и за ней.
                    </p>
                    <p>
                      Установление размеров расчетной СЗЗ проводится на
                      основании проекта СЗЗ с расчетами рассеивания выбросов
                      загрязняющих веществ в атмосферном воздухе, уровней
                      физического воздействия, с оценкой риска здоровью
                      населения воздействия объекта.
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Проведение расчетов шума (акустический расчет)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/zone.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-4">
                  <p className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Расчет уровня шума (акустический расчет) выполняется в
                      проектной документации строительства жилых,
                      производственных и общественных зданий. Акустический
                      расчет проводится с целью обеспечить нормативные параметры
                      уровня шума на территории жилой застройки.
                    </p>
                    <p>
                      При проведении акустического расчета выявляются источники
                      шума, определяются их шумовые характеристики, определяется
                      степень влияния источников шума на объекты жилой
                      застройки, в случае несоблюдения санитарных норм,
                      разрабатываются шумозащитные мероприятия.
                    </p>
                    <p>
                      Выступать источниками шума на предприятии могут
                      технологическое оборудование, транспортные средства,
                      механизмы и другое оборудование.
                    </p>
                  </p>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Разработка инструкций по обращению с отходами
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/scrap.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-4">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      Инструкция по обращению с отходами производства –
                      локальный нормативный правовой акт, определяющий порядок
                      организации и осуществления деятельности, связанной с
                      образованием, включая нормирование образования отходов,
                      сбором, учетом, перевозкой, хранением, передачей на
                      использование, обезвреживание, захоронение отходов,
                      образующихся в процессе деятельности организации.
                    </p>

                    <p>
                      Инструкция по обращению с отходами разрабатывается и
                      утверждается юридическими лицами, осуществляющими
                      обращение с отходами производства, за исключением
                      индивидуальных предпринимателей и микроорганизаций.
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgb(2, 132, 199)", color: "white" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-xs lg:text-lg"
              >
                Контрольные замеры и локальный мониторинг
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <article className="bg-[url('../public/services/control.jpg')] bg-cover bg-center">
              <ul className="text-xl flex flex-col items-center gap-8 p-4">
                <li className="flex flex-col gap-4  bg-red-50 bg-opacity-80 p-4">
                  <div className="text-xs lg:text-sm flex flex-col gap-2">
                    <p>
                      При отборе проб и проведении измерений в области охраны
                      окружающей среды, проведении локального мониторинга
                      окружающей среды измерение концентраций загрязняющих
                      веществ и показателей, которые могут образовываться и
                      (или) находиться в районе осуществления хозяйственной и
                      иной деятельности, оказывающей вредное воздействие на
                      окружающую среду, проводится инструментальными методами по
                      соответствующим аттестованным методикам (методам)
                      измерений.
                    </p>
                    <p>
                      Отбор проб и измерения в области охраны окружающей среды
                      при осуществлении производственных наблюдений выбросов
                      загрязняющих веществ в атмосферный воздух от стационарных
                      источников выбросов проводятся с установленной
                      периодичностью, для объектов воздействия на атмосферный
                      воздух, включенных в систему локального мониторинга
                      окружающей среды и производственных наблюдений в области
                      охраны окружающей среды, рационального использования
                      природных ресурсов, объектами наблюдения которых являются
                      выбросы загрязняющих веществ в атмосферный воздух от
                      стационарных источников выбросов.
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default ServicesList;
