import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { FuseAnimate } from "@fuse";
import { useDispatch, useSelector } from "react-redux";
import withReducer from "app/store/withReducer";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

function AnalyticsDashboardApp() {
  const dispatch = useDispatch();
  const widgets = useSelector(
    ({ analyticsDashboardApp }) => analyticsDashboardApp.widgets.data
  );

  useEffect(() => {
    dispatch(Actions.getWidgets());
  }, [dispatch]);

  if (!widgets) {
    return null;
  }
  return (
    <div className="w-full">
      <FuseAnimate animation="transition.slideUpIn" delay={200}>
        <div className="flex flex-col md:flex-row sm:p-8 container">
          <div className="flex flex-1 flex-col min-w-0">
            <Timeline>
              <TimelineEvent
                title="John Doe sent a SMS"
                createdAt="2016-09-12 10:06 PM"
                icon={<i className="material-icons md-18">textsms</i>}
              >
                <div className="flex flex-col sm:flex sm:flex-row pb-20">
                  <div className="widget flex w-full sm:w-1/2 p-1">
                    <Col xs={10} md={10}>
                      <Image
                        rounded
                        alt="nusing"
                        src="https://images-na.ssl-images-amazon.com/images/I/51sxDSBN6ML._SX331_BO1,204,203,200_.jpg"
                      />
                    </Col>
                  </div>

                  <div className="widget w-full sm:w-1/2 p-16">
                  <div>
                  </div>
                  <Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
                  What are your top campaigns?
                </Typography>
                  </div>
                </div>
              </TimelineEvent>
              <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
              >
                Like we talked, you said that you would share the shipment
                details to Zambia? This is an urgent order and so I am losing patience.
                Can you expedite the process and pls do share the details asap.
                Consider this a gentle reminder if you are on track already!
              </TimelineEvent>
            </Timeline>
          </div>

        
        </div>
      </FuseAnimate>
    </div>
  );
}

export default withReducer("analyticsDashboardApp", reducer)(
  AnalyticsDashboardApp
);
