import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Icon,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";
import { FuseAnimateGroup } from "@fuse";
import axios from "axios";
import { Link } from "react-router-dom";

function TimelineTab() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api/profile/timeline").then(res => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className="md:flex max-w-2xl">
      <div className="flex flex-col flex-1 md:pr-32">
        <FuseAnimateGroup
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <div>
            <Card className="w-full overflow-hidden">
              <Input
                className="p-16 w-full"
                classes={{ root: "text-14" }}
                placeholder="Write something.."
                multiline
                rows="6"
                margin="none"
                disableUnderline
              />
              <AppBar
                className="card-footer flex flex-row border-t-1"
                position="static"
                color="default"
                elevation={0}
              >
                <div className="flex-1 items-center">
                  <IconButton aria-label="Add photo">
                    <Icon>photo</Icon>
                  </IconButton>
                  <IconButton aria-label="Mention somebody">
                    <Icon>person</Icon>
                  </IconButton>
                  <IconButton aria-label="Add location">
                    <Icon>location_on</Icon>
                  </IconButton>
                </div>

                <div className="p-8">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    aria-label="post"
                  >
                    POST
                  </Button>
                </div>
              </AppBar>
            </Card>

            <Divider className="my-32" />
          </div>

          <Card className="mb-32 overflow-hidden">
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Recipe"
                  src="https://res.cloudinary.com/chawanangwa/image/upload/v1560520651/profile/2325312890863699.jpg"
                />
              }
              action={
                <IconButton aria-label="more">
                  <Icon>more_vert</Icon>
                </IconButton>
              }
              title={
                <span>
                  <Typography
                    className="inline font-medium mr-4"
                    color="primary"
                    paragraph={false}
                  >
                    {"Mulenga chipimo"}
                  </Typography>
                  {"End of year assignment"}
                </span>
              }
              subheader={"2 days ago"}
            />

            <CardContent className="py-0">
              <Typography component="p" className="mb-16">
                {"This assignment is good and nice please download its free "}
              </Typography>

              <img
                src="https://notionpress.com/blog/wp-content/uploads/2015/07/001-book-brand-cover-back-presentation-mockup-psd.jpg"
                alt="post"
              />
            </CardContent>

            <CardActions disableSpacing>
              <Button size="small" aria-label="Add to favorites">
                <Icon className="text-16 mr-8" color="action">
                  favorite
                </Icon>
                <Typography className="normal-case">Like</Typography>
                <Typography className="normal-case ml-4">({34})</Typography>
              </Button>
              <Button aria-label="Share">
                <Icon className="text-16 mr-8" color="action">
                  share
                </Icon>
                <Typography className="normal-case">Share</Typography>
                <Typography className="normal-case ml-4">({4})</Typography>
              </Button>
              <Button aria-label="Share">
                <Typography className="normal-case">Free</Typography>
              </Button>
              <Button aria-label="Share">
                <Icon className="text-16 mr-8" color="action">
                  download
                </Icon>
                <Typography className="normal-case">Download</Typography>
                <Typography className="normal-case ml-4">({4})</Typography>
              </Button>
            </CardActions>
          </Card>
        </FuseAnimateGroup>
      </div>
    </div>
  );
}

export default TimelineTab;
