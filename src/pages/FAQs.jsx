import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { withRouter } from "react-router-dom";
import FAQDropdown from "../components/FAQDropdown";
import patterns from "../images/shapestwo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const FAQData = [
  {
    question: "What are the Covid safe entry requirements?",
    answer: `To gain access to Highrise Festival this year we will ask ALL customers, staff and artists to take an at-home lateral flow test (irrespective of vaccination status) no more than 24 hours before arriving on site to the festival, verifying that the test shows negative results.        
        We also will be operating further measures to reduce the risk of COVID-19 including:
        
        • Increased ventilation through all tents/structures
        • Face masks for all “customer facing” staff on site
        • Increased hand washing and sanitisation points throughout the site
        
        Any ticket holders who test positive in a pre-event lateral flow and who cannot attend will be able to roll their ticket over to 2023.`,
  },
  {
    question: "When does the festival start and end?",
    answer: `The main gates open at midday on 25th August. Once in, you are free to leave the site at any time, but you will only be allowed back in between 10:00 and 22:00 each day.
        The festival ends on 27th August and we ask that all festival-goers leave site by 12:00 latest. `,
  },
  {
    question: "Where can I get a festival site map?",
    answer:
      "Site maps will be emailed to all ticket holders in advance of the festival.",
  },
  {
    question: "When can I get a full programme?",
    answer:
      "There will be an app with set times available to festival goers at the start of August. A full programme will be available on site.",
  },
  {
    question: "Will there be showers available for campers?",
    answer:
      "Yes, there will be showers available in the campsites for all festival goers. Remember your own towels and toiletries!",
  },
  {
    question: "Will BBQs or campfires be permitted on campsites?",
    answer:
      "Unfortunately not. Any open fires or naked flames are prohibited at Highrise Festival for safety reasons. There will be no shortage of great hot food over the weekend from our on site stalls.",
  },
  {
    question: "Is it ok to bring my own sound system?",
    answer:
      "No, please think about your fellow campers and keep noise to a minimum. There will be plenty of music over the weekend!",
  },
  {
    question: "Can I stay in the local area and commute each day?",
    answer:
      "Yes, festival goers can leave the site at any time but you will only be allowed back in between 10:00 and 22:00 each day.",
  },
  {
    question: "What food & drink will be available on site?",
    answer:
      "Highrise Festival is proud to offer a range of street food stalls celebrating great flavours of the world. With plenty of vegan and gluten free options there is something for everyone.",
  },
  {
    question: "Can I take cash out anywhere at the festival?",
    answer:
      "There will be ATMs on the site but we would recommend festival goers to still bring cash for the weekend to avoid queueing.",
  },
  {
    question: "Can I bring my own bike?",
    answer:
      "There is a bike lock up point situated onsite, although security are stationed within the vicinity. Bikes are left at owners risk, please bring double locks for your bikes, just as you would elsewhere.",
  },
  {
    question: "Can I bring alcohol into the festival?",
    answer: `Upon first entry to site, you can bring your own alcohol (for consumption on the campsite) up to the personal allowance of EITHER:

        12 cans of beer/lager/cider
        2 plastic bottles of wine per person. No spirits are allowed.
        Once you have been wristbanded, you will not be able to bring in any additional alcohol.
        
        All drinks have to be sealed on entry to the festival.
        
        There is no set limit on soft drinks or food.`,
  },
];

const FAQs = (history, location, match) => {
  const classes = useStyles();

  const getQuestions = () => {
    return FAQData.map((obj) => {
      return <FAQDropdown question={obj.question} answer={obj.answer} />;
    });
  };

  return (
    <div class="faq-wrapper">
      <div class="faq-background">
        <div className="faq-container">
          {/* <div className="patterns-one">
            {/* <img src={patterns} alt="patterns" /> */}
          {/* </div> */}
          {getQuestions()}
          {/* <div className="patterns-two">
                <img src={patterns} alt="patterns" />
            </div> */}
        </div>
      </div>
      {/* <div class="footer">FOOTER</div> */}
    </div>
  );
};

export default withRouter(FAQs);
